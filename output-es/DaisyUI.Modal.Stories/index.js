import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkModal = /* #__PURE__ */ React$dBasic$dHooks.component("ModalStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex flex-col gap-4"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "modal-box"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl("h3", {className: "text-lg font-bold"}, "Hello!"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("p", {className: "py-4"}, "Press ESC key or click the button below to close"),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "modal-action"},
          [Yoga$dReact$dDOM$dInternal.createElementImpl("form", {method: "dialog"}, [Yoga$dReact$dDOM$dInternal.createElementImpl("button", {className: "btn  "}, "Close")])]
        )
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkModal)({});
export {$$default as default, mkModal, pure};
