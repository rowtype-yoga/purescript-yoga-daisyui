import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkFormControl = /* #__PURE__ */ React$dBasic$dHooks.component("FormControlStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex flex-col gap-4 w-full max-w-xs"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "fieldset"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "fieldset-legend"}, "User details"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("label", {className: "label"}, "Name"),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "text", className: "input  ", placeholder: "Name"}),
        Yoga$dReact$dDOM$dInternal.createElementImpl("label", {className: "label"}, "Email"),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "email", className: "input  ", placeholder: "Email"}),
        Yoga$dReact$dDOM$dInternal.createElementImpl("label", {className: "label"}, "Optional")
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkFormControl)({});
export {$$default as default, mkFormControl, pure};
