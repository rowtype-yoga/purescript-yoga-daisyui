import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNullable from "../Data.Nullable/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dException from "../Effect.Exception/index.js";
import * as Foreign from "../Foreign/index.js";
import * as Node$dEncoding from "../Node.Encoding/index.js";
import * as Node$dFS$dAff from "../Node.FS.Aff/index.js";
import * as Node$dFS$dAsync from "../Node.FS.Async/index.js";
import * as Node$dPath from "../Node.Path/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Yoga$dJSON from "../Yoga.JSON/index.js";
const readForeignArray = /* #__PURE__ */ Yoga$dJSON.readForeignArray(Yoga$dJSON.readForeignString);
const readJSON = /* #__PURE__ */ (() => {
  const $0 = Yoga$dJSON.readForeignFieldsCons({reflectSymbol: () => "exports"})(readForeignArray)(Yoga$dJSON.readForeignFieldsCons({reflectSymbol: () => "moduleName"})(readForeignArray)(Yoga$dJSON.readForeignFieldsCons({
    reflectSymbol: () => "modulePath"
  })(Yoga$dJSON.readForeignString)(Yoga$dJSON.readForeignFieldsNilRowRo)()())()())()();
  return x => Yoga$dJSON.bindExceptT.bind(Yoga$dJSON.parseJSON(x))(o => {
    const $1 = $0.getFields(Type$dProxy.Proxy)(o);
    if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
    if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1({})); }
    $runtime.fail();
  });
})();
const show = /* #__PURE__ */ (() => Data$dList$dTypes.showNonEmptyList(Foreign.showForeignError).show)();
const readCoreFn = outputDir => moduleDirName => Effect$dAff._bind(Node$dFS$dAff.toAff2(Node$dFS$dAsync.readTextFile)(Node$dEncoding.UTF8)(Node$dPath.concat([
  outputDir,
  moduleDirName,
  "corefn.json"
])))(content => {
  const v = readJSON(content);
  if (v.tag === "Right") { return Effect$dAff._pure(v._1); }
  if (v.tag === "Left") { return Effect$dAff._throwError(Effect$dException.error("Failed to parse corefn.json for " + moduleDirName + ": " + show(v._1))); }
  $runtime.fail();
});
const readComponentSource = outputDir => moduleName => {
  const v = Data$dString$dCodeUnits.stripSuffix(".Stories")(moduleName);
  if (v.tag === "Nothing") { return Effect$dAff._pure(Data$dMaybe.Nothing); }
  if (v.tag === "Just") {
    return Effect$dAff._bind(Effect$dAff.try(Effect$dAff._bind(readCoreFn(outputDir)(v._1))(compCorefn => Node$dFS$dAff.toAff2(Node$dFS$dAsync.readTextFile)(Node$dEncoding.UTF8)(compCorefn.modulePath))))(result => {
      if (result.tag === "Right") { return Effect$dAff._pure(Data$dMaybe.$Maybe("Just", result._1)); }
      if (result.tag === "Left") { return Effect$dAff._pure(Data$dMaybe.Nothing); }
      $runtime.fail();
    });
  }
  $runtime.fail();
};
const readModuleInfo = outputDir => moduleDirName => Effect$dAff._bind(readCoreFn(outputDir)(moduleDirName))(corefn => Effect$dAff._bind(Node$dFS$dAff.toAff2(Node$dFS$dAsync.readTextFile)(Node$dEncoding.UTF8)(corefn.modulePath))(sourceCode => {
  const moduleName = Data$dString$dCommon.joinWith(".")(corefn.moduleName);
  return Effect$dAff._bind(readComponentSource(outputDir)(moduleName))(componentSourceCode => Effect$dAff._pure({
    moduleName,
    sourcePath: corefn.modulePath,
    exports: corefn.exports,
    sourceCode,
    componentSourceCode: (() => {
      if (componentSourceCode.tag === "Nothing") { return Data$dNullable.null; }
      if (componentSourceCode.tag === "Just") { return Data$dNullable.notNull(componentSourceCode._1); }
      $runtime.fail();
    })()
  }));
}));
export {readComponentSource, readCoreFn, readForeignArray, readJSON, readModuleInfo, show};
