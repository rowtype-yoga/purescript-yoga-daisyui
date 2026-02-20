import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkSwap = /* #__PURE__ */ React$dBasic$dHooks.component("SwapStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex flex-col gap-6 items-center text-6xl"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "label",
      {className: "swap"},
      [
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "checkbox"}),
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "swap-on"}, "ON"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "swap-off"}, "OFF")
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "label",
      {className: "swap swap-rotate"},
      [
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "checkbox"}),
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "swap-on"}, "🌛"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "swap-off"}, "🌞")
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "label",
      {className: "swap swap-flip"},
      [
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "checkbox"}),
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "swap-on"}, "😈"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "swap-off"}, "😇")
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkSwap)({});
export {$$default as default, mkSwap, pure};
