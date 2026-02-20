import * as Data$dShow from "../Data.Show/index.js";
import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkProgress = /* #__PURE__ */ React$dBasic$dHooks.component("Progress")(props => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "w-full"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "flex justify-between mb-1"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "text-sm text-slate-300"}, props.label),
        Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "text-sm text-slate-400"}, Data$dShow.showNumberImpl(props.value * 100.0) + "%")
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "w-full bg-slate-700 rounded-full h-3"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {className: "h-3 rounded-full transition-all", style: {width: Data$dShow.showNumberImpl(props.value * 100.0) + "%", backgroundColor: props.color}},
          ""
        )
      ]
    )
  ]
)))();
export {mkProgress, pure};
