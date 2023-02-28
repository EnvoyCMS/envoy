/**
 * Envoy CMS.
 *
 * @since     1.0.0
 * @module    Envoy
 * @license   MIT
 * @copyright 2023 Dom Webber, Relucent Ltd & Contributors
 * @author    Dom Webber <dom.webber@hotmail.com> (https://github.com/domwebber)
 * @author    Relucent Ltd <hello@relucent.dev> (https://relucent.dev)
 * @author    Contributors (https://github.com/envoy/graphs/contributors)
 * @see       {@link https://github.com/domwebber/envoy}
 */

module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  plugins: ["prettier", "@typescript-eslint", "jsdoc"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:jsdoc/recommended",
    "plugin:prettier/recommended",
    "eslint:recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": ["error"],
  },
};
