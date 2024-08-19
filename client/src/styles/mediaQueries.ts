interface BaseSize {
	mobileS: string;
	mobileM: string;
	mobileL: string;
	tablet: string;
	laptop: string;
	desktopM: string;
	desktopL: string;
}

interface MiscSize {
	miscSmall: string;
	miscLarge: string;
	miscXLarge: string;
}

interface MaxView extends BaseSize {}

interface MinView extends BaseSize {}

interface MiscMinView extends MiscSize {}

interface MiscMaxView extends Omit<MiscSize, 'miscXLarge'> {}

export const size: BaseSize = {
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '425px',
	tablet: '768px',
	laptop: '1024px',
	desktopM: '1440px',
	desktopL: '2560px',
};

export const miscSize: MiscSize = {
	miscSmall: '505px',
	miscLarge: '1800px',
	miscXLarge: '2000px',
};

export const maxView: MaxView = {
	mobileS: `(max-width: ${size.mobileS})`,
	mobileM: `(max-width: ${size.mobileM})`,
	mobileL: `(max-width: ${size.mobileL})`,
	tablet: `(max-width: ${size.tablet})`,
	laptop: `(max-width: ${size.laptop})`,
	desktopM: `(max-width: ${size.desktopM})`,
	desktopL: `(max-width: ${size.desktopL})`,
};

export const minView: MinView = {
	mobileS: `(min-width: ${size.mobileS})`,
	mobileM: `(min-width: ${size.mobileM})`,
	mobileL: `(min-width: ${size.mobileL})`,
	tablet: `(min-width: ${size.tablet})`,
	laptop: `(min-width: ${size.laptop})`,
	desktopM: `(min-width: ${size.desktopM})`,
	desktopL: `(min-width: ${size.desktopL})`,
};

export const miscMinView: MiscMinView = {
	miscSmall: `(min-width: ${miscSize.miscSmall})`,
	miscLarge: `(min-width: ${miscSize.miscLarge})`,
	miscXLarge: `(min-width: ${miscSize.miscXLarge})`,
};

export const miscMaxView: MiscMaxView = {
	miscSmall: `(max-width: ${miscSize.miscSmall})`,
	miscLarge: `(max-width: ${miscSize.miscLarge})`,
};
