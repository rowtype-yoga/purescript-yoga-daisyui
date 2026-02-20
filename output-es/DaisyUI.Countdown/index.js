import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
const countdown = value => Yoga$dReact$dDOM$dInternal.createElementImpl(
  "span",
  {className: "countdown"},
  [Yoga$dReact$dDOM$dInternal.createElementImpl("span", {style: {"--value": value}}, [])]
);
export {countdown};
