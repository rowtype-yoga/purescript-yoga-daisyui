import * as $runtime from "../runtime.js";
import * as Data$dGeneric$dRep from "../Data.Generic.Rep/index.js";
import * as React$dBasic from "../React.Basic/index.js";
import * as React$dBasic$dDOM$dGenerated from "../React.Basic.DOM.Generated/index.js";
import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
const $Variant = tag => tag;
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const div = /* #__PURE__ */ React$dBasic.element(React$dBasic$dDOM$dGenerated._div$p);
const Primary = /* #__PURE__ */ $Variant("Primary");
const Secondary = /* #__PURE__ */ $Variant("Secondary");
const Danger = /* #__PURE__ */ $Variant("Danger");
const genericVariant_ = {
  to: x => {
    if (x.tag === "Inl") { return Primary; }
    if (x.tag === "Inr") {
      if (x._1.tag === "Inl") { return Secondary; }
      if (x._1.tag === "Inr") { return Danger; }
    }
    $runtime.fail();
  },
  from: x => {
    if (x === "Primary") { return Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments); }
    if (x === "Secondary") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments)); }
    if (x === "Danger") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.NoArguments)); }
    $runtime.fail();
  }
};
const eqVariant = {
  eq: x => y => {
    if (x === "Primary") { return y === "Primary"; }
    if (x === "Secondary") { return y === "Secondary"; }
    return x === "Danger" && y === "Danger";
  }
};
const mkButton = /* #__PURE__ */ React$dBasic$dHooks.component("Button")(props => pure(React$dBasic$dDOM$dGenerated.div1({
  children: [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "button",
      {
        className: (() => {
          if (props.variant === "Primary") { return "px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-500"; }
          if (props.variant === "Danger") { return "px-4 py-2 bg-red-600 text-white rounded-md font-medium hover:bg-red-500"; }
          if (props.variant === "Secondary") { return "px-4 py-2 bg-slate-700 text-slate-200 rounded-md font-medium hover:bg-slate-600"; }
          $runtime.fail();
        })()
      },
      props.label
    ),
    (() => {
      if (props.subtitle.tag === "Nothing") { return ""; }
      if (props.subtitle.tag === "Just") { return div({className: "text-sm text-slate-500 mt-1", children: [props.subtitle._1]}); }
      $runtime.fail();
    })()
  ]
})))();
export {$Variant, Danger, Primary, Secondary, div, eqVariant, genericVariant_, mkButton, pure};
