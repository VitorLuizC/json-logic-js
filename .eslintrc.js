/* eslint-env node */

/**
 * Configuration for ESLint.
 * @type {import('eslint').Linter.Config}
 */
const configuration = {
  extends: "eslint:recommended",
  plugins: ["prettier"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
  },
  rules: {
    "prettier/prettier": "error",
  },
};

module.exports = configuration;
