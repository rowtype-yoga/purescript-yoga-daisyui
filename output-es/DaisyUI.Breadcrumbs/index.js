import * as Yoga$dReact$dDOM$dHTML$dLi from "../Yoga.React.DOM.HTML.Li/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
const breadcrumbs = () => kids => Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "breadcrumbs text-sm"},
  [Yoga$dReact$dDOM$dInternal.createElementImpl("ul", {}, kids)]
);
const breadcrumbItem = () => Yoga$dReact$dDOM$dHTML$dLi.li()()({});
export {breadcrumbItem, breadcrumbs};
