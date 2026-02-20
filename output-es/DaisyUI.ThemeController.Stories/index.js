import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkThemeController = /* #__PURE__ */ React$dBasic$dHooks.component("ThemeControllerStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex flex-col gap-6"},
  [
    Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "checkbox", value: "synthwave", className: "toggle theme-controller"}),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "fieldset"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "fieldset-legend"}, "Theme"),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "label",
          {className: "flex gap-2 cursor-pointer items-center"},
          [
            Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "radio", name: "theme-radios", className: "radio radio-sm theme-controller", value: "default"}),
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {}, "Default")
          ]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "label",
          {className: "flex gap-2 cursor-pointer items-center"},
          [
            Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "radio", name: "theme-radios", className: "radio radio-sm theme-controller", value: "retro"}),
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {}, "Retro")
          ]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "label",
          {className: "flex gap-2 cursor-pointer items-center"},
          [
            Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "radio", name: "theme-radios", className: "radio radio-sm theme-controller", value: "cyberpunk"}),
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {}, "Cyberpunk")
          ]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "label",
          {className: "flex gap-2 cursor-pointer items-center"},
          [
            Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "radio", name: "theme-radios", className: "radio radio-sm theme-controller", value: "valentine"}),
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {}, "Valentine")
          ]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "label",
          {className: "flex gap-2 cursor-pointer items-center"},
          [
            Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "radio", name: "theme-radios", className: "radio radio-sm theme-controller", value: "aqua"}),
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {}, "Aqua")
          ]
        )
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkThemeController)({});
export {$$default as default, mkThemeController, pure};
