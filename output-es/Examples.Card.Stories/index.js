import * as Examples$dCard from "../Examples.Card/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const contentIsSymbol = {reflectSymbol: () => "content"};
const bodyIsSymbol = {reflectSymbol: () => "body"};
const titleIsSymbol = {reflectSymbol: () => "title"};
const initialValuesCons = /* #__PURE__ */ YogaStories$dControls.initialValuesCons(bodyIsSymbol)(YogaStories$dControls.initialValueStringString)(/* #__PURE__ */ YogaStories$dControls.initialValuesCons(titleIsSymbol)(YogaStories$dControls.initialValueStringString)(YogaStories$dControls.initialValuesNilRowRow)()()())()()();
const styleIsSymbol = {reflectSymbol: () => "style"};
const backgroundIsSymbol = {reflectSymbol: () => "background"};
const borderIsSymbol = {reflectSymbol: () => "border"};
const colorIsSymbol = {reflectSymbol: () => "color"};
const visibleIsSymbol = {reflectSymbol: () => "visible"};
const initialValuesCons1 = /* #__PURE__ */ YogaStories$dControls.initialValuesCons(colorIsSymbol)(YogaStories$dControls.initialValueColorString)(/* #__PURE__ */ YogaStories$dControls.initialValuesCons(visibleIsSymbol)(YogaStories$dControls.initialValueBooleanBoolea)(YogaStories$dControls.initialValuesNilRowRow)()()())()()();
const roundedIsSymbol = {reflectSymbol: () => "rounded"};
const initialValuesCons2 = /* #__PURE__ */ YogaStories$dControls.initialValuesCons(backgroundIsSymbol)(YogaStories$dControls.initialValueColorString)(/* #__PURE__ */ YogaStories$dControls.initialValuesCons(borderIsSymbol)({
  initialValue: schema => initialValuesCons1.initialValues(Type$dProxy.Proxy)(schema)({})
})(/* #__PURE__ */ YogaStories$dControls.initialValuesCons(roundedIsSymbol)(YogaStories$dControls.initialValueBooleanBoolea)(YogaStories$dControls.initialValuesNilRowRow)()()())()()())()()();
const story = /* #__PURE__ */ YogaStories$dStory.story()(/* #__PURE__ */ YogaStories$dControls.initialValuesCons(contentIsSymbol)({
  initialValue: schema => initialValuesCons.initialValues(Type$dProxy.Proxy)(schema)({})
})(/* #__PURE__ */ YogaStories$dControls.initialValuesCons(styleIsSymbol)({initialValue: schema => initialValuesCons2.initialValues(Type$dProxy.Proxy)(schema)({})})(YogaStories$dControls.initialValuesNilRowRow)()()())()()())(/* #__PURE__ */ YogaStories$dControls.renderControlsCons(contentIsSymbol)(/* #__PURE__ */ (() => {
  const $0 = YogaStories$dControls.renderControlsCons(bodyIsSymbol)(YogaStories$dControls.renderControlStringString)(YogaStories$dControls.renderControlsCons(titleIsSymbol)(YogaStories$dControls.renderControlStringString)(YogaStories$dControls.renderControlsNil)()())()();
  return {renderControl: schema => lbl => values => setter => YogaStories$dControls.controlGroup(lbl)($0.renderControls(Type$dProxy.Proxy)(schema)(values)(setter))};
})())(/* #__PURE__ */ YogaStories$dControls.renderControlsCons(styleIsSymbol)(/* #__PURE__ */ (() => {
  const $0 = YogaStories$dControls.renderControlsCons(backgroundIsSymbol)(YogaStories$dControls.renderControlColorString)(YogaStories$dControls.renderControlsCons(borderIsSymbol)((() => {
    const $0 = YogaStories$dControls.renderControlsCons(colorIsSymbol)(YogaStories$dControls.renderControlColorString)(YogaStories$dControls.renderControlsCons(visibleIsSymbol)(YogaStories$dControls.renderControlBooleanBoole)(YogaStories$dControls.renderControlsNil)()())()();
    return {renderControl: schema => lbl => values => setter => YogaStories$dControls.controlGroup(lbl)($0.renderControls(Type$dProxy.Proxy)(schema)(values)(setter))};
  })())(YogaStories$dControls.renderControlsCons(roundedIsSymbol)(YogaStories$dControls.renderControlBooleanBoole)(YogaStories$dControls.renderControlsNil)()())()())()();
  return {renderControl: schema => lbl => values => setter => YogaStories$dControls.controlGroup(lbl)($0.renderControls(Type$dProxy.Proxy)(schema)(values)(setter))};
})())(YogaStories$dControls.renderControlsNil)()())()())(/* #__PURE__ */ YogaStories$dControls.toParamsCons(contentIsSymbol)(/* #__PURE__ */ YogaStories$dControls.toParamRecordRecord()(initialValuesCons)(/* #__PURE__ */ YogaStories$dControls.toParamsCons(bodyIsSymbol)(YogaStories$dControls.toParamStringString)(/* #__PURE__ */ YogaStories$dControls.toParamsCons(titleIsSymbol)(YogaStories$dControls.toParamStringString)(YogaStories$dControls.toParamsNil)()())()()))(/* #__PURE__ */ YogaStories$dControls.toParamsCons(styleIsSymbol)(/* #__PURE__ */ YogaStories$dControls.toParamRecordRecord()(initialValuesCons2)(/* #__PURE__ */ YogaStories$dControls.toParamsCons(backgroundIsSymbol)(YogaStories$dControls.toParamColorString)(/* #__PURE__ */ YogaStories$dControls.toParamsCons(borderIsSymbol)(/* #__PURE__ */ YogaStories$dControls.toParamRecordRecord()(initialValuesCons1)(/* #__PURE__ */ YogaStories$dControls.toParamsCons(colorIsSymbol)(YogaStories$dControls.toParamColorString)(/* #__PURE__ */ YogaStories$dControls.toParamsCons(visibleIsSymbol)(YogaStories$dControls.toParamBooleanBoolean)(YogaStories$dControls.toParamsNil)()())()()))(/* #__PURE__ */ YogaStories$dControls.toParamsCons(roundedIsSymbol)(YogaStories$dControls.toParamBooleanBoolean)(YogaStories$dControls.toParamsNil)()())()())()()))(YogaStories$dControls.toParamsNil)()())()())(/* #__PURE__ */ YogaStories$dControls.fromParamsCons(contentIsSymbol)(/* #__PURE__ */ YogaStories$dControls.fromParamRecordRecord()(initialValuesCons)(/* #__PURE__ */ YogaStories$dControls.fromParamsCons(bodyIsSymbol)(YogaStories$dControls.fromParamStringString)(/* #__PURE__ */ YogaStories$dControls.fromParamsCons(titleIsSymbol)(YogaStories$dControls.fromParamStringString)(YogaStories$dControls.fromParamsNil)()())()()))(/* #__PURE__ */ YogaStories$dControls.fromParamsCons(styleIsSymbol)(/* #__PURE__ */ YogaStories$dControls.fromParamRecordRecord()(initialValuesCons2)(/* #__PURE__ */ YogaStories$dControls.fromParamsCons(backgroundIsSymbol)(YogaStories$dControls.fromParamColorString)(/* #__PURE__ */ YogaStories$dControls.fromParamsCons(borderIsSymbol)(/* #__PURE__ */ YogaStories$dControls.fromParamRecordRecord()(initialValuesCons1)(/* #__PURE__ */ YogaStories$dControls.fromParamsCons(colorIsSymbol)(YogaStories$dControls.fromParamColorString)(/* #__PURE__ */ YogaStories$dControls.fromParamsCons(visibleIsSymbol)(YogaStories$dControls.fromParamBooleanBoolean)(YogaStories$dControls.fromParamsNil)()())()()))(/* #__PURE__ */ YogaStories$dControls.fromParamsCons(roundedIsSymbol)(YogaStories$dControls.fromParamBooleanBoolean)(YogaStories$dControls.fromParamsNil)()())()())()()))(YogaStories$dControls.fromParamsNil)()())()());
const detailed = /* #__PURE__ */ story("detailed")(Examples$dCard.mkCard)({
  content: {title: "Project Update", body: "The new feature has been deployed to staging and is ready for review."},
  style: {border: {color: "#6366f1", visible: true}, background: "#0f172a", rounded: true}
});
const basic = /* #__PURE__ */ story("basic")(Examples$dCard.mkCard)({
  content: {title: "Hello", body: "This is a simple card component."},
  style: {border: {color: "#334155", visible: true}, background: "#1e293b", rounded: true}
});
export {
  backgroundIsSymbol,
  basic,
  bodyIsSymbol,
  borderIsSymbol,
  colorIsSymbol,
  contentIsSymbol,
  detailed,
  initialValuesCons,
  initialValuesCons1,
  initialValuesCons2,
  roundedIsSymbol,
  story,
  styleIsSymbol,
  titleIsSymbol,
  visibleIsSymbol
};
