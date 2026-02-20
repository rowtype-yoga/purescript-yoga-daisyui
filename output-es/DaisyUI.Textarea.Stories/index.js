import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkTextarea = /* #__PURE__ */ React$dBasic$dHooks.component("TextareaStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex flex-col gap-4 w-full max-w-xs"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "fieldset"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "fieldset-legend"}, "Your bio"),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("textarea", {className: "textarea  ", placeholder: "Bio"}),
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "label"}, "Optional")
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("textarea", {className: "textarea textarea-bordered ", placeholder: "Bordered textarea"}),
    Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("textarea", {className: "textarea textarea-ghost ", placeholder: "Ghost textarea"}),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "flex flex-wrap gap-2"},
      [
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("textarea", {className: "textarea textarea-primary ", placeholder: "Primary"}),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("textarea", {className: "textarea textarea-secondary ", placeholder: "Secondary"}),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("textarea", {className: "textarea textarea-accent ", placeholder: "Accent"})
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkTextarea)({});
export {$$default as default, mkTextarea, pure};
