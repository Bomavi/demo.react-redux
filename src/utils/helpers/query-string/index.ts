/* npm imports: common */
import { stringify } from 'query-string';

export const withoutEmptyValues = (obj: any) =>
	Object.keys(obj)
		.filter(k => obj[k] !== undefined && obj[k] !== '')
		.reduce(
			(acc, k) => ({
				...acc,
				[k]: obj[k],
			}),
			{}
		);

export const queryString = (obj: object): string => {
	const objWithoutEmptyValues = withoutEmptyValues(obj);

	if (Object.keys(objWithoutEmptyValues).length > 0) {
		return `?${stringify(objWithoutEmptyValues)}`;
	}

	return '';
};
