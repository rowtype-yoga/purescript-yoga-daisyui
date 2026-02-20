import * as $runtime from "../runtime.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Record$dUnsafe from "../Record.Unsafe/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const intercalate = /* #__PURE__ */ Data$dArray.intercalate1(Data$dMonoid.monoidString);
const pathPatternSegsSymbol = dictIsSymbol => ({pathPatternSegs: v => "/" + dictIsSymbol.reflectSymbol(Type$dProxy.Proxy)});
const pathPatternSegsSlash = {pathPatternSegs: v => "/"};
const pathPatternSegsRoot = {pathPatternSegs: v => "/"};
const pathPatternSegsParam = dictIsSymbol => ({pathPatternSegs: v => "/:" + dictIsSymbol.reflectSymbol(Type$dProxy.Proxy)});
const pathPatternSegsLit = dictIsSymbol => ({pathPatternSegs: v => "/" + dictIsSymbol.reflectSymbol(Type$dProxy.Proxy)});
const pathPatternSegsCapture = dictIsSymbol => ({pathPatternSegs: v => "/:" + dictIsSymbol.reflectSymbol(Type$dProxy.Proxy)});
const pathPatternSegs = dict => dict.pathPatternSegs;
const pathPatternSegsCaptureCons = dictIsSymbol => dictPathPatternSegs => (
  {pathPatternSegs: v => "/:" + dictIsSymbol.reflectSymbol(Type$dProxy.Proxy) + dictPathPatternSegs.pathPatternSegs(Type$dProxy.Proxy)}
);
const pathPatternSegsLitCons = dictIsSymbol => dictPathPatternSegs => (
  {pathPatternSegs: v => "/" + dictIsSymbol.reflectSymbol(Type$dProxy.Proxy) + dictPathPatternSegs.pathPatternSegs(Type$dProxy.Proxy)}
);
const pathPatternSegsParamCons = dictIsSymbol => dictPathPatternSegs => (
  {pathPatternSegs: v => "/:" + dictIsSymbol.reflectSymbol(Type$dProxy.Proxy) + dictPathPatternSegs.pathPatternSegs(Type$dProxy.Proxy)}
);
const pathPatternSegsPath = dictPathPatternSegs => ({pathPatternSegs: v => dictPathPatternSegs.pathPatternSegs(Type$dProxy.Proxy)});
const pathPatternSegsSymbolCons = dictIsSymbol => dictPathPatternSegs => (
  {pathPatternSegs: v => "/" + dictIsSymbol.reflectSymbol(Type$dProxy.Proxy) + dictPathPatternSegs.pathPatternSegs(Type$dProxy.Proxy)}
);
const pathPatternPath = dictPathPatternSegs => ({pathPattern: v => dictPathPatternSegs.pathPatternSegs(Type$dProxy.Proxy)});
const pathPatternBare = dictPathPatternSegs => ({pathPattern: v => dictPathPatternSegs.pathPatternSegs(Type$dProxy.Proxy)});
const pathPattern = dict => dict.pathPattern;
const pathPatternQueryParams = dictPathPattern => ({pathPattern: v => dictPathPattern.pathPattern(Type$dProxy.Proxy)});
const parsePathRoot = {
  parsePath: v => url => {
    if (url === "/") { return Data$dMaybe.$Maybe("Just", {}); }
    return Data$dMaybe.Nothing;
  }
};
const parsePathLit = dictIsSymbol => (
  {
    parsePath: v => url => {
      if (url === "/" + dictIsSymbol.reflectSymbol(Type$dProxy.Proxy)) { return Data$dMaybe.$Maybe("Just", {}); }
      return Data$dMaybe.Nothing;
    }
  }
);
const parsePath = dict => dict.parsePath;
const parsePathLitCons = dictIsSymbol => dictParsePath => (
  {
    parsePath: v => url => {
      const v1 = Data$dArray.unconsImpl(
        v$1 => Data$dMaybe.Nothing,
        x => xs => Data$dMaybe.$Maybe("Just", {head: x, tail: xs}),
        Data$dArray.filterImpl(v1 => v1 !== "", Data$dString$dCommon.split("/")(url))
      );
      if (v1.tag === "Just") {
        if (v1._1.head === dictIsSymbol.reflectSymbol(Type$dProxy.Proxy)) { return dictParsePath.parsePath(Type$dProxy.Proxy)("/" + intercalate("/")(v1._1.tail)); }
        return Data$dMaybe.Nothing;
      }
      if (v1.tag === "Nothing") { return Data$dMaybe.Nothing; }
      $runtime.fail();
    }
  }
);
const parseParamString = {parseParam: Data$dEither.Right};
const parseParamNumber = {
  parseParam: s => {
    const v = Data$dInt.fromString(s);
    if (v.tag === "Nothing") { return Data$dEither.$Either("Left", "Expected a number but got: " + s); }
    if (v.tag === "Just") { return Data$dEither.$Either("Right", Data$dInt.toNumber(v._1)); }
    $runtime.fail();
  }
};
const parseParamInt = {
  parseParam: s => {
    const v = Data$dInt.fromString(s);
    if (v.tag === "Nothing") { return Data$dEither.$Either("Left", "Expected an integer but got: " + s); }
    if (v.tag === "Just") { return Data$dEither.$Either("Right", v._1); }
    $runtime.fail();
  }
};
const parseParam = dict => dict.parseParam;
const parsePathCapture = dictIsSymbol => dictParseParam => (
  {
    parsePath: v => url => {
      const segments = Data$dArray.filterImpl(v1 => v1 !== "", Data$dString$dCommon.split("/")(url));
      if (segments.length === 1) {
        const v1 = dictParseParam.parseParam(segments[0]);
        if (v1.tag === "Left") { return Data$dMaybe.Nothing; }
        if (v1.tag === "Right") { return Data$dMaybe.$Maybe("Just", {value: v1._1}); }
        $runtime.fail();
      }
      return Data$dMaybe.Nothing;
    }
  }
);
const parsePathCaptureCons = dictIsSymbol => dictParseParam => dictParsePath => () => () => (
  {
    parsePath: v => url => {
      const v1 = Data$dArray.unconsImpl(
        v$1 => Data$dMaybe.Nothing,
        x => xs => Data$dMaybe.$Maybe("Just", {head: x, tail: xs}),
        Data$dArray.filterImpl(v1 => v1 !== "", Data$dString$dCommon.split("/")(url))
      );
      if (v1.tag === "Just") {
        const v2 = dictParseParam.parseParam(v1._1.head);
        if (v2.tag === "Left") { return Data$dMaybe.Nothing; }
        if (v2.tag === "Right") {
          const $0 = dictParsePath.parsePath(Type$dProxy.Proxy)("/" + intercalate("/")(v1._1.tail));
          if ($0.tag === "Just") { return Data$dMaybe.$Maybe("Just", Record$dUnsafe.unsafeSet(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(v2._1)($0._1)); }
          if ($0.tag === "Nothing") { return Data$dMaybe.Nothing; }
        }
        $runtime.fail();
      }
      if (v1.tag === "Nothing") { return Data$dMaybe.Nothing; }
      $runtime.fail();
    }
  }
);
export {
  intercalate,
  parseParam,
  parseParamInt,
  parseParamNumber,
  parseParamString,
  parsePath,
  parsePathCapture,
  parsePathCaptureCons,
  parsePathLit,
  parsePathLitCons,
  parsePathRoot,
  pathPattern,
  pathPatternBare,
  pathPatternPath,
  pathPatternQueryParams,
  pathPatternSegs,
  pathPatternSegsCapture,
  pathPatternSegsCaptureCons,
  pathPatternSegsLit,
  pathPatternSegsLitCons,
  pathPatternSegsParam,
  pathPatternSegsParamCons,
  pathPatternSegsPath,
  pathPatternSegsRoot,
  pathPatternSegsSlash,
  pathPatternSegsSymbol,
  pathPatternSegsSymbolCons
};
