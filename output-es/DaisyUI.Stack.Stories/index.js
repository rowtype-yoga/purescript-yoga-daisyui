import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkStack = /* #__PURE__ */ React$dBasic$dHooks.component("StackStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex flex-col gap-8 items-center"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "stack"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "bg-primary text-primary-content grid w-32 h-20 rounded-box place-items-center"}, "1"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "bg-accent text-accent-content grid w-32 h-20 rounded-box place-items-center"}, "2"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "bg-secondary text-secondary-content grid w-32 h-20 rounded-box place-items-center"}, "3")
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "stack"},
      [
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl(
          "img",
          {src: "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp", alt: "Photo 1", className: "rounded-box"}
        ),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl(
          "img",
          {src: "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp", alt: "Photo 2", className: "rounded-box"}
        ),
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl(
          "img",
          {src: "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp", alt: "Photo 3", className: "rounded-box"}
        )
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkStack)({});
export {$$default as default, mkStack, pure};
