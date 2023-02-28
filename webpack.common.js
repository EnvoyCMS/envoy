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

module.exports = (env) => ({
  mode: env.production ? "production" : "development",
  devtool: env.production ? "inline-source-map" : "eval",
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
  optimization: {
    usedExports: true,
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|jsx|js)?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
});
