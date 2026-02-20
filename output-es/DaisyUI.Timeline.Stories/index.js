import * as DaisyUI$dTimeline from "../DaisyUI.Timeline/index.js";
import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkTimeline = /* #__PURE__ */ React$dBasic$dHooks.component("TimelineStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex flex-col gap-4"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "ul",
      {className: "timeline"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "li",
          {},
          [
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "timeline-start"}, "1984"),
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "timeline-middle"}, []),
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "timeline-end"}, "First Macintosh computer"),
            DaisyUI$dTimeline.timelineLine
          ]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "li",
          {},
          [
            DaisyUI$dTimeline.timelineLine,
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "timeline-start"}, "1998"),
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "timeline-middle"}, []),
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "timeline-end"}, "iMac"),
            DaisyUI$dTimeline.timelineLine
          ]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "li",
          {},
          [
            DaisyUI$dTimeline.timelineLine,
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "timeline-start"}, "2001"),
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "timeline-middle"}, []),
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "timeline-end"}, "iPod"),
            DaisyUI$dTimeline.timelineLine
          ]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "li",
          {},
          [
            DaisyUI$dTimeline.timelineLine,
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "timeline-start"}, "2007"),
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "timeline-middle"}, []),
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "timeline-end"}, "iPhone"),
            DaisyUI$dTimeline.timelineLine
          ]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "li",
          {},
          [
            DaisyUI$dTimeline.timelineLine,
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "timeline-start"}, "2015"),
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "timeline-middle"}, []),
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "timeline-end"}, "Apple Watch")
          ]
        )
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkTimeline)({});
export {$$default as default, mkTimeline, pure};
