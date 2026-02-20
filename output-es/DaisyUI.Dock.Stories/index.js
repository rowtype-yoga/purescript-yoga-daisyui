import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkDock = /* #__PURE__ */ React$dBasic$dHooks.component("DockStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "relative h-48 w-full [&_.dock]:static [&_.dock]:w-full"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "dock "},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "button",
          {},
          [Yoga$dReact$dDOM$dInternal.createElementImpl("span", {}, "🏠"), Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "dock-label"}, "Home")]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "button",
          {className: "dock-active"},
          [Yoga$dReact$dDOM$dInternal.createElementImpl("span", {}, "📥"), Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "dock-label"}, "Inbox")]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "button",
          {},
          [Yoga$dReact$dDOM$dInternal.createElementImpl("span", {}, "⚙️"), Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "dock-label"}, "Settings")]
        )
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkDock)({});
export {$$default as default, mkDock, pure};
