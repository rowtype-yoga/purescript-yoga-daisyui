import * as DaisyUI$dMockupPhone from "../DaisyUI.MockupPhone/index.js";
import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkMockupPhone = /* #__PURE__ */ React$dBasic$dHooks.component("MockupPhoneStory")(v => pure(DaisyUI$dMockupPhone.mockupPhone()([
  Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "grid place-content-center bg-neutral-900 text-white h-80"}, "Hi.")
])))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkMockupPhone)({});
export {$$default as default, mkMockupPhone, pure};
