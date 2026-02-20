import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkHero = /* #__PURE__ */ React$dBasic$dHooks.component("HeroStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "[&_.hero]:min-h-[24rem]"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "hero min-h-screen"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "hero-content text-center"},
          [
            Yoga$dReact$dDOM$dInternal.createElementImpl(
              "div",
              {className: "max-w-md"},
              [
                Yoga$dReact$dDOM$dInternal.createElementImpl("h1", {className: "text-5xl font-bold"}, "Hello there"),
                Yoga$dReact$dDOM$dInternal.createElementImpl(
                  "p",
                  {className: "py-6"},
                  "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."
                ),
                Yoga$dReact$dDOM$dInternal.createElementImpl("button", {className: "btn btn-primary "}, "Get Started")
              ]
            )
          ]
        )
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkHero)({});
export {$$default as default, mkHero, pure};
