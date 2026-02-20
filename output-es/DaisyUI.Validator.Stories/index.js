import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkValidator = /* #__PURE__ */ React$dBasic$dHooks.component("ValidatorStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex flex-col gap-4 w-full max-w-xs"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "fieldset"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "fieldset-legend"}, "Email"),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "validator"},
          [
            Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "email", className: "input  ", required: true, placeholder: "mail@site.com"}),
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "validator-hint"}, "Enter valid email address")
          ]
        )
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "fieldset"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "fieldset-legend"}, "Username"),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "validator"},
          [
            Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "text", className: "input  ", required: true, placeholder: "Username"}),
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "validator-hint"}, "Required")
          ]
        )
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkValidator)({});
export {$$default as default, mkValidator, pure};
