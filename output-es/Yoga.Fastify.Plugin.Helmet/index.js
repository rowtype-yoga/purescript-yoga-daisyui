import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
import * as Yoga$dFastify$dPlugin from "../Yoga.Fastify.Plugin/index.js";
import {helmetPlugin} from "./foreign.js";
const hstsOptions = () => Unsafe$dCoerce.unsafeCoerce;
const helmet = () => opts => app => Yoga$dFastify$dPlugin.register(helmetPlugin)(opts)(app);
const cspDirectives = () => Unsafe$dCoerce.unsafeCoerce;
export {cspDirectives, helmet, hstsOptions};
export * from "./foreign.js";
