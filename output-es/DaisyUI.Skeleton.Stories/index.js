import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkSkeleton = /* #__PURE__ */ React$dBasic$dHooks.component("SkeletonStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex flex-col gap-4 w-64"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "flex gap-4 items-center"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "skeleton h-16 w-16 shrink-0 rounded-full"}, []),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "flex flex-col gap-2 w-full"},
          [
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "skeleton h-4 w-28"}, []),
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "skeleton h-4 w-full"}, [])
          ]
        )
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "skeleton h-32 w-full"}, [])
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkSkeleton)({});
export {$$default as default, mkSkeleton, pure};
