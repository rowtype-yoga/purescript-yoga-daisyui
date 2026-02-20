import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkAvatar = /* #__PURE__ */ React$dBasic$dHooks.component("AvatarStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex flex-col gap-8"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "flex gap-4 items-end"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "avatar"},
          [
            Yoga$dReact$dDOM$dInternal.createElementImpl(
              "div",
              {className: "w-24 rounded"},
              [Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("img", {src: "https://img.daisyui.com/images/profile/demo/2@94.webp", alt: "Avatar"})]
            )
          ]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "avatar"},
          [
            Yoga$dReact$dDOM$dInternal.createElementImpl(
              "div",
              {className: "w-16 rounded"},
              [Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("img", {src: "https://img.daisyui.com/images/profile/demo/2@94.webp", alt: "Avatar"})]
            )
          ]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "avatar"},
          [
            Yoga$dReact$dDOM$dInternal.createElementImpl(
              "div",
              {className: "w-12 rounded"},
              [Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("img", {src: "https://img.daisyui.com/images/profile/demo/2@94.webp", alt: "Avatar"})]
            )
          ]
        )
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "flex gap-4 items-end"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "avatar"},
          [
            Yoga$dReact$dDOM$dInternal.createElementImpl(
              "div",
              {className: "w-24 rounded-full"},
              [Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("img", {src: "https://img.daisyui.com/images/profile/demo/2@94.webp", alt: "Avatar"})]
            )
          ]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "avatar"},
          [
            Yoga$dReact$dDOM$dInternal.createElementImpl(
              "div",
              {className: "ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2"},
              [Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("img", {src: "https://img.daisyui.com/images/profile/demo/2@94.webp", alt: "Avatar"})]
            )
          ]
        )
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "flex gap-4 items-center"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "avatar online"},
          [
            Yoga$dReact$dDOM$dInternal.createElementImpl(
              "div",
              {className: "w-12 rounded-full"},
              [Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("img", {src: "https://img.daisyui.com/images/profile/demo/2@94.webp", alt: "Avatar"})]
            )
          ]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "avatar offline"},
          [
            Yoga$dReact$dDOM$dInternal.createElementImpl(
              "div",
              {className: "w-12 rounded-full"},
              [Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("img", {src: "https://img.daisyui.com/images/profile/demo/2@94.webp", alt: "Avatar"})]
            )
          ]
        )
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "flex gap-4 items-center"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "avatar placeholder"},
          [
            Yoga$dReact$dDOM$dInternal.createElementImpl(
              "div",
              {className: "bg-neutral text-neutral-content w-24 rounded-full"},
              [Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "text-3xl"}, "D")]
            )
          ]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "avatar placeholder"},
          [
            Yoga$dReact$dDOM$dInternal.createElementImpl(
              "div",
              {className: "bg-neutral text-neutral-content w-12 rounded-full"},
              [Yoga$dReact$dDOM$dInternal.createElementImpl("span", {}, "D")]
            )
          ]
        )
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkAvatar)({});
export {$$default as default, mkAvatar, pure};
