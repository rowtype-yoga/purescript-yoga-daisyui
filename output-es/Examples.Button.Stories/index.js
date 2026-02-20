import * as $runtime from "../runtime.js";
import * as Data$dGeneric$dRep from "../Data.Generic.Rep/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Examples$dButton from "../Examples.Button/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dControls$dTypes from "../YogaStories.Controls.Types/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const labelIsSymbol = {reflectSymbol: () => "label"};
const subtitleIsSymbol = {reflectSymbol: () => "subtitle"};
const variantIsSymbol = {reflectSymbol: () => "variant"};
const genericToStringSum = {
  genericToString: v => {
    if (v.tag === "Inl") { return "Primary"; }
    if (v.tag === "Inr") {
      if (v._1.tag === "Inl") { return "Secondary"; }
      if (v._1.tag === "Inr") { return "Danger"; }
    }
    $runtime.fail();
  }
};
const genericFromStringSum = {
  genericFromString: s => {
    if (s === "Primary") { return Data$dMaybe.$Maybe("Just", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments)); }
    if (s === "Secondary") { return Data$dMaybe.$Maybe("Just", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments))); }
    if (s === "Danger") { return Data$dMaybe.$Maybe("Just", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.NoArguments))); }
    return Data$dMaybe.Nothing;
  }
};
const enumOptions1 = /* #__PURE__ */ (() => {
  const $0 = YogaStories$dControls$dTypes.genericEnumOptionsSum({genericEnumOptions: v => ["Primary"]})(YogaStories$dControls$dTypes.genericEnumOptionsSum({
    genericEnumOptions: v => ["Secondary"]
  })({genericEnumOptions: v => ["Danger"]}));
  return {enumOptions: v => $0.genericEnumOptions(Type$dProxy.Proxy)};
})();
const story = /* #__PURE__ */ YogaStories$dStory.story()(/* #__PURE__ */ YogaStories$dControls.initialValuesCons(labelIsSymbol)(YogaStories$dControls.initialValueStringString)(/* #__PURE__ */ YogaStories$dControls.initialValuesCons(subtitleIsSymbol)(YogaStories$dControls.initialValueMaybeStringMa)(/* #__PURE__ */ YogaStories$dControls.initialValuesCons(variantIsSymbol)(YogaStories$dControls.initialValueEnum)(YogaStories$dControls.initialValuesNilRowRow)()()())()()())()()())(/* #__PURE__ */ YogaStories$dControls.renderControlsCons(labelIsSymbol)(YogaStories$dControls.renderControlStringString)(/* #__PURE__ */ YogaStories$dControls.renderControlsCons(subtitleIsSymbol)(YogaStories$dControls.renderControlMaybeStringM)(/* #__PURE__ */ YogaStories$dControls.renderControlsCons(variantIsSymbol)(/* #__PURE__ */ YogaStories$dControls.renderControlEnum(Examples$dButton.genericVariant_)(genericToStringSum)(genericFromStringSum)(enumOptions1))(YogaStories$dControls.renderControlsNil)()())()())()())(/* #__PURE__ */ YogaStories$dControls.toParamsCons(labelIsSymbol)(YogaStories$dControls.toParamStringString)(/* #__PURE__ */ YogaStories$dControls.toParamsCons(subtitleIsSymbol)(YogaStories$dControls.toParamMaybeStringMaybeSt)(/* #__PURE__ */ YogaStories$dControls.toParamsCons(variantIsSymbol)({
  toParam: v => x => {
    if (x === "Primary") { return "Primary"; }
    if (x === "Secondary") { return "Secondary"; }
    if (x === "Danger") { return "Danger"; }
    $runtime.fail();
  }
})(YogaStories$dControls.toParamsNil)()())()())()())(/* #__PURE__ */ YogaStories$dControls.fromParamsCons(labelIsSymbol)(YogaStories$dControls.fromParamStringString)(/* #__PURE__ */ YogaStories$dControls.fromParamsCons(subtitleIsSymbol)(YogaStories$dControls.fromParamMaybeStringMaybe)(/* #__PURE__ */ YogaStories$dControls.fromParamsCons(variantIsSymbol)({
  fromParam: v => s => {
    if (s === "Primary") { return Data$dMaybe.$Maybe("Just", Examples$dButton.Primary); }
    if (s === "Secondary") { return Data$dMaybe.$Maybe("Just", Examples$dButton.Secondary); }
    if (s === "Danger") { return Data$dMaybe.$Maybe("Just", Examples$dButton.Danger); }
    return Data$dMaybe.Nothing;
  }
})(YogaStories$dControls.fromParamsNil)()())()())()());
const secondary = /* #__PURE__ */ (() => story("secondary")(Examples$dButton.mkButton)({
  label: "Cancel",
  variant: {value: Examples$dButton.Secondary, options: enumOptions1.enumOptions(Type$dProxy.Proxy)},
  subtitle: Data$dMaybe.$Maybe("Just", "Go back to previous page")
}))();
const primary = /* #__PURE__ */ (() => story("primary")(Examples$dButton.mkButton)({
  label: "Submit",
  variant: {value: Examples$dButton.Primary, options: enumOptions1.enumOptions(Type$dProxy.Proxy)},
  subtitle: Data$dMaybe.$Maybe("Just", "Click to submit the form")
}))();
const $$default = /* #__PURE__ */ (() => story("default")(Examples$dButton.mkButton)({
  label: "Button",
  variant: {value: Examples$dButton.Primary, options: enumOptions1.enumOptions(Type$dProxy.Proxy)},
  subtitle: Data$dMaybe.$Maybe("Just", "A simple button")
}))();
const danger = /* #__PURE__ */ (() => story("danger")(Examples$dButton.mkButton)({
  label: "Delete",
  variant: {value: Examples$dButton.Danger, options: enumOptions1.enumOptions(Type$dProxy.Proxy)},
  subtitle: Data$dMaybe.Nothing
}))();
export {danger, $$default as default, enumOptions1, genericFromStringSum, genericToStringSum, labelIsSymbol, primary, secondary, story, subtitleIsSymbol, variantIsSymbol};
