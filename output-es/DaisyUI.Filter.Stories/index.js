import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkFilter = /* #__PURE__ */ React$dBasic$dHooks.component("FilterStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex flex-col gap-4"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "filter"},
      [
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "radio", name: "metaframeworks", className: "btn filter-reset", "aria-label": "All"}),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "radio", name: "metaframeworks", className: "btn", "aria-label": "Sveltekit"}),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "radio", name: "metaframeworks", className: "btn", "aria-label": "Nuxt"}),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "radio", name: "metaframeworks", className: "btn", "aria-label": "Next.js"}),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "radio", name: "metaframeworks", className: "btn", "aria-label": "Remix"})
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkFilter)({});
export {$$default as default, mkFilter, pure};
