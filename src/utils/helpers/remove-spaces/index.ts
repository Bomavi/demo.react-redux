export const removeSpaces = (text: string) =>
	text.replace(/^\s+/g, '').replace(/\s{2,}/g, ' ');
