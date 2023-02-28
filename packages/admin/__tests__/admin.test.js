/**
 * Envoy CMS.
 *
 * @since     1.0.0
 * @module    Envoy/Admin
 * @license   MIT
 * @copyright 2023 Dom Webber, Relucent Ltd & Contributors
 * @author    Dom Webber <dom.webber@hotmail.com> (https://github.com/domwebber)
 * @author    Relucent Ltd <hello@relucent.dev> (https://relucent.dev)
 * @author    Contributors (https://github.com/envoy/graphs/contributors)
 * @see       {@link https://github.com/domwebber/envoy}
 */

"use strict";

import admin from "../src";
import assert from "assert/strict";

assert.strictEqual(admin(), "Hello from admin");
console.info("admin tests passed");
