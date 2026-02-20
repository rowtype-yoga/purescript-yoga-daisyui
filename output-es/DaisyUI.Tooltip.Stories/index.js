import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkTooltip = /* #__PURE__ */ React$dBasic$dHooks.component("TooltipStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex flex-col gap-8 items-center p-16"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "tooltip ", "data-tip": "hello"},
      [Yoga$dReact$dDOM$dInternal.createElementImpl("button", {className: "btn  "}, "Hover me")]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "flex gap-4"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "tooltip tooltip-top", "data-tip": "top"},
          [Yoga$dReact$dDOM$dInternal.createElementImpl("button", {className: "btn  "}, "top")]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "tooltip tooltip-bottom", "data-tip": "bottom"},
          [Yoga$dReact$dDOM$dInternal.createElementImpl("button", {className: "btn  "}, "bottom")]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "tooltip tooltip-left", "data-tip": "left"},
          [Yoga$dReact$dDOM$dInternal.createElementImpl("button", {className: "btn  "}, "left")]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "tooltip tooltip-right", "data-tip": "right"},
          [Yoga$dReact$dDOM$dInternal.createElementImpl("button", {className: "btn  "}, "right")]
        )
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "flex gap-4"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "tooltip tooltip-primary", "data-tip": "primary"},
          [Yoga$dReact$dDOM$dInternal.createElementImpl("button", {className: "btn btn-primary "}, "primary")]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "tooltip tooltip-secondary", "data-tip": "secondary"},
          [Yoga$dReact$dDOM$dInternal.createElementImpl("button", {className: "btn btn-secondary "}, "secondary")]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "tooltip tooltip-accent", "data-tip": "accent"},
          [Yoga$dReact$dDOM$dInternal.createElementImpl("button", {className: "btn btn-accent "}, "accent")]
        )
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkTooltip)({});
export {$$default as default, mkTooltip, pure};
