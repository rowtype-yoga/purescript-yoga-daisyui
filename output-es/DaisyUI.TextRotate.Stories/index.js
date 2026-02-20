import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkTextRotate = /* #__PURE__ */ React$dBasic$dHooks.component("TextRotateStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "text-4xl"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl("span", {}, "I love "),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "span",
      {className: "text-rotate"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "span",
          {},
          [
            Yoga$dReact$dDOM$dInternal.createElementImpl("span", {}, "PureScript"),
            Yoga$dReact$dDOM$dInternal.createElementImpl("span", {}, "DaisyUI"),
            Yoga$dReact$dDOM$dInternal.createElementImpl("span", {}, "Tailwind")
          ]
        )
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkTextRotate)({});
export {$$default as default, mkTextRotate, pure};
