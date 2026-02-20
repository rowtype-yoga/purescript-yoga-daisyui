import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dNumber from "../Data.Number/index.js";
import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const valueIsSymbol = {reflectSymbol: () => "value"};
const mkCountdown = /* #__PURE__ */ React$dBasic$dHooks.component("CountdownStory")(props => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex flex-col gap-4 text-4xl"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "span",
      {className: "countdown"},
      [Yoga$dReact$dDOM$dInternal.createElementImpl("span", {style: {"--value": Data$dInt.unsafeClamp(Data$dNumber.floor(props.value))}}, [])]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(/* #__PURE__ */ YogaStories$dControls.initialValuesCons(valueIsSymbol)(YogaStories$dControls.initialValueSliderNumber)(YogaStories$dControls.initialValuesNilRowRow)()()())(/* #__PURE__ */ YogaStories$dControls.renderControlsCons(valueIsSymbol)(YogaStories$dControls.renderControlSliderNumber)(YogaStories$dControls.renderControlsNil)()())(/* #__PURE__ */ YogaStories$dControls.toParamsCons(valueIsSymbol)(YogaStories$dControls.toParamSliderNumber)(YogaStories$dControls.toParamsNil)()())(/* #__PURE__ */ YogaStories$dControls.fromParamsCons(valueIsSymbol)(YogaStories$dControls.fromParamSliderNumber)(YogaStories$dControls.fromParamsNil)()())("default")(mkCountdown)({
  value: {value: 42.0, min: 0.0, max: 99.0, step: 1.0}
});
export {$$default as default, mkCountdown, pure, valueIsSymbol};
