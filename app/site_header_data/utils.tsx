// app/site_header_data/utils.ts
import type { MetaFunction } from 'react-router';
import { PAGE_ROUTES_DATA } from '../routes/constants';

/**
 * Creates a MetaFunction by looking up the route metadata in PAGE_ROUTES_DATA.
 * Using a key lookup ensures type safety and avoids passing large arrays around.
 */
export const createMetaData = (
	routeKey: keyof typeof PAGE_ROUTES_DATA,
): MetaFunction => {
	return () => {
		const route = PAGE_ROUTES_DATA[routeKey];

		if (!route || !route.metaData) {
			// Fallback: Return a sensible default
			return [{ title: 'Notifi' }];
		}

		return route.metaData as any;
	};
};
