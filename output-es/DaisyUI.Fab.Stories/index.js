import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkFab = /* #__PURE__ */ React$dBasic$dHooks.component("FabStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "relative h-64 w-full [&_.fab]:static"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "fab"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {tabIndex: 0, role: "button", className: "btn btn-lg btn-circle btn-primary"}, "F"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("button", {className: "btn btn-lg btn-circle"}, "A"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("button", {className: "btn btn-lg btn-circle"}, "B"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("button", {className: "btn btn-lg btn-circle"}, "C")
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkFab)({});
export {$$default as default, mkFab, pure};
