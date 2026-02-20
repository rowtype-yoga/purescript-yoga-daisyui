import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkCarousel = /* #__PURE__ */ React$dBasic$dHooks.component("CarouselStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex flex-col gap-4"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "carousel carousel-center"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "carousel-item"},
          [Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("img", {src: "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp", alt: "Burger"})]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "carousel-item"},
          [Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("img", {src: "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp", alt: "Burger"})]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "carousel-item"},
          [Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("img", {src: "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp", alt: "Burger"})]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "carousel-item"},
          [Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("img", {src: "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp", alt: "Burger"})]
        )
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkCarousel)({});
export {$$default as default, mkCarousel, pure};
