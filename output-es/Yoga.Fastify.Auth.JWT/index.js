import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dException from "../Effect.Exception/index.js";
import * as Foreign from "../Foreign/index.js";
import * as Promise$dAff from "../Promise.Aff/index.js";
import {signImpl, verifyImpl} from "./foreign.js";
const show1 = /* #__PURE__ */ (() => Data$dList$dTypes.showNonEmptyList(Foreign.showForeignError).show)();
const JWTSecret = x => x;
const newtypeJWTSecret_ = {Coercible0: () => {}};
const verifyJWT = dictReadForeign => () => token => opts => v => Effect$dAff._bind(Effect$dAff.try(Effect$dAff._bind(Effect$dAff._liftEffect(() => verifyImpl(token, opts, v)))(Promise$dAff.toAff$p(Promise$dAff.coerce))))(result => Effect$dAff._pure((() => {
  if (result.tag === "Left") { return Data$dEither.$Either("Left", Effect$dException.showErrorImpl(result._1)); }
  if (result.tag === "Right") {
    const v1 = dictReadForeign.readImpl(result._1);
    if (v1.tag === "Left") { return Data$dEither.$Either("Left", show1(v1._1)); }
    if (v1.tag === "Right") { return Data$dEither.$Either("Right", v1._1); }
  }
  $runtime.fail();
})()));
const signJWT = dictWriteForeign => () => payload => opts => v => {
  const $0 = dictWriteForeign.writeImpl(payload);
  return Effect$dAff._bind(Effect$dAff._liftEffect(() => signImpl($0, opts, v)))(Promise$dAff.toAff$p(Promise$dAff.coerce));
};
export {JWTSecret, newtypeJWTSecret_, show1, signJWT, verifyJWT};
export * from "./foreign.js";
