import * as Yoga$dReact$dDOM$dHTML$dDiv from "../Yoga.React.DOM.HTML.Div/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
const mockupCode = () => Yoga$dReact$dDOM$dHTML$dDiv.div()()({className: "mockup-code"});
const codeLine = prefix => () => kids => Yoga$dReact$dDOM$dInternal.createElementImpl(
  "pre",
  {"data-prefix": prefix},
  [Yoga$dReact$dDOM$dInternal.createElementImpl("code", {}, kids)]
);
export {codeLine, mockupCode};
