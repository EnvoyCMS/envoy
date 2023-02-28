/**
 * Envoy CMS.
 *
 * @since     1.0.0
 * @module    Envoy/Core
 * @license   MIT
 * @copyright 2023 Dom Webber, Relucent Ltd & Contributors
 * @author    Dom Webber <dom.webber@hotmail.com> (https://github.com/domwebber)
 * @author    Relucent Ltd <hello@relucent.dev> (https://relucent.dev)
 * @author    Contributors (https://github.com/envoy/graphs/contributors)
 * @see       {@link https://github.com/domwebber/envoy}
 */

const { merge } = require("webpack-merge");
const path = require("path");
const common = require("../../webpack.common");

module.exports = (env) =>
  merge(common(env), {
    target: "node",
    entry: "./src/index.ts",
    output: {
      filename: "index.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
      library: "core",
      umdNamedDefine: true,
      libraryTarget: "umd",
    },
  });
