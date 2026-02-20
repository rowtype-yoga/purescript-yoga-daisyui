import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkStatus = /* #__PURE__ */ React$dBasic$dHooks.component("StatusStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex flex-col gap-6"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "flex gap-6"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "status status-primary "}, []),
        Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "status status-secondary "}, []),
        Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "status status-accent "}, []),
        Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "status status-neutral "}, []),
        Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "status status-info "}, []),
        Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "status status-success "}, []),
        Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "status status-warning "}, []),
        Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "status status-error "}, [])
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "flex gap-6 items-center"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "flex items-center gap-2"},
          [Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "status status-success "}, []), Yoga$dReact$dDOM$dInternal.createElementImpl("span", {}, "Online")]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "flex items-center gap-2"},
          [Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "status status-warning "}, []), Yoga$dReact$dDOM$dInternal.createElementImpl("span", {}, "Away")]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "flex items-center gap-2"},
          [Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "status status-error "}, []), Yoga$dReact$dDOM$dInternal.createElementImpl("span", {}, "Offline")]
        )
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "flex gap-4 items-center"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "status  status-xs"}, []),
        Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "status  status-sm"}, []),
        Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "status  status-md"}, []),
        Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "status  status-lg"}, []),
        Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "status  status-xl"}, [])
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkStatus)({});
export {$$default as default, mkStatus, pure};
