import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkStat = /* #__PURE__ */ React$dBasic$dHooks.component("StatStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex flex-col gap-4"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "stats shadow-sm"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "stat"},
          [
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "stat-title"}, "Total Page Views"),
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "stat-value"}, "89,400"),
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "stat-desc"}, "21% more than last month")
          ]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "stat"},
          [
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "stat-title"}, "New Users"),
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "stat-value"}, "4,200"),
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "stat-desc"}, "↗︎ 400 (22%)")
          ]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "stat"},
          [
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "stat-title"}, "New Registers"),
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "stat-value"}, "1,200"),
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "stat-desc"}, "↘︎ 90 (14%)")
          ]
        )
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "stats shadow-sm"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "stat"},
          [
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "stat-title"}, "Account balance"),
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "stat-value"}, "$89,400"),
            Yoga$dReact$dDOM$dInternal.createElementImpl(
              "div",
              {className: "stat-actions"},
              [Yoga$dReact$dDOM$dInternal.createElementImpl("button", {className: "btn btn-primary btn-sm "}, "Add funds")]
            )
          ]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "stat"},
          [
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "stat-title"}, "Current balance"),
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "stat-value"}, "$89,400"),
            Yoga$dReact$dDOM$dInternal.createElementImpl(
              "div",
              {className: "stat-actions"},
              [
                Yoga$dReact$dDOM$dInternal.createElementImpl("button", {className: "btn btn-sm "}, "Withdrawal"),
                Yoga$dReact$dDOM$dInternal.createElementImpl("button", {className: "btn btn-sm "}, "Deposit")
              ]
            )
          ]
        )
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkStat)({});
export {$$default as default, mkStat, pure};
