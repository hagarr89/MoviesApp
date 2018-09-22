const BASE_PATH = getWindowVariable('BASE_PATH', 'https://data.fixer.io/api/');

const envConfig = {
	default: {
		ga_id: '1',
		site_base_path: '/'
	}
};

module.exports = {
	BASE_PATH,
	env: envConfig.default
};


function getWindowVariable(name, dv) {
	if (typeof window === 'undefined')
		return dv;
	
	if (window && name in window) {
		return window[name];
	}
	return dv;
}