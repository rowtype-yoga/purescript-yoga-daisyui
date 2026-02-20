import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkIndicator = /* #__PURE__ */ React$dBasic$dHooks.component("IndicatorStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex flex-col gap-8 items-center"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "indicator"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "span",
          {className: "indicator-item "},
          [Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "badge badge-secondary "}, "99+")]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl("button", {className: "btn  "}, "inbox")
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "indicator"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "span",
          {className: "indicator-item "},
          [Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "badge badge-primary "}, "new")]
        ),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "text", placeholder: "Search...", className: "input input-bordered"})
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "indicator"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "span",
          {className: "indicator-item indicator-bottom"},
          [Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "badge badge-secondary "}, "new")]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "bg-base-300 grid h-32 w-32 place-items-center rounded-box"}, "content")
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkIndicator)({});
export {$$default as default, mkIndicator, pure};
