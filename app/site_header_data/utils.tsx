// app/site_header_data/utils.ts
import type { MetaFunction } from 'react-router';

export const createTypedMetaFunction =
	<T = any,>(metaData: PageMetaData[]): MetaFunction<T> =>
	() =>
		metaData as any;
