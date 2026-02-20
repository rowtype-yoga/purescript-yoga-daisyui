import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkMockupCode = /* #__PURE__ */ React$dBasic$dHooks.component("MockupCodeStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex flex-col gap-4"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "mockup-code"},
      [Yoga$dReact$dDOM$dInternal.createElementImpl("pre", {"data-prefix": "$"}, [Yoga$dReact$dDOM$dInternal.createElementImpl("code", {}, "npm i daisyui")])]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "mockup-code"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl("pre", {}, [Yoga$dReact$dDOM$dInternal.createElementImpl("code", {}, "npm i daisyui")]),
        Yoga$dReact$dDOM$dInternal.createElementImpl("pre", {}, [Yoga$dReact$dDOM$dInternal.createElementImpl("code", {}, "installing...")]),
        Yoga$dReact$dDOM$dInternal.createElementImpl("pre", {}, [Yoga$dReact$dDOM$dInternal.createElementImpl("code", {}, "Done!")])
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "mockup-code"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl("pre", {"data-prefix": "~"}, [Yoga$dReact$dDOM$dInternal.createElementImpl("code", {}, "Downloading...")]),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "pre",
          {"data-prefix": ""},
          [Yoga$dReact$dDOM$dInternal.createElementImpl("code", {}, Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "text-warning"}, "Error!"))]
        )
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkMockupCode)({});
export {$$default as default, mkMockupCode, pure};
