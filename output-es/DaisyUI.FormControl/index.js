import * as Yoga$dReact$dDOM$dHTML$dDiv from "../Yoga.React.DOM.HTML.Div/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
const labelTextAlt = () => kids => Yoga$dReact$dDOM$dInternal.createElementImpl(
  "label",
  {className: "label"},
  [Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "label-text-alt"}, kids)]
);
const labelText = () => kids => Yoga$dReact$dDOM$dInternal.createElementImpl(
  "label",
  {className: "label"},
  [Yoga$dReact$dDOM$dInternal.createElementImpl("span", {className: "label-text"}, kids)]
);
const formControl = () => Yoga$dReact$dDOM$dHTML$dDiv.div()()({className: "form-control w-full"});
const fieldsetLegend = () => Yoga$dReact$dDOM$dHTML$dDiv.div()()({className: "fieldset-legend"});
const fieldset = () => Yoga$dReact$dDOM$dHTML$dDiv.div()()({className: "fieldset"});
export {fieldset, fieldsetLegend, formControl, labelText, labelTextAlt};
