import * as DaisyUI$dDiff from "../DaisyUI.Diff/index.js";
import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkDiff = /* #__PURE__ */ React$dBasic$dHooks.component("DiffStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex flex-col gap-4"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "diff aspect-[16/9]"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "diff-item-1"},
          [Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("img", {src: "https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp", alt: "Daisy"})]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "diff-item-2"},
          [Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("img", {src: "https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp", alt: "Daisy"})]
        ),
        DaisyUI$dDiff.diffResizer
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkDiff)({});
export {$$default as default, mkDiff, pure};
