import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkToggle = /* #__PURE__ */ React$dBasic$dHooks.component("ToggleStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex flex-col gap-4"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "fieldset"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "fieldset-legend"}, "Notifications"),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "label",
          {className: "flex items-center gap-2 cursor-pointer"},
          [
            Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "checkbox", className: "toggle  ", checked: true}),
            Yoga$dReact$dDOM$dInternal.createElementImpl("span", {}, "Email")
          ]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "label",
          {className: "flex items-center gap-2 cursor-pointer"},
          [Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "checkbox", className: "toggle  "}), Yoga$dReact$dDOM$dInternal.createElementImpl("span", {}, "Push")]
        )
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "flex gap-2"},
      [
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "checkbox", className: "toggle toggle-primary ", checked: true}),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "checkbox", className: "toggle toggle-secondary ", checked: true}),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "checkbox", className: "toggle toggle-accent ", checked: true}),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "checkbox", className: "toggle toggle-success ", checked: true}),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "checkbox", className: "toggle toggle-warning ", checked: true}),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "checkbox", className: "toggle toggle-info ", checked: true}),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "checkbox", className: "toggle toggle-error ", checked: true})
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "flex gap-2 items-center"},
      [
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "checkbox", className: "toggle  toggle-lg", checked: true}),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "checkbox", className: "toggle  ", checked: true}),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "checkbox", className: "toggle  toggle-sm", checked: true}),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "checkbox", className: "toggle  toggle-xs", checked: true})
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkToggle)({});
export {$$default as default, mkToggle, pure};
