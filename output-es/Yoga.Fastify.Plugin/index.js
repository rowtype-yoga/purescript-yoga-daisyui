import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Promise$dAff from "../Promise.Aff/index.js";
import {registerImpl} from "./foreign.js";
const register = plugin => opts => app => Effect$dAff._bind(Effect$dAff._liftEffect(() => registerImpl(app, plugin, opts)))(Promise$dAff.toAff$p(Promise$dAff.coerce));
export {register};
export * from "./foreign.js";
