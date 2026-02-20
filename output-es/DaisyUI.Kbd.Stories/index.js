import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkKbd = /* #__PURE__ */ React$dBasic$dHooks.component("KbdStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex flex-col gap-6 items-center"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "flex gap-1"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl("kbd", {className: "kbd kbd-lg"}, "Ctrl"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("span", {}, "+"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("kbd", {className: "kbd kbd-lg"}, "Shift"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("span", {}, "+"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("kbd", {className: "kbd kbd-lg"}, "Del")
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "flex gap-1"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl("kbd", {className: "kbd "}, "⌘"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("kbd", {className: "kbd "}, "⌥"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("kbd", {className: "kbd "}, "⇧"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("kbd", {className: "kbd "}, "⌃")
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "flex gap-1 items-center"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl("kbd", {className: "kbd kbd-lg"}, "large"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("kbd", {className: "kbd "}, "normal"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("kbd", {className: "kbd kbd-sm"}, "small"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("kbd", {className: "kbd kbd-xs"}, "tiny")
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkKbd)({});
export {$$default as default, mkKbd, pure};
