import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkBadge = /* #__PURE__ */ React$dBasic$dHooks.component("BadgeStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex flex-col gap-6"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "flex flex-wrap gap-2"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "badge badge-neutral "}, "neutral"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "badge badge-primary "}, "primary"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "badge badge-secondary "}, "secondary"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "badge badge-accent "}, "accent"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "badge badge-ghost "}, "ghost")
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "flex flex-wrap gap-2"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "badge badge-primary badge-outline "}, "outline"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "badge badge-primary badge-soft "}, "soft"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "badge badge-primary badge-dash "}, "dash")
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "flex flex-wrap gap-2"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "badge badge-primary badge-lg"}, "large"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "badge badge-primary badge-md"}, "medium"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "badge badge-primary badge-sm"}, "small"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "badge badge-primary badge-xs"}, "tiny")
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "flex gap-2"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "button",
          {className: "btn  "},
          [
            Yoga$dReact$dDOM$dInternal.createElementImpl("span", {}, "Inbox "),
            Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "badge badge-secondary badge-sm"}, "+99")
          ]
        )
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkBadge)({});
export {$$default as default, mkBadge, pure};
