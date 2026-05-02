<!--
================================================================================
SYNC IMPACT REPORT
================================================================================

Version change: 0.0.0 → 1.0.0 (MAJOR - initial adoption)

Modified principles: N/A (initial version)

Added sections:
  - I. Zero-Cost Infrastructure
  - II. TypeScript Strict Mode
  - III. Graceful Degradation
  - IV. Entity Resolution at Boundary
  - V. Data Freshness Transparency
  - VI. Server-Side Data Fetching
  - VII. Private Dashboard, Public Landing
  - VIII. Spec-Driven Development
  - Technology Stack (new section)
  - Development Workflow (new section)
  - Governance

Removed sections: N/A (initial version)

Templates requiring updates:
  - .specify/templates/plan-template.md ✅ No updates needed (generic Constitution Check)
  - .specify/templates/spec-template.md ✅ No updates needed (generic structure)
  - .specify/templates/tasks-template.md ✅ No updates needed (generic task phases)

Follow-up TODOs: None

================================================================================
-->

# Notifi Constitution

## Core Principles

### I. Zero-Cost Infrastructure

Every service MUST operate within free-tier limits. No exceptions.

This is a hard architectural constraint that shapes all decisions:
- Supabase PostgreSQL free tier for database
- Supabase Auth free tier for authentication
- Supabase Edge Functions or pg_cron for scheduled jobs (odds polling)
- AWS Lambda free tier for scraping jobs
- Netlify pro plan for hosting (exception: paid tier approved for hosting only)

**Rationale**: This project is a personal/side project where cost control is paramount. Every
architectural decision must consider API rate limits, storage quotas, and compute budgets.

### II. TypeScript Strict Mode

All code MUST use TypeScript with strict mode enabled. No implicit `any`, no untyped boundaries.

Enforcement:
- `strict: true` in tsconfig.json
- All function parameters and return types MUST be explicitly typed
- External API responses MUST be validated against typed schemas
- No `@ts-ignore` or `@ts-expect-error` without documented justification

**Rationale**: Strict typing catches errors at compile time, improves IDE support, and serves as
living documentation for data shapes flowing through the system.

### III. Graceful Degradation

When a data pipeline fails, the system MUST continue serving stale data and communicate staleness
to the user through visual indicators.

Requirements:
- All cached data MUST include a `fetched_at` timestamp
- UI components MUST display data age when data is older than threshold
- Failed fetches MUST NOT crash the application or show blank screens
- Retry logic with exponential backoff for all external API calls
- Circuit breaker pattern: 3 consecutive failures trip the circuit, half-opens on next cron tick

**Rationale**: External data sources (odds APIs, scrapers) are unreliable. Users prefer seeing
old data with a "stale" indicator over seeing an error page.

### IV. Entity Resolution at Boundary

All external team names from any API or scraper MUST resolve to canonical IDs through the
`team_mappings` table before any database write.

Requirements:
- The `team_mappings` table maps external identifiers to internal canonical IDs
- Ingestion layer MUST normalize all team names before INSERT/UPDATE
- No raw external identifiers may leak past the ingestion layer
- Unknown teams MUST be flagged for manual mapping, not silently dropped

**Rationale**: Different data sources use different team name formats (abbreviations, full names,
alternate spellings). Entity resolution ensures data integrity and enables cross-source joins.

### V. Data Freshness Transparency

The UI MUST always tell the user how old the displayed data is. No silent staleness.

Requirements:
- Every data display component MUST show a "Last updated" timestamp or relative time
- Data older than configured threshold MUST display a visual staleness indicator
- Scheduled refresh times MUST be communicated to users
- API rate limit status SHOULD be visible in admin dashboard

**Rationale**: Betting odds change rapidly. Users must know if they're looking at current data or
stale data to make informed decisions.

### VI. Server-Side Data Fetching

Route loaders MUST fetch data through a service layer (`app/lib/data/`). No client-side API calls
for core dashboard data.

Requirements:
- React Router loaders handle all data fetching for page loads
- Service layer in `app/lib/data/` encapsulates all database queries
- Client-side fetches ONLY permitted for non-critical, progressive enhancement features
- SSR ensures initial page load includes all necessary data

**Rationale**: Server-side data fetching improves performance, SEO, and reduces client complexity.
Route loaders provide predictable data loading lifecycle.

### VII. Private Dashboard, Public Landing

The odds grid and admin override controls MUST live behind authentication. The public surface is
informational only.

Requirements:
- Supabase Auth with email/password for authentication
- Protected routes for: odds grid, admin controls, data management
- Public routes for: landing page, informational content
- No sensitive data exposed on public routes

**Rationale**: The odds data and admin functionality are for personal use. Public access is limited
to marketing/informational content.

### VIII. Spec-Driven Development

No feature work begins without a written specification. Implementation follows the plan, and drift
is reconciled, not ignored.

Workflow:
1. Constitution defines principles (this document)
2. `/speckit.specify` creates feature specification
3. `/speckit.plan` creates implementation plan
4. `/speckit.tasks` generates task list
5. `/speckit.implement` executes tasks

Requirements:
- Every feature follows the full workflow
- Specifications live in `.specify/specs/[###-feature-name]/`
- Drift from specification MUST trigger spec update, not silent deviation
- Git branches follow Spec Kit feature branch convention

**Rationale**: Specifications prevent scope creep, ensure alignment before coding begins, and
provide documentation for future maintenance.

## Technology Stack

**Frontend**:
- React 19 with TypeScript
- React Router v7 (framework mode with SSR and route loaders)
- Vite 8 for build tooling
- Tailwind CSS v4 for styling

**Hosting**:
- Netlify pro plan, deployed as Node server via `@react-router/serve`

**Database**:
- Supabase PostgreSQL (free tier)

**Authentication**:
- Supabase Auth (email/password)

**Scheduled Jobs**:
- Odds polling: Supabase Edge Functions or pg_cron
- Scraping: AWS Lambda (Node.js runtime, free tier)

**Data Sources**:
- RapidAPI Sportsbook API: NCAAM/NCAAF odds (150 req/day limit)
- The-Odds-API: NCAAW odds (500 req/month limit)
- Custom web scraper via Cheerio for team stats

**Package Management**: npm

**Version Control**: Git

## Development Workflow

**Code Quality**:
- TypeScript strict mode enforced
- Functions MUST be small, named clearly, and do one thing
- Consistent patterns across codebase

**Testing Strategy**:
- Unit tests for data transformation and entity resolution logic
- Integration tests for API ingestion pipelines
- End-to-end validation that dashboard renders correct data from database

**Git Workflow**:
- Feature branches follow Spec Kit numbering convention
- Commits MUST be atomic and descriptive
- Each feature gets its own numbered branch

**Error Handling**:
- Retry-with-backoff for all external data sources
- Circuit breaker pattern: 3 consecutive failures trip circuit
- Circuit half-opens on next scheduled cron tick

## Governance

This constitution supersedes all other practices. Amendments require:
1. Documentation of the change rationale
2. Review and approval
3. Migration plan for existing code if principles change

**Compliance**:
- All PRs and reviews MUST verify compliance with these principles
- Complexity MUST be justified against the Zero-Cost Infrastructure principle
- Deviations require explicit documentation and approval

**Amendment Process**:
- MAJOR version: Backward incompatible principle removals or redefinitions
- MINOR version: New principle/section added or materially expanded guidance
- PATCH version: Clarifications, wording, typo fixes, non-semantic refinements

**Version**: 1.0.0 | **Ratified**: 2026-04-30 | **Last Amended**: 2026-04-30
