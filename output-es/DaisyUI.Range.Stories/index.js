import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkRange = /* #__PURE__ */ React$dBasic$dHooks.component("RangeStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex flex-col gap-4 w-64"},
  [
    Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "range", className: "range  "}),
    Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "range", className: "range range-primary "}),
    Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "range", className: "range range-secondary "}),
    Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "range", className: "range range-accent "}),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "flex flex-col gap-2 items-center"},
      [
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "range", className: "range  range-lg"}),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "range", className: "range  "}),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "range", className: "range  range-sm"}),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "range", className: "range  range-xs"})
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkRange)({});
export {$$default as default, mkRange, pure};
