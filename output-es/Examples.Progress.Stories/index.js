import * as Examples$dProgress from "../Examples.Progress/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const colorIsSymbol = {reflectSymbol: () => "color"};
const labelIsSymbol = {reflectSymbol: () => "label"};
const valueIsSymbol = {reflectSymbol: () => "value"};
const demo = /* #__PURE__ */ YogaStories$dStory.story()(/* #__PURE__ */ YogaStories$dControls.initialValuesCons(colorIsSymbol)(YogaStories$dControls.initialValueSelectStringS)(/* #__PURE__ */ YogaStories$dControls.initialValuesCons(labelIsSymbol)(YogaStories$dControls.initialValueStringString)(/* #__PURE__ */ YogaStories$dControls.initialValuesCons(valueIsSymbol)(YogaStories$dControls.initialValueSliderNumber)(YogaStories$dControls.initialValuesNilRowRow)()()())()()())()()())(/* #__PURE__ */ YogaStories$dControls.renderControlsCons(colorIsSymbol)(YogaStories$dControls.renderControlSelectString)(/* #__PURE__ */ YogaStories$dControls.renderControlsCons(labelIsSymbol)(YogaStories$dControls.renderControlStringString)(/* #__PURE__ */ YogaStories$dControls.renderControlsCons(valueIsSymbol)(YogaStories$dControls.renderControlSliderNumber)(YogaStories$dControls.renderControlsNil)()())()())()())(/* #__PURE__ */ YogaStories$dControls.toParamsCons(colorIsSymbol)(YogaStories$dControls.toParamSelectStringString)(/* #__PURE__ */ YogaStories$dControls.toParamsCons(labelIsSymbol)(YogaStories$dControls.toParamStringString)(/* #__PURE__ */ YogaStories$dControls.toParamsCons(valueIsSymbol)(YogaStories$dControls.toParamSliderNumber)(YogaStories$dControls.toParamsNil)()())()())()())(/* #__PURE__ */ YogaStories$dControls.fromParamsCons(colorIsSymbol)(YogaStories$dControls.fromParamSelectStringStri)(/* #__PURE__ */ YogaStories$dControls.fromParamsCons(labelIsSymbol)(YogaStories$dControls.fromParamStringString)(/* #__PURE__ */ YogaStories$dControls.fromParamsCons(valueIsSymbol)(YogaStories$dControls.fromParamSliderNumber)(YogaStories$dControls.fromParamsNil)()())()())()())("demo")(Examples$dProgress.mkProgress)({
  label: "Upload",
  value: {value: 0.65, min: 0.0, max: 1.0, step: 0.01},
  color: {value: "#6366f1", options: ["#6366f1", "#22c55e", "#ef4444", "#f59e0b"]}
});
export {colorIsSymbol, demo, labelIsSymbol, valueIsSymbol};
