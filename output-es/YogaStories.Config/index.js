import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dException from "../Effect.Exception/index.js";
import * as Foreign from "../Foreign/index.js";
import * as Node$dEncoding from "../Node.Encoding/index.js";
import * as Node$dFS$dAff from "../Node.FS.Aff/index.js";
import * as Node$dFS$dAsync from "../Node.FS.Async/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Yoga$dJSON from "../Yoga.JSON/index.js";
const readForeignArray = /* #__PURE__ */ Yoga$dJSON.readForeignArray(Yoga$dJSON.readForeignString);
const readJSON = /* #__PURE__ */ (() => {
  const $0 = Yoga$dJSON.readForeignFieldsCons({reflectSymbol: () => "exclude"})(readForeignArray)(Yoga$dJSON.readForeignFieldsCons({reflectSymbol: () => "include"})(readForeignArray)(Yoga$dJSON.readForeignFieldsCons({
    reflectSymbol: () => "outputDir"
  })(Yoga$dJSON.readForeignString)(Yoga$dJSON.readForeignFieldsNilRowRo)()())()())()();
  return x => Yoga$dJSON.bindExceptT.bind(Yoga$dJSON.parseJSON(x))(o => {
    const $1 = $0.getFields(Type$dProxy.Proxy)(o);
    if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
    if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1({})); }
    $runtime.fail();
  });
})();
const show = /* #__PURE__ */ (() => Data$dList$dTypes.showNonEmptyList(Foreign.showForeignError).show)();
const readConfig = path => Effect$dAff._bind(Node$dFS$dAff.toAff2(Node$dFS$dAsync.readTextFile)(Node$dEncoding.UTF8)(path))(content => {
  const v = readJSON(content);
  if (v.tag === "Right") { return Effect$dAff._pure(v._1); }
  if (v.tag === "Left") { return Effect$dAff._throwError(Effect$dException.error("Failed to parse config: " + show(v._1))); }
  $runtime.fail();
});
const defaultConfig = {outputDir: "./output", include: ["**.Stories"], exclude: []};
export {defaultConfig, readConfig, readForeignArray, readJSON, show};
