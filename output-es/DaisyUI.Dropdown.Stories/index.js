import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkDropdown = /* #__PURE__ */ React$dBasic$dHooks.component("DropdownStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex items-center justify-center p-32"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "dropdown "},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl("button", {className: "btn  "}, "Click"),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "ul",
          {className: "dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm", tabIndex: 0},
          [
            Yoga$dReact$dDOM$dInternal.createElementImpl("li", {}, [Yoga$dReact$dDOM$dInternal.createElementImpl("a", {}, "Item 1")]),
            Yoga$dReact$dDOM$dInternal.createElementImpl("li", {}, [Yoga$dReact$dDOM$dInternal.createElementImpl("a", {}, "Item 2")])
          ]
        )
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkDropdown)({});
export {$$default as default, mkDropdown, pure};
