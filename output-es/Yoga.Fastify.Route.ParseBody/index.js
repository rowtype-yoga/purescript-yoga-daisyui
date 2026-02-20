import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Foreign from "../Foreign/index.js";
const show = /* #__PURE__ */ (() => Data$dList$dTypes.showNonEmptyList(Foreign.showForeignError).show)();
const parseBodyRecordRecord = dictReadForeign => (
  {
    parseBody: v => bodyMaybe => {
      if (bodyMaybe.tag === "Nothing") { return Data$dEither.$Either("Left", "Request body is required"); }
      if (bodyMaybe.tag === "Just") {
        const $0 = dictReadForeign.readImpl(bodyMaybe._1);
        if ($0.tag === "Left") { return Data$dEither.$Either("Left", show($0._1)); }
        if ($0.tag === "Right") { return Data$dEither.$Either("Right", $0._1); }
      }
      $runtime.fail();
    }
  }
);
const parseBodyNoBodyUnit = {parseBody: v => v1 => Data$dEither.$Either("Right", undefined)};
const parseBodyJSON = dictReadForeign => (
  {
    parseBody: v => bodyMaybe => {
      if (bodyMaybe.tag === "Nothing") { return Data$dEither.$Either("Left", "Request body is required"); }
      if (bodyMaybe.tag === "Just") {
        const $0 = dictReadForeign.readImpl(bodyMaybe._1);
        if ($0.tag === "Left") { return Data$dEither.$Either("Left", show($0._1)); }
        if ($0.tag === "Right") { return Data$dEither.$Either("Right", $0._1); }
      }
      $runtime.fail();
    }
  }
);
const parseBodyFormData = dictReadForeign => (
  {
    parseBody: v => bodyMaybe => {
      if (bodyMaybe.tag === "Nothing") { return Data$dEither.$Either("Left", "Request body is required"); }
      if (bodyMaybe.tag === "Just") {
        const $0 = dictReadForeign.readImpl(bodyMaybe._1);
        if ($0.tag === "Left") { return Data$dEither.$Either("Left", show($0._1)); }
        if ($0.tag === "Right") { return Data$dEither.$Either("Right", $0._1); }
      }
      $runtime.fail();
    }
  }
);
const parseBody = dict => dict.parseBody;
export {parseBody, parseBodyFormData, parseBodyJSON, parseBodyNoBodyUnit, parseBodyRecordRecord, show};
