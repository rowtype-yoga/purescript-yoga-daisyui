import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
const mockupPhone = () => kids => Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "mockup-phone"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "mockup-phone-camera"}, []),
    Yoga$dReact$dDOM$dInternal.createElementImpl("div", {className: "mockup-phone-display"}, kids)
  ]
);
export {mockupPhone};
