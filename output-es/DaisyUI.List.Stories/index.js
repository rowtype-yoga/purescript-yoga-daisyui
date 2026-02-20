import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkList = /* #__PURE__ */ React$dBasic$dHooks.component("ListStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "w-full max-w-md"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "ul",
      {className: "list bg-base-100 rounded-box shadow-md"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "li",
          {className: "list-row"},
          [
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "text-4xl font-thin opacity-30 tabular-nums"}, "01"),
            Yoga$dReact$dDOM$dInternal.createElementImpl(
              "div",
              {},
              [
                Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl(
                  "img",
                  {className: "size-10 rounded-box", src: "https://img.daisyui.com/images/profile/demo/1@94.webp", alt: "Song"}
                )
              ]
            ),
            Yoga$dReact$dDOM$dInternal.createElementImpl(
              "div",
              {className: "list-col-grow"},
              [
                Yoga$dReact$dDOM$dInternal.createElementImpl("div", {}, "Dio"),
                Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "text-xs uppercase font-semibold opacity-60"}, "Ronnie James Dio")
              ]
            ),
            Yoga$dReact$dDOM$dInternal.createElementImpl("p", {className: "font-mono opacity-60"}, "3:46")
          ]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "li",
          {className: "list-row"},
          [
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "text-4xl font-thin opacity-30 tabular-nums"}, "02"),
            Yoga$dReact$dDOM$dInternal.createElementImpl(
              "div",
              {},
              [
                Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl(
                  "img",
                  {className: "size-10 rounded-box", src: "https://img.daisyui.com/images/profile/demo/2@94.webp", alt: "Song"}
                )
              ]
            ),
            Yoga$dReact$dDOM$dInternal.createElementImpl(
              "div",
              {className: "list-col-grow"},
              [
                Yoga$dReact$dDOM$dInternal.createElementImpl("div", {}, "Move to the city"),
                Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "text-xs uppercase font-semibold opacity-60"}, "Slightly Stoopid")
              ]
            ),
            Yoga$dReact$dDOM$dInternal.createElementImpl("p", {className: "font-mono opacity-60"}, "4:02")
          ]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "li",
          {className: "list-row"},
          [
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "text-4xl font-thin opacity-30 tabular-nums"}, "03"),
            Yoga$dReact$dDOM$dInternal.createElementImpl(
              "div",
              {},
              [
                Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl(
                  "img",
                  {className: "size-10 rounded-box", src: "https://img.daisyui.com/images/profile/demo/3@94.webp", alt: "Song"}
                )
              ]
            ),
            Yoga$dReact$dDOM$dInternal.createElementImpl(
              "div",
              {className: "list-col-grow"},
              [
                Yoga$dReact$dDOM$dInternal.createElementImpl("div", {}, "Galvanize"),
                Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "text-xs uppercase font-semibold opacity-60"}, "Chemical Brothers")
              ]
            ),
            Yoga$dReact$dDOM$dInternal.createElementImpl("p", {className: "font-mono opacity-60"}, "4:38")
          ]
        )
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkList)({});
export {$$default as default, mkList, pure};
