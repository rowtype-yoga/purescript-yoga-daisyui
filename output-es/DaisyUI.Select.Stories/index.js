import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkSelect = /* #__PURE__ */ React$dBasic$dHooks.component("SelectStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex flex-col gap-4 w-full max-w-xs"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "fieldset"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "fieldset-legend"}, "Framework"),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "select",
          {className: "select  "},
          [
            Yoga$dReact$dDOM$dInternal.createElementImpl("option", {}, "Pick a framework"),
            Yoga$dReact$dDOM$dInternal.createElementImpl("option", {}, "Svelte"),
            Yoga$dReact$dDOM$dInternal.createElementImpl("option", {}, "Vue"),
            Yoga$dReact$dDOM$dInternal.createElementImpl("option", {}, "React")
          ]
        )
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "select",
      {className: "select select-bordered "},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl("option", {}, "Who shot first?"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("option", {}, "Han Solo"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("option", {}, "Greedo")
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "flex flex-wrap gap-2"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl("select", {className: "select select-primary "}, [Yoga$dReact$dDOM$dInternal.createElementImpl("option", {}, "Primary")]),
        Yoga$dReact$dDOM$dInternal.createElementImpl("select", {className: "select select-secondary "}, [Yoga$dReact$dDOM$dInternal.createElementImpl("option", {}, "Secondary")]),
        Yoga$dReact$dDOM$dInternal.createElementImpl("select", {className: "select select-accent "}, [Yoga$dReact$dDOM$dInternal.createElementImpl("option", {}, "Accent")])
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "flex flex-wrap gap-2 items-center"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl("select", {className: "select  select-lg"}, [Yoga$dReact$dDOM$dInternal.createElementImpl("option", {}, "Large")]),
        Yoga$dReact$dDOM$dInternal.createElementImpl("select", {className: "select  "}, [Yoga$dReact$dDOM$dInternal.createElementImpl("option", {}, "Normal")]),
        Yoga$dReact$dDOM$dInternal.createElementImpl("select", {className: "select  select-sm"}, [Yoga$dReact$dDOM$dInternal.createElementImpl("option", {}, "Small")]),
        Yoga$dReact$dDOM$dInternal.createElementImpl("select", {className: "select  select-xs"}, [Yoga$dReact$dDOM$dInternal.createElementImpl("option", {}, "Tiny")])
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkSelect)({});
export {$$default as default, mkSelect, pure};
