import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const headerValueTypeString = {headerValueType: v => "string"};
const headerValueTypeInt = {headerValueType: v => "integer"};
const headerValueString = {parseHeader: Data$dEither.Right, printHeader: x => x};
const headerValueInt = {
  parseHeader: s => {
    const v = Data$dInt.fromString(s);
    if (v.tag === "Just") { return Data$dEither.$Either("Right", v._1); }
    if (v.tag === "Nothing") { return Data$dEither.$Either("Left", "not a valid integer (got: " + s + ")"); }
    $runtime.fail();
  },
  printHeader: Data$dShow.showIntImpl
};
const printHeader = dict => dict.printHeader;
const parseHeader = dict => dict.parseHeader;
const headerValueMaybe = dictHeaderValue => (
  {
    parseHeader: s => Data$dEither.$Either(
      "Right",
      (() => {
        const v = dictHeaderValue.parseHeader(s);
        if (v.tag === "Right") { return Data$dMaybe.$Maybe("Just", v._1); }
        if (v.tag === "Left") { return Data$dMaybe.Nothing; }
        $runtime.fail();
      })()
    ),
    printHeader: v => {
      if (v.tag === "Nothing") { return ""; }
      if (v.tag === "Just") { return dictHeaderValue.printHeader(v._1); }
      $runtime.fail();
    }
  }
);
const headerValueType = dict => dict.headerValueType;
const headerValueTypeMaybe = dictHeaderValueType => ({headerValueType: v => dictHeaderValueType.headerValueType(Type$dProxy.Proxy)});
export {headerValueInt, headerValueMaybe, headerValueString, headerValueType, headerValueTypeInt, headerValueTypeMaybe, headerValueTypeString, parseHeader, printHeader};
