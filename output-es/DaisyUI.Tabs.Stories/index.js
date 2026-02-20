import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkTabs = /* #__PURE__ */ React$dBasic$dHooks.component("TabsStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex flex-col gap-6"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "tabs tabs-border", role: "tablist"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "tab", role: "tab"}, "Tab 1"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "tab tab-active", role: "tab"}, "Tab 2"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "tab", role: "tab"}, "Tab 3")
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "tabs tabs-lift", role: "tablist"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "tab", role: "tab"}, "Tab 1"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "tab tab-active", role: "tab"}, "Tab 2"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "tab", role: "tab"}, "Tab 3")
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "tabs tabs-box", role: "tablist"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "tab", role: "tab"}, "Tab 1"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "tab tab-active", role: "tab"}, "Tab 2"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "tab", role: "tab"}, "Tab 3")
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "flex gap-2 items-center"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "tabs tabs-border tabs-xs", role: "tablist"},
          [
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "tab", role: "tab"}, "Tiny"),
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "tab tab-active", role: "tab"}, "Tiny"),
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "tab", role: "tab"}, "Tiny")
          ]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "tabs tabs-border tabs-lg", role: "tablist"},
          [
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "tab", role: "tab"}, "Large"),
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "tab tab-active", role: "tab"}, "Large"),
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "tab", role: "tab"}, "Large")
          ]
        )
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkTabs)({});
export {$$default as default, mkTabs, pure};
