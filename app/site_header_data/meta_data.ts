const HOME_META_DATA: PageMetaData[] = [
	{ httpEquiv: 'Content-type', content: 'text/html; charset=utf-8' },
	{
		name: 'viewport',
		content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0',
	},
	{ title: 'Notifi' },
	{ name: 'description', content: 'View sports data ' },
	{
		name: 'keywords',
		content:
			'sports betting, sports betting data, college sports records, ncaa womens basketball, ncaa mens basketball, ncaa football',
	},
	{ property: 'og:url', content: 'https://notifi.app' },
	{ property: 'og:title', content: 'Notifi' },
	{ property: 'og:description', content: 'Sports data' },
];

const AUTH_META_DATA: PageMetaData[] = [
	{ title: 'Notifi | Auth' },
	{
		name: 'description',
		content:
			'Log in to your Notifi account to access sports data and gain insights.',
	},
	{
		name: 'keywords',
		content: 'Sports betting data',
	},
];

export { HOME_META_DATA, AUTH_META_DATA };
