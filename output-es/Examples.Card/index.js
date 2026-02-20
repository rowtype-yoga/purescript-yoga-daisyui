import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkCard = /* #__PURE__ */ React$dBasic$dHooks.component("Card")(props => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {
    className: (props.style.rounded ? "rounded-lg " : " ") + (props.style.border.visible ? "border border-[" + props.style.border.color + "]" : "") + " bg-[" + props.style.background + "] p-6"
  },
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl("h3", {className: "text-lg font-semibold text-slate-100 mb-2"}, props.content.title),
    Yoga$dReact$dDOM$dInternal.createElementImpl("p", {className: "text-sm text-slate-400 m-0"}, props.content.body)
  ]
)))();
export {mkCard, pure};
