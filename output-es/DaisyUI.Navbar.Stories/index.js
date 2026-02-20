import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkNavbar = /* #__PURE__ */ React$dBasic$dHooks.component("NavbarStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex flex-col gap-4"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "navbar bg-base-100"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "navbar-start"},
          [Yoga$dReact$dDOM$dInternal.createElementImpl("a", {className: "btn btn-ghost text-xl"}, "daisyUI")]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "navbar-center"}, []),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "navbar-end"},
          [Yoga$dReact$dDOM$dInternal.createElementImpl("button", {className: "btn btn-ghost "}, "Button")]
        )
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "navbar bg-base-100"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "navbar-start"},
          [Yoga$dReact$dDOM$dInternal.createElementImpl("a", {className: "btn btn-ghost text-xl"}, "daisyUI")]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "navbar-center"},
          [
            Yoga$dReact$dDOM$dInternal.createElementImpl("a", {className: "btn btn-ghost"}, "Home"),
            Yoga$dReact$dDOM$dInternal.createElementImpl("a", {className: "btn btn-ghost"}, "About"),
            Yoga$dReact$dDOM$dInternal.createElementImpl("a", {className: "btn btn-ghost"}, "Contact")
          ]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "navbar-end"},
          [Yoga$dReact$dDOM$dInternal.createElementImpl("button", {className: "btn btn-primary "}, "Get Started")]
        )
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkNavbar)({});
export {$$default as default, mkNavbar, pure};
