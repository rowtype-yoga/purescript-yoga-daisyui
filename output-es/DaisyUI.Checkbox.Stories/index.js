import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkCheckbox = /* #__PURE__ */ React$dBasic$dHooks.component("CheckboxStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex flex-col gap-4"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "fieldset"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "fieldset-legend"}, "Login options"),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "label",
          {className: "label"},
          [
            Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "checkbox", className: "checkbox  ", checked: true}),
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: ""}, "Remember me")
          ]
        )
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "flex flex-wrap gap-2"},
      [
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "checkbox", className: "checkbox checkbox-primary ", checked: true}),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "checkbox", className: "checkbox checkbox-secondary ", checked: true}),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "checkbox", className: "checkbox checkbox-accent ", checked: true}),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "checkbox", className: "checkbox checkbox-success ", checked: true}),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "checkbox", className: "checkbox checkbox-warning ", checked: true}),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "checkbox", className: "checkbox checkbox-error ", checked: true})
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "flex flex-wrap gap-2 items-center"},
      [
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "checkbox", className: "checkbox checkbox-primary checkbox-xs", checked: true}),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "checkbox", className: "checkbox checkbox-primary checkbox-sm", checked: true}),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "checkbox", className: "checkbox checkbox-primary checkbox-md", checked: true}),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "checkbox", className: "checkbox checkbox-primary checkbox-lg", checked: true})
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkCheckbox)({});
export {$$default as default, mkCheckbox, pure};
