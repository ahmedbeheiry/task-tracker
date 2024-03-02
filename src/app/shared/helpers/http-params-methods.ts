export const createQueryString = (
	params: any,
	isCommaSeparated: boolean = true
): string => {
	const queryString = Object.keys(params)
		.filter((key) => {
			if (params[key] != null && params[key] !== '') {
				return true;
			}
			return false;
		})
		.map((key) => {
			const value = params[key];
			if (value instanceof Array) {
				if (isCommaSeparated) {
					const arrayQueryString = `${key}=${value
						.map((v) => encodeURIComponent(v))
						.join(',')}`;
					return arrayQueryString;
				} else {
					const arrayQueryString = `${value
						.map((v) => `${key}=${encodeURIComponent(v)}`)
						.join('&')}`;
					return arrayQueryString;
				}
			}
			return key + '=' + encodeURIComponent(value);
		})
		.join('&');

	return queryString;
};
