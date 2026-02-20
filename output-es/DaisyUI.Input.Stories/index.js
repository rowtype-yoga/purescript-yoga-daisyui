import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkInput = /* #__PURE__ */ React$dBasic$dHooks.component("InputStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex flex-col gap-4 w-full max-w-xs"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "fieldset"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "fieldset-legend"}, "What is your name?"),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "text", className: "input  ", placeholder: "Type here"}),
        Yoga$dReact$dDOM$dInternal.createElementImpl("label", {className: "label"}, "Optional")
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "label",
      {className: "floating-label"},
      [
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "email", className: "input input-bordered ", placeholder: "alex@example.com"}),
        Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "label"}, "Email")
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "flex flex-wrap gap-2"},
      [
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "text", className: "input input-primary ", placeholder: "Primary"}),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "text", className: "input input-secondary ", placeholder: "Secondary"}),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "text", className: "input input-accent ", placeholder: "Accent"})
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "flex flex-wrap gap-2 items-center"},
      [
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "text", className: "input  input-lg", placeholder: "Large"}),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "text", className: "input  ", placeholder: "Normal"}),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "text", className: "input  input-sm", placeholder: "Small"}),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "text", className: "input  input-xs", placeholder: "Tiny"})
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "text", className: "input   w-full", disabled: true, placeholder: "Disabled"})
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkInput)({});
export {$$default as default, mkInput, pure};
