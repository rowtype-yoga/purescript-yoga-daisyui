import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Foreign$dObject from "../Foreign.Object/index.js";
import * as Record$dUnsafe from "../Record.Unsafe/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Yoga$dHTTP$dAPI$dRoute$dHeaderError from "../Yoga.HTTP.API.Route.HeaderError/index.js";
const parseHeadersRLNilRow = {parseHeadersRL: v => v1 => Data$dEither.$Either("Right", {})};
const parseHeadersRL = dict => dict.parseHeadersRL;
const parseHeaders1 = () => dictParseHeadersRL => ({parseHeaders: v => dictParseHeadersRL.parseHeadersRL(Type$dProxy.Proxy)});
const parseHeadersRLCons = dictIsSymbol => dictHeaderValue => dictParseHeadersRL => () => () => (
  {
    parseHeadersRL: v => obj => {
      const restResult = dictParseHeadersRL.parseHeadersRL(Type$dProxy.Proxy)(obj);
      const headerName = dictIsSymbol.reflectSymbol(Type$dProxy.Proxy);
      const v1 = Foreign$dObject._lookup(Data$dMaybe.Nothing, Data$dMaybe.Just, headerName, obj);
      if (v1.tag === "Nothing") {
        if (restResult.tag === "Left") { return Data$dEither.$Either("Left", [Yoga$dHTTP$dAPI$dRoute$dHeaderError.$HeaderError("MissingHeader", headerName), ...restResult._1]); }
        if (restResult.tag === "Right") { return Data$dEither.$Either("Left", [Yoga$dHTTP$dAPI$dRoute$dHeaderError.$HeaderError("MissingHeader", headerName)]); }
        $runtime.fail();
      }
      if (v1.tag === "Just") {
        const v2 = dictHeaderValue.parseHeader(v1._1);
        if (v2.tag === "Left") {
          if (restResult.tag === "Left") {
            return Data$dEither.$Either("Left", [Yoga$dHTTP$dAPI$dRoute$dHeaderError.$HeaderError("InvalidHeaderValue", headerName, v2._1), ...restResult._1]);
          }
          if (restResult.tag === "Right") { return Data$dEither.$Either("Left", [Yoga$dHTTP$dAPI$dRoute$dHeaderError.$HeaderError("InvalidHeaderValue", headerName, v2._1)]); }
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
const parseHeaders = dict => dict.parseHeaders;
export {parseHeaders, parseHeaders1, parseHeadersRL, parseHeadersRLCons, parseHeadersRLNilRow};
