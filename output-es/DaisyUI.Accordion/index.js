import * as Yoga$dReact$dDOM$dHTML$dDiv from "../Yoga.React.DOM.HTML.Div/index.js";
const plus = "collapse-plus";
const open = "collapse-open";
const collapseTitle = () => Yoga$dReact$dDOM$dHTML$dDiv.div()()({className: "collapse-title font-semibold"});
const collapseContent = () => Yoga$dReact$dDOM$dHTML$dDiv.div()()({className: "collapse-content"});
const collapse = variant => () => Yoga$dReact$dDOM$dHTML$dDiv.div()()({className: "collapse " + variant, tabIndex: 0});
const close = "collapse-close";
const arrow = "collapse-arrow";
export {arrow, close, collapse, collapseContent, collapseTitle, open, plus};
