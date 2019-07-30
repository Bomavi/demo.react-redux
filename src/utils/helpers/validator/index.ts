export const themeValidator = (themeName: string) => {
	switch (themeName) {
		case 'light':
		case 'dark': {
			return true;
		}

		default:
			return false;
	}
};
