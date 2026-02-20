import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkRadialProgress = /* #__PURE__ */ React$dBasic$dHooks.component("RadialProgressStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex gap-4"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "radial-progress", style: {"--value": 0}, role: "progressbar"}, "0%"),
    Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "radial-progress", style: {"--value": 25}, role: "progressbar"}, "25%"),
    Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "radial-progress", style: {"--value": 50}, role: "progressbar"}, "50%"),
    Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "radial-progress", style: {"--value": 75}, role: "progressbar"}, "75%"),
    Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "radial-progress", style: {"--value": 100}, role: "progressbar"}, "100%")
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkRadialProgress)({});
export {$$default as default, mkRadialProgress, pure};
