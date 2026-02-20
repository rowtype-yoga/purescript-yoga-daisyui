import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkLink = /* #__PURE__ */ React$dBasic$dHooks.component("LinkStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex flex-col gap-2"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl("a", {className: "link "}, "I'm a simple link"),
    Yoga$dReact$dDOM$dInternal.createElementImpl("a", {className: "link link-primary"}, "I'm a simple link"),
    Yoga$dReact$dDOM$dInternal.createElementImpl("a", {className: "link link-secondary"}, "I'm a simple link"),
    Yoga$dReact$dDOM$dInternal.createElementImpl("a", {className: "link link-accent"}, "I'm a simple link"),
    Yoga$dReact$dDOM$dInternal.createElementImpl("a", {className: "link link-neutral"}, "I'm a simple link"),
    Yoga$dReact$dDOM$dInternal.createElementImpl("a", {className: "link link-success"}, "I'm a simple link"),
    Yoga$dReact$dDOM$dInternal.createElementImpl("a", {className: "link link-info"}, "I'm a simple link"),
    Yoga$dReact$dDOM$dInternal.createElementImpl("a", {className: "link link-warning"}, "I'm a simple link"),
    Yoga$dReact$dDOM$dInternal.createElementImpl("a", {className: "link link-error"}, "I'm a simple link"),
    Yoga$dReact$dDOM$dInternal.createElementImpl("a", {className: "link link-hover"}, "I'm a simple link")
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkLink)({});
export {$$default as default, mkLink, pure};
