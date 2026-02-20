import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkLoading = /* #__PURE__ */ React$dBasic$dHooks.component("LoadingStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex flex-col gap-6 items-center"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "flex gap-4"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "loading loading-spinner loading-lg"}, []),
        Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "loading loading-dots loading-lg"}, []),
        Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "loading loading-ring loading-lg"}, []),
        Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "loading loading-ball loading-lg"}, []),
        Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "loading loading-bars loading-lg"}, []),
        Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "loading loading-infinity loading-lg"}, [])
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "flex gap-4 items-center"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "loading loading-spinner loading-xs"}, []),
        Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "loading loading-spinner loading-sm"}, []),
        Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "loading loading-spinner loading-md"}, []),
        Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "loading loading-spinner loading-lg"}, [])
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkLoading)({});
export {$$default as default, mkLoading, pure};
