import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkSteps = /* #__PURE__ */ React$dBasic$dHooks.component("StepsStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "w-full space-y-8"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "ul",
      {className: "steps w-full"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl("li", {className: "step step-primary"}, "Register"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("li", {className: "step step-primary"}, "Choose plan"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("li", {className: "step"}, "Purchase"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("li", {className: "step"}, "Receive product")
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "ul",
      {className: "steps w-full"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "li",
          {className: "step step-neutral"},
          [Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "step-icon"}, "😀"), Yoga$dReact$dDOM$dInternal.createElementImpl("span", {}, "Step 1")]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "li",
          {className: "step step-neutral"},
          [Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "step-icon"}, "😃"), Yoga$dReact$dDOM$dInternal.createElementImpl("span", {}, "Step 2")]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "li",
          {className: "step"},
          [Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "step-icon"}, "😍"), Yoga$dReact$dDOM$dInternal.createElementImpl("span", {}, "Step 3")]
        )
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "ul",
      {className: "steps steps-vertical"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl("li", {className: "step step-primary"}, "Register"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("li", {className: "step step-primary"}, "Choose plan"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("li", {className: "step"}, "Purchase"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("li", {className: "step"}, "Receive product")
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkSteps)({});
export {$$default as default, mkSteps, pure};
