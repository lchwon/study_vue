/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
	root: true,
	extends: [
		"plugin:vue/vue3-essential",
		"eslint:recommended",
		"@vue/eslint-config-prettier",
	],
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "error" : "off",
		"prettier/prettier": [
			"error",
			{
				singleQuote: false,
				semi: true,
				tabWidth: 2,
				useTabs: true,
				trailingComma: "all",
				printWidth: 80,
				bracketSpacing: true,
				arrowParens: "avoid",
			},
		],
	},
};
