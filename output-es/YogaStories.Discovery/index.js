import * as $runtime from "../runtime.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Node$dFS$dAff from "../Node.FS.Aff/index.js";
import * as Node$dFS$dAsync from "../Node.FS.Async/index.js";
import * as Node$dPath from "../Node.Path/index.js";
const filterA = /* #__PURE__ */ Data$dArray.filterA(Effect$dAff.applicativeAff);
const matchSegments = pats => mods => {
  const v = Data$dArray.unconsImpl(v => Data$dMaybe.Nothing, x => xs => Data$dMaybe.$Maybe("Just", {head: x, tail: xs}), mods);
  const v1 = Data$dArray.unconsImpl(v$1 => Data$dMaybe.Nothing, x => xs => Data$dMaybe.$Maybe("Just", {head: x, tail: xs}), pats);
  if (v.tag === "Nothing") { return v1.tag === "Nothing" || v1.tag === "Just" && v1._1.head === "**" && matchSegments(v1._1.tail)(mods); }
  return v1.tag === "Just" && v.tag === "Just" && (() => {
    if (v1._1.head === "**") { return matchSegments(Data$dArray.sliceImpl(1, pats.length, pats))(mods) || matchSegments(pats)(Data$dArray.sliceImpl(1, mods.length, mods)); }
    if (v1._1.head === "*") { return matchSegments(v1._1.tail)(v._1.tail); }
    return v1._1.head === v._1.head && matchSegments(v1._1.tail)(v._1.tail);
  })();
};
const matchModuleGlob = pattern => moduleName => matchSegments(Data$dString$dCommon.split(".")(pattern))(Data$dString$dCommon.split(".")(moduleName));
const isModuleDir = outputDir => entry => Effect$dAff._bind(Effect$dAff.try(Node$dFS$dAff.toAff1(Node$dFS$dAsync.stat)(Node$dPath.concat([outputDir, entry, "index.js"]))))(result => Effect$dAff._pure((() => {
  if (result.tag === "Right") { return true; }
  if (result.tag === "Left") { return false; }
  $runtime.fail();
})()));
const listOutputModules = outputDir => Effect$dAff._bind(Node$dFS$dAff.toAff1(Node$dFS$dAsync.readdir)(outputDir))(entries => filterA(isModuleDir(outputDir))(entries));
const filterModules = config => modules => {
  const $0 = config.exclude;
  const $1 = config.include;
  return Data$dArray.filterImpl(
    x => !Data$dArray.anyImpl(p => matchSegments(Data$dString$dCommon.split(".")(p))(Data$dString$dCommon.split(".")(x)), $0),
    Data$dArray.filterImpl(name => Data$dArray.anyImpl(p => matchSegments(Data$dString$dCommon.split(".")(p))(Data$dString$dCommon.split(".")(name)), $1), modules)
  );
};
export {filterA, filterModules, isModuleDir, listOutputModules, matchModuleGlob, matchSegments};
