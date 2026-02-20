import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkChat = /* #__PURE__ */ React$dBasic$dHooks.component("ChatStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex flex-col gap-0 w-full max-w-lg"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "chat chat-start"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "chat-image avatar"},
          [
            Yoga$dReact$dDOM$dInternal.createElementImpl(
              "div",
              {className: "w-10 rounded-full"},
              [Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("img", {src: "https://img.daisyui.com/images/profile/demo/2@94.webp", alt: "Avatar"})]
            )
          ]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "chat-header"},
          [
            Yoga$dReact$dDOM$dInternal.createElementImpl("span", {}, "Obi-Wan Kenobi "),
            Yoga$dReact$dDOM$dInternal.createElementImpl("time", {className: "text-xs opacity-50"}, "12:45")
          ]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "chat-bubble "}, "You were the Chosen One!"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "chat-footer opacity-50"}, "Delivered")
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "chat chat-start"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "chat-image avatar"},
          [
            Yoga$dReact$dDOM$dInternal.createElementImpl(
              "div",
              {className: "w-10 rounded-full"},
              [Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("img", {src: "https://img.daisyui.com/images/profile/demo/2@94.webp", alt: "Avatar"})]
            )
          ]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "chat-header"}, "Obi-Wan Kenobi"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "chat-bubble "}, "I loved you."),
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "chat-footer opacity-50"}, "Seen at 12:46")
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "chat chat-end"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "chat-image avatar"},
          [
            Yoga$dReact$dDOM$dInternal.createElementImpl(
              "div",
              {className: "w-10 rounded-full"},
              [Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("img", {src: "https://img.daisyui.com/images/profile/demo/2@94.webp", alt: "Avatar"})]
            )
          ]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "chat-header"}, "Anakin"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "chat-bubble "}, "I HATE YOU!"),
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "chat-footer opacity-50"}, "Seen at 12:46")
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkChat)({});
export {$$default as default, mkChat, pure};
