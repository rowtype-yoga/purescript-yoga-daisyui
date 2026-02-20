import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkRating = /* #__PURE__ */ React$dBasic$dHooks.component("RatingStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex flex-col gap-4"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "rating "},
      [
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "radio", name: "rating-2", className: "mask mask-star-2 bg-orange-400", "aria-label": "1 star"}),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl(
          "input",
          {type: "radio", name: "rating-2", className: "mask mask-star-2 bg-orange-400", "aria-label": "2 stars", checked: true}
        ),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "radio", name: "rating-2", className: "mask mask-star-2 bg-orange-400", "aria-label": "3 stars"}),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "radio", name: "rating-2", className: "mask mask-star-2 bg-orange-400", "aria-label": "4 stars"}),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "radio", name: "rating-2", className: "mask mask-star-2 bg-orange-400", "aria-label": "5 stars"})
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "flex gap-2 items-center"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "rating rating-xs"},
          [
            Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl(
              "input",
              {type: "radio", name: "rating-xs", className: "mask mask-star-2 bg-orange-400", "aria-label": "1 star", checked: true}
            ),
            Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "radio", name: "rating-xs", className: "mask mask-star-2 bg-orange-400", "aria-label": "2 stars"}),
            Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "radio", name: "rating-xs", className: "mask mask-star-2 bg-orange-400", "aria-label": "3 stars"}),
            Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "radio", name: "rating-xs", className: "mask mask-star-2 bg-orange-400", "aria-label": "4 stars"}),
            Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "radio", name: "rating-xs", className: "mask mask-star-2 bg-orange-400", "aria-label": "5 stars"})
          ]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "rating rating-lg"},
          [
            Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "radio", name: "rating-lg", className: "mask mask-star-2 bg-orange-400", "aria-label": "1 star"}),
            Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "radio", name: "rating-lg", className: "mask mask-star-2 bg-orange-400", "aria-label": "2 stars"}),
            Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl(
              "input",
              {type: "radio", name: "rating-lg", className: "mask mask-star-2 bg-orange-400", "aria-label": "3 stars", checked: true}
            ),
            Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "radio", name: "rating-lg", className: "mask mask-star-2 bg-orange-400", "aria-label": "4 stars"}),
            Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "radio", name: "rating-lg", className: "mask mask-star-2 bg-orange-400", "aria-label": "5 stars"})
          ]
        )
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkRating)({});
export {$$default as default, mkRating, pure};
