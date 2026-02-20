import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkPagination = /* #__PURE__ */ React$dBasic$dHooks.component("PaginationStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex flex-col gap-4"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "join"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl("button", {className: "btn join-item"}, "1"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("button", {className: "btn btn-active join-item"}, "2"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("button", {className: "btn join-item"}, "3"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("button", {className: "btn join-item"}, "4")
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "join"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl("button", {className: "btn join-item"}, "«"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("button", {className: "btn join-item"}, "Page 22"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("button", {className: "btn join-item"}, "»")
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkPagination)({});
export {$$default as default, mkPagination, pure};
