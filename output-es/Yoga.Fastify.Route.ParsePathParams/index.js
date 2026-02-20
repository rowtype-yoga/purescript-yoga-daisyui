import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Foreign$dObject from "../Foreign.Object/index.js";
import * as Record$dUnsafe from "../Record.Unsafe/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const parsePathParamsRLNilRow = {parsePathParamsRL: v => v1 => Data$dEither.$Either("Right", {})};
const parsePathParamsRL = dict => dict.parsePathParamsRL;
const parsePathParams1 = () => dictParsePathParamsRL => ({parsePathParams: v => dictParsePathParamsRL.parsePathParamsRL(Type$dProxy.Proxy)});
const parsePathParamsRLCons = dictIsSymbol => dictParseParam => dictParsePathParamsRL => () => () => (
  {
    parsePathParamsRL: v => obj => {
      const restResult = dictParsePathParamsRL.parsePathParamsRL(Type$dProxy.Proxy)(obj);
      const keyName = dictIsSymbol.reflectSymbol(Type$dProxy.Proxy);
      const v1 = Foreign$dObject._lookup(Data$dMaybe.Nothing, Data$dMaybe.Just, keyName, obj);
      if (v1.tag === "Nothing") {
        if (restResult.tag === "Left") { return Data$dEither.$Either("Left", ["Missing path parameter: " + keyName, ...restResult._1]); }
        if (restResult.tag === "Right") { return Data$dEither.$Either("Left", ["Missing path parameter: " + keyName]); }
        $runtime.fail();
      }
      if (v1.tag === "Just") {
        const v2 = dictParseParam.parseParam(v1._1);
        if (v2.tag === "Left") {
          if (restResult.tag === "Left") { return Data$dEither.$Either("Left", ["Invalid path parameter '" + keyName + "': " + v2._1, ...restResult._1]); }
          if (restResult.tag === "Right") { return Data$dEither.$Either("Left", ["Invalid path parameter '" + keyName + "': " + v2._1]); }
          $runtime.fail();
        }
        if (v2.tag === "Right") {
          if (restResult.tag === "Right") { return Data$dEither.$Either("Right", Record$dUnsafe.unsafeSet(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(v2._1)(restResult._1)); }
          if (restResult.tag === "Left") { return Data$dEither.$Either("Left", restResult._1); }
        }
      }
      $runtime.fail();
    }
  }
);
const parsePathParams = dict => dict.parsePathParams;
export {parsePathParams, parsePathParams1, parsePathParamsRL, parsePathParamsRLCons, parsePathParamsRLNilRow};
