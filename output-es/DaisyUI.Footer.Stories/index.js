import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkFooter = /* #__PURE__ */ React$dBasic$dHooks.component("FooterStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex flex-col gap-4"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "footer bg-base-200 text-base-content p-10"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "nav",
          {},
          [
            Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "footer-title"}, "Services"),
            Yoga$dReact$dDOM$dInternal.createElementImpl("a", {className: "link link-hover"}, "Branding"),
            Yoga$dReact$dDOM$dInternal.createElementImpl("a", {className: "link link-hover"}, "Design"),
            Yoga$dReact$dDOM$dInternal.createElementImpl("a", {className: "link link-hover"}, "Marketing"),
            Yoga$dReact$dDOM$dInternal.createElementImpl("a", {className: "link link-hover"}, "Advertisement")
          ]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "nav",
          {},
          [
            Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "footer-title"}, "Company"),
            Yoga$dReact$dDOM$dInternal.createElementImpl("a", {className: "link link-hover"}, "About us"),
            Yoga$dReact$dDOM$dInternal.createElementImpl("a", {className: "link link-hover"}, "Contact"),
            Yoga$dReact$dDOM$dInternal.createElementImpl("a", {className: "link link-hover"}, "Jobs"),
            Yoga$dReact$dDOM$dInternal.createElementImpl("a", {className: "link link-hover"}, "Press kit")
          ]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "nav",
          {},
          [
            Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "footer-title"}, "Legal"),
            Yoga$dReact$dDOM$dInternal.createElementImpl("a", {className: "link link-hover"}, "Terms of use"),
            Yoga$dReact$dDOM$dInternal.createElementImpl("a", {className: "link link-hover"}, "Privacy policy"),
            Yoga$dReact$dDOM$dInternal.createElementImpl("a", {className: "link link-hover"}, "Cookie policy")
          ]
        )
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkFooter)({});
export {$$default as default, mkFooter, pure};
