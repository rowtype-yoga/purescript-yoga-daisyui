import * as $runtime from "../runtime.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dString$dCodePoints from "../Data.String.CodePoints/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Web$dEvent$dEventTarget from "../Web.Event.EventTarget/index.js";
import * as Web$dHTML from "../Web.HTML/index.js";
import * as Web$dHTML$dLocation from "../Web.HTML.Location/index.js";
import * as Web$dHTML$dWindow from "../Web.HTML.Window/index.js";
import {decodeURIComponent, encodeURIComponent} from "./foreign.js";
const pure1 = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const toHash = v => {
  if (v.moduleName.tag === "Just") {
    if (v.exportName.tag === "Just") { return "#/" + v.moduleName._1 + "/" + v.exportName._1; }
    return "#/" + v.moduleName._1;
  }
  return "#";
};
const noSelection = {moduleName: Data$dMaybe.Nothing, exportName: Data$dMaybe.Nothing};
const hashQuery = h => {
  const v = Data$dString$dCodePoints.indexOf("?")(h);
  if (v.tag === "Just") {
    const q = Data$dString$dCodeUnits.drop(Data$dString$dCodeUnits.length(Data$dString$dCodePoints.take(v._1 + 1 | 0)(h)))(h);
    if (q === "") { return Data$dMaybe.Nothing; }
    return Data$dMaybe.$Maybe("Just", q);
  }
  if (v.tag === "Nothing") { return Data$dMaybe.Nothing; }
  $runtime.fail();
};
const hashPath = h => {
  const v = Data$dString$dCodePoints.indexOf("?")(h);
  if (v.tag === "Just") { return Data$dString$dCodePoints.take(v._1)(h); }
  if (v.tag === "Nothing") { return h; }
  $runtime.fail();
};
const parseHash = h => {
  const v = Data$dString$dCommon.split("/")((() => {
    const $0 = hashPath(h);
    if (Data$dString$dCodePoints.take(2)($0) === "#/") { return Data$dString$dCodeUnits.drop(Data$dString$dCodeUnits.length(Data$dString$dCodePoints.take(2)($0)))($0); }
    if (Data$dString$dCodePoints.take(1)($0) === "#") { return Data$dString$dCodeUnits.drop(Data$dString$dCodeUnits.length(Data$dString$dCodePoints.take(1)($0)))($0); }
    return $0;
  })());
  if (v.length === 2) {
    if (v[0] !== "") { return {moduleName: Data$dMaybe.$Maybe("Just", v[0]), exportName: Data$dMaybe.$Maybe("Just", v[1])}; }
    return noSelection;
  }
  if (v.length === 1 && v[0] !== "") { return {moduleName: Data$dMaybe.$Maybe("Just", v[0]), exportName: Data$dMaybe.Nothing}; }
  return noSelection;
};
const useHashRoute = /* #__PURE__ */ (() => {
  const $0 = React$dBasic$dHooks.useState$p(noSelection);
  return () => {
    const a = $0();
    React$dBasic$dHooks.useEffect_(
      (v, v1) => true,
      undefined,
      () => {
        const w = Web$dHTML.window();
        const loc = Web$dHTML$dWindow.location(w)();
        const h = Web$dHTML$dLocation.hash(loc)();
        a._2(parseHash(h))();
        const listener = Web$dEvent$dEventTarget.eventListener(v1 => {
          const $1 = Web$dHTML$dLocation.hash(loc);
          return () => {
            const h$p = $1();
            return a._2(parseHash(h$p))();
          };
        })();
        Web$dEvent$dEventTarget.addEventListener("hashchange")(listener)(false)(w)();
        return Web$dEvent$dEventTarget.removeEventListener("hashchange")(listener)(false)(w);
      }
    );
    return pure1(Data$dTuple.$Tuple(
      a._1,
      modName => expName => () => {
        const w = Web$dHTML.window();
        const loc = Web$dHTML$dWindow.location(w)();
        const h = Web$dHTML$dLocation.hash(loc)();
        return Web$dHTML$dLocation.setHash((() => {
          const $1 = hashQuery(h);
          return "#/" + modName + "/" + expName + (() => {
            if ($1.tag === "Nothing") { return ""; }
            if ($1.tag === "Just") { return "?" + $1._1; }
            $runtime.fail();
          })();
        })())(loc)();
      }
    ))();
  };
})();
const writeHashProps = json => () => {
  const w = Web$dHTML.window();
  const loc = Web$dHTML$dWindow.location(w)();
  const h = Web$dHTML$dLocation.hash(loc)();
  return Web$dHTML$dLocation.setHash(hashPath(h) + "?props=" + encodeURIComponent(json))(loc)();
};
const extractProps = h => {
  const findProps = Data$dArray.findMap(p => {
    if (Data$dString$dCodePoints.take(6)(p) === "props=") {
      return Data$dMaybe.$Maybe("Just", decodeURIComponent(Data$dString$dCodeUnits.drop(Data$dString$dCodeUnits.length(Data$dString$dCodePoints.take(6)(p)))(p)));
    }
    return Data$dMaybe.Nothing;
  });
  const $0 = hashQuery(h);
  if ($0.tag === "Just") { return findProps(Data$dString$dCommon.split("&")($0._1)); }
  if ($0.tag === "Nothing") { return Data$dMaybe.Nothing; }
  $runtime.fail();
};
const readHashProps = () => {
  const w = Web$dHTML.window();
  const loc = Web$dHTML$dWindow.location(w)();
  const h = Web$dHTML$dLocation.hash(loc)();
  return extractProps(h);
};
export {extractProps, hashPath, hashQuery, noSelection, parseHash, pure1, readHashProps, toHash, useHashRoute, writeHashProps};
export * from "./foreign.js";
