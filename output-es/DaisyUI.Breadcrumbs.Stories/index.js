import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkBreadcrumbs = /* #__PURE__ */ React$dBasic$dHooks.component("BreadcrumbsStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex flex-col gap-4"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "breadcrumbs text-sm"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "ul",
          {},
          [
            Yoga$dReact$dDOM$dInternal.createElementImpl("li", {}, [Yoga$dReact$dDOM$dInternal.createElementImpl("a", {}, "Home")]),
            Yoga$dReact$dDOM$dInternal.createElementImpl("li", {}, [Yoga$dReact$dDOM$dInternal.createElementImpl("a", {}, "Documents")]),
            Yoga$dReact$dDOM$dInternal.createElementImpl("li", {}, "Add Document")
          ]
        )
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkBreadcrumbs)({});
export {$$default as default, mkBreadcrumbs, pure};
