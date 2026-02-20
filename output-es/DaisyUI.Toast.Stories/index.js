import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkToast = /* #__PURE__ */ React$dBasic$dHooks.component("ToastStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "relative h-64 w-full [&_.toast]:static"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "toast toast-end"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "alert alert-info", role: "alert"},
          [Yoga$dReact$dDOM$dInternal.createElementImpl("span", {}, "New mail arrived.")]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "alert alert-success", role: "alert"},
          [Yoga$dReact$dDOM$dInternal.createElementImpl("span", {}, "Message sent successfully.")]
        )
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkToast)({});
export {$$default as default, mkToast, pure};
