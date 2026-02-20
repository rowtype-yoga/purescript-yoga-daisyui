import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkProgress = /* #__PURE__ */ React$dBasic$dHooks.component("ProgressStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex flex-col gap-4 w-56"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl("progress", {className: "progress ", value: "0", max: "100"}, ""),
    Yoga$dReact$dDOM$dInternal.createElementImpl("progress", {className: "progress ", value: "10", max: "100"}, ""),
    Yoga$dReact$dDOM$dInternal.createElementImpl("progress", {className: "progress ", value: "40", max: "100"}, ""),
    Yoga$dReact$dDOM$dInternal.createElementImpl("progress", {className: "progress ", value: "70", max: "100"}, ""),
    Yoga$dReact$dDOM$dInternal.createElementImpl("progress", {className: "progress ", value: "100", max: "100"}, ""),
    Yoga$dReact$dDOM$dInternal.createElementImpl("progress", {className: "progress progress-primary", value: "56", max: "100"}, ""),
    Yoga$dReact$dDOM$dInternal.createElementImpl("progress", {className: "progress progress-secondary", value: "56", max: "100"}, ""),
    Yoga$dReact$dDOM$dInternal.createElementImpl("progress", {className: "progress progress-accent", value: "56", max: "100"}, ""),
    Yoga$dReact$dDOM$dInternal.createElementImpl("progress", {className: "progress progress-info", value: "56", max: "100"}, ""),
    Yoga$dReact$dDOM$dInternal.createElementImpl("progress", {className: "progress progress-success", value: "56", max: "100"}, ""),
    Yoga$dReact$dDOM$dInternal.createElementImpl("progress", {className: "progress progress-warning", value: "56", max: "100"}, ""),
    Yoga$dReact$dDOM$dInternal.createElementImpl("progress", {className: "progress progress-error", value: "56", max: "100"}, "")
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkProgress)({});
export {$$default as default, mkProgress, pure};
