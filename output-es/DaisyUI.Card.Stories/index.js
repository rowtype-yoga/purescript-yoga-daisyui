import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkCard = /* #__PURE__ */ React$dBasic$dHooks.component("CardStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex flex-col gap-4"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "w-96"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "card bg-base-100 shadow-sm"},
          [
            Yoga$dReact$dDOM$dInternal.createElementImpl(
              "figure",
              {},
              [Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("img", {src: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp", alt: "Shoes"})]
            ),
            Yoga$dReact$dDOM$dInternal.createElementImpl(
              "div",
              {className: "card-body"},
              [
                Yoga$dReact$dDOM$dInternal.createElementImpl("h2", {className: "card-title"}, "Shoes!"),
                Yoga$dReact$dDOM$dInternal.createElementImpl("p", {}, "If a dog chews shoes whose shoes does he choose?"),
                Yoga$dReact$dDOM$dInternal.createElementImpl(
                  "div",
                  {className: "card-actions justify-end"},
                  [Yoga$dReact$dDOM$dInternal.createElementImpl("button", {className: "btn btn-primary "}, "Buy Now")]
                )
              ]
            )
          ]
        )
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkCard)({});
export {$$default as default, mkCard, pure};
