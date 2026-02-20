import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkButton = /* #__PURE__ */ React$dBasic$dHooks.component("ButtonStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex flex-col gap-6"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "flex flex-wrap gap-2"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl("button", {className: "btn  "}, "Default"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("button", {className: "btn btn-neutral "}, "Neutral"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("button", {className: "btn btn-primary "}, "Primary"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("button", {className: "btn btn-secondary "}, "Secondary"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("button", {className: "btn btn-accent "}, "Accent"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("button", {className: "btn btn-ghost "}, "Ghost"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("button", {className: "btn btn-link "}, "Link")
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "flex flex-wrap gap-2"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl("button", {className: "btn btn-outline "}, "Outline"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("button", {className: "btn btn-soft "}, "Soft"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("button", {className: "btn btn-dash "}, "Dash")
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "flex flex-wrap gap-2 items-center"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl("button", {className: "btn  btn-lg"}, "Large"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("button", {className: "btn  "}, "Normal"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("button", {className: "btn  btn-sm"}, "Small"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("button", {className: "btn  btn-xs"}, "Tiny")
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "flex flex-wrap gap-2"},
      [Yoga$dReact$dDOM$dInternal.createElementImpl("button", {className: "btn btn-primary btn-wide "}, "Wide")]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkButton)({});
export {$$default as default, mkButton, pure};
