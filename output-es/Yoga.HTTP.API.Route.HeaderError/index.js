import * as $runtime from "../runtime.js";
const $HeaderError = (tag, _1, _2) => ({tag, _1, _2});
const MissingHeader = value0 => $HeaderError("MissingHeader", value0);
const InvalidHeaderValue = value0 => value1 => $HeaderError("InvalidHeaderValue", value0, value1);
const showHeaderError = {
  show: v => {
    if (v.tag === "MissingHeader") { return "Missing required header: " + v._1; }
    if (v.tag === "InvalidHeaderValue") { return "Invalid header '" + v._1 + "': " + v._2; }
    $runtime.fail();
  }
};
const eqHeaderError = {
  eq: x => y => {
    if (x.tag === "MissingHeader") { return y.tag === "MissingHeader" && x._1 === y._1; }
    return x.tag === "InvalidHeaderValue" && y.tag === "InvalidHeaderValue" && x._1 === y._1 && x._2 === y._2;
  }
};
export {$HeaderError, InvalidHeaderValue, MissingHeader, eqHeaderError, showHeaderError};
