import * as DaisyUI$dMenu from "../DaisyUI.Menu/index.js";
import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkMenu = /* #__PURE__ */ React$dBasic$dHooks.component("MenuStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex flex-wrap gap-4"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "w-56"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "ul",
          {className: "menu bg-base-200 rounded-box"},
          [
            Yoga$dReact$dDOM$dInternal.createElementImpl("li", {}, [Yoga$dReact$dDOM$dInternal.createElementImpl("a", {}, "Item 1")]),
            Yoga$dReact$dDOM$dInternal.createElementImpl("li", {}, [Yoga$dReact$dDOM$dInternal.createElementImpl("a", {}, "Item 2")]),
            DaisyUI$dMenu.menuSub()("Parent")([
              Yoga$dReact$dDOM$dInternal.createElementImpl("li", {}, [Yoga$dReact$dDOM$dInternal.createElementImpl("a", {}, "Submenu 1")]),
              Yoga$dReact$dDOM$dInternal.createElementImpl("li", {}, [Yoga$dReact$dDOM$dInternal.createElementImpl("a", {}, "Submenu 2")])
            ]),
            Yoga$dReact$dDOM$dInternal.createElementImpl("li", {}, [Yoga$dReact$dDOM$dInternal.createElementImpl("a", {}, "Item 3")])
          ]
        )
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "w-56"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "ul",
          {className: "menu bg-base-200 rounded-box"},
          [
            Yoga$dReact$dDOM$dInternal.createElementImpl("li", {className: "menu-title"}, "Title"),
            Yoga$dReact$dDOM$dInternal.createElementImpl("li", {}, [Yoga$dReact$dDOM$dInternal.createElementImpl("a", {}, "Item 1")]),
            Yoga$dReact$dDOM$dInternal.createElementImpl("li", {}, [Yoga$dReact$dDOM$dInternal.createElementImpl("a", {className: "active"}, "Item 2")]),
            Yoga$dReact$dDOM$dInternal.createElementImpl("li", {}, [Yoga$dReact$dDOM$dInternal.createElementImpl("a", {}, "Item 3")])
          ]
        )
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "ul",
      {className: "menu menu-horizontal bg-base-200 rounded-box"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl("li", {}, [Yoga$dReact$dDOM$dInternal.createElementImpl("a", {}, "Item 1")]),
        Yoga$dReact$dDOM$dInternal.createElementImpl("li", {}, [Yoga$dReact$dDOM$dInternal.createElementImpl("a", {}, "Item 2")]),
        Yoga$dReact$dDOM$dInternal.createElementImpl("li", {}, [Yoga$dReact$dDOM$dInternal.createElementImpl("a", {}, "Item 3")])
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkMenu)({});
export {$$default as default, mkMenu, pure};
