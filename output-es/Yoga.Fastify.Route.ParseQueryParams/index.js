import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Foreign$dObject from "../Foreign.Object/index.js";
import * as Record$dUnsafe from "../Record.Unsafe/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const parseQueryParamsFromObjec = {parseQueryParamsFromObjectRL: v => v1 => Data$dEither.$Either("Right", {})};
const parseQueryParamsFromObjectRL = dict => dict.parseQueryParamsFromObjectRL;
const parseQueryParamsFromObjec1 = () => dictParseQueryParamsFromObjectRL => (
  {parseQueryParamsFromObject: v => dictParseQueryParamsFromObjectRL.parseQueryParamsFromObjectRL(Type$dProxy.Proxy)}
);
const parseQueryParamsFromObjec2 = dictIsSymbol => dictParseParam => dictParseQueryParamsFromObjectRL => () => () => (
  {
    parseQueryParamsFromObjectRL: v => obj => {
      const restResult = dictParseQueryParamsFromObjectRL.parseQueryParamsFromObjectRL(Type$dProxy.Proxy)(obj);
      const v1 = Foreign$dObject._lookup(Data$dMaybe.Nothing, Data$dMaybe.Just, dictIsSymbol.reflectSymbol(Type$dProxy.Proxy), obj);
      const value = (() => {
        if (v1.tag === "Nothing") { return Data$dMaybe.Nothing; }
        if (v1.tag === "Just") {
          const v2 = dictParseParam.parseParam(v1._1);
          if (v2.tag === "Left") { return Data$dMaybe.Nothing; }
          if (v2.tag === "Right") { return Data$dMaybe.$Maybe("Just", v2._1); }
        }
        $runtime.fail();
      })();
      if (restResult.tag === "Right") { return Data$dEither.$Either("Right", Record$dUnsafe.unsafeSet(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(value)(restResult._1)); }
      if (restResult.tag === "Left") { return Data$dEither.$Either("Left", restResult._1); }
      $runtime.fail();
    }
  }
);
const parseQueryParamsFromObjec3 = dictIsSymbol => dictParseParam => dictParseQueryParamsFromObjectRL => () => () => (
  {
    parseQueryParamsFromObjectRL: v => obj => {
      const restResult = dictParseQueryParamsFromObjectRL.parseQueryParamsFromObjectRL(Type$dProxy.Proxy)(obj);
      const keyName = dictIsSymbol.reflectSymbol(Type$dProxy.Proxy);
      const v1 = Foreign$dObject._lookup(Data$dMaybe.Nothing, Data$dMaybe.Just, keyName, obj);
      if (v1.tag === "Nothing") {
        if (restResult.tag === "Left") { return Data$dEither.$Either("Left", ["Missing required query parameter: " + keyName, ...restResult._1]); }
        if (restResult.tag === "Right") { return Data$dEither.$Either("Left", ["Missing required query parameter: " + keyName]); }
        $runtime.fail();
      }
      if (v1.tag === "Just") {
        const v2 = dictParseParam.parseParam(v1._1);
        if (v2.tag === "Left") {
          if (restResult.tag === "Left") { return Data$dEither.$Either("Left", ["Invalid query parameter '" + keyName + "': " + v2._1, ...restResult._1]); }
          if (restResult.tag === "Right") { return Data$dEither.$Either("Left", ["Invalid query parameter '" + keyName + "': " + v2._1]); }
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
const parseQueryParamsFromObject = dict => dict.parseQueryParamsFromObject;
export {parseQueryParamsFromObjec, parseQueryParamsFromObjec1, parseQueryParamsFromObjec2, parseQueryParamsFromObjec3, parseQueryParamsFromObject, parseQueryParamsFromObjectRL};
