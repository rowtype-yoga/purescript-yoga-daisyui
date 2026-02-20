import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkDivider = /* #__PURE__ */ React$dBasic$dHooks.component("DividerStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex flex-col w-full"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "card bg-base-300 rounded-box grid h-20 place-items-center"}, "Content"),
    Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "divider"}, "OR"),
    Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "card bg-base-300 rounded-box grid h-20 place-items-center"}, "Content"),
    Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "divider divider-primary"}, "Primary"),
    Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "divider divider-secondary"}, "Secondary"),
    Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "divider divider-accent"}, "Accent"),
    Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "divider divider-neutral"}, "Neutral")
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkDivider)({});
export {$$default as default, mkDivider, pure};
