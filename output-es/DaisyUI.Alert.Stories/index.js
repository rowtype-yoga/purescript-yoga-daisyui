import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkAlert = /* #__PURE__ */ React$dBasic$dHooks.component("AlertStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex flex-col gap-4 w-full max-w-lg"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "alert alert-info alert-soft", role: "alert"},
      [Yoga$dReact$dDOM$dInternal.createElementImpl("span", {}, "12 unread messages. Tap to see.")]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "alert alert-success alert-soft", role: "alert"},
      [Yoga$dReact$dDOM$dInternal.createElementImpl("span", {}, "Your purchase has been confirmed!")]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "alert alert-warning alert-soft", role: "alert"},
      [Yoga$dReact$dDOM$dInternal.createElementImpl("span", {}, "Warning: Invalid email address!")]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "alert alert-error alert-soft", role: "alert"},
      [Yoga$dReact$dDOM$dInternal.createElementImpl("span", {}, "Error! Task failed successfully.")]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkAlert)({});
export {$$default as default, mkAlert, pure};
