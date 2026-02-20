import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkAccordion = /* #__PURE__ */ React$dBasic$dHooks.component("AccordionStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex flex-col gap-0 w-full max-w-lg"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "collapse collapse-arrow bg-base-100 border border-base-300", tabIndex: 0},
      [
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "radio", name: "my-accordion-1", checked: true}),
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "collapse-title font-semibold"}, "How do I create an account?"),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "collapse-content"},
          "Click the Sign Up button in the top right corner and follow the registration process."
        )
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "collapse collapse-arrow bg-base-100 border border-base-300", tabIndex: 0},
      [
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "radio", name: "my-accordion-1"}),
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "collapse-title font-semibold"}, "I forgot my password. What should I do?"),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "collapse-content"},
          "Click on Forgot Password on the login page and follow the instructions sent to your email."
        )
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "collapse collapse-arrow bg-base-100 border border-base-300", tabIndex: 0},
      [
        Yoga$dReact$dDOM$dInternal.createElementNoKidsImpl("input", {type: "radio", name: "my-accordion-1"}),
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "collapse-title font-semibold"}, "How can I contact support?"),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "collapse-content"},
          "You can reach our support team through the Contact Us page or by emailing support@example.com."
        )
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkAccordion)({});
export {$$default as default, mkAccordion, pure};
