import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkRadio = /* #__PURE__ */ React$dBasic$dHooks.component("RadioStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex flex-col gap-4"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "fieldset"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "fieldset-legend"}, "Pick a framework"),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "flex flex-col gap-2"},
          [
            Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "radio", name: "radio-1", className: "radio radio-primary ", "aria-label": "Svelte", checked: true}),
            Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "radio", name: "radio-1", className: "radio radio-primary ", "aria-label": "Vue"}),
            Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "radio", name: "radio-1", className: "radio radio-primary ", "aria-label": "React"})
          ]
        )
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "flex gap-2"},
      [
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "radio", name: "radio-colors", className: "radio radio-primary "}),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "radio", name: "radio-colors", className: "radio radio-secondary ", checked: true}),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "radio", name: "radio-colors", className: "radio radio-accent "}),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "radio", name: "radio-colors", className: "radio radio-success "}),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "radio", name: "radio-colors", className: "radio radio-warning "}),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "radio", name: "radio-colors", className: "radio radio-info "}),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "radio", name: "radio-colors", className: "radio radio-error "})
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkRadio)({});
export {$$default as default, mkRadio, pure};
