import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkDrawer = /* #__PURE__ */ React$dBasic$dHooks.component("DrawerStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "relative h-64 overflow-hidden [&_.drawer-side]:absolute [&_.drawer-side]:h-full"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "drawer"},
      [
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "checkbox", id: "my-drawer", className: "drawer-toggle"}),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "drawer-content"},
          [Yoga$dReact$dDOM$dInternal.createElementImpl("label", {htmlFor: "my-drawer", className: "btn btn-primary drawer-button"}, "Open drawer")]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "drawer-side"},
          [
            Yoga$dReact$dDOM$dInternal.createElementImpl("label", {htmlFor: "my-drawer", "aria-label": "close sidebar", className: "drawer-overlay"}, []),
            Yoga$dReact$dDOM$dInternal.createElementImpl(
              "ul",
              {className: "menu bg-base-200 text-base-content min-h-full w-80 p-4"},
              [
                Yoga$dReact$dDOM$dInternal.createElementImpl("li", {}, [Yoga$dReact$dDOM$dInternal.createElementImpl("a", {}, "Sidebar Item 1")]),
                Yoga$dReact$dDOM$dInternal.createElementImpl("li", {}, [Yoga$dReact$dDOM$dInternal.createElementImpl("a", {}, "Sidebar Item 2")])
              ]
            )
          ]
        )
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkDrawer)({});
export {$$default as default, mkDrawer, pure};
