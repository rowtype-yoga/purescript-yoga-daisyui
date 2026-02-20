import * as Yoga$dReact$dDOM$dHTML$dDiv from "../Yoga.React.DOM.HTML.Div/index.js";
import * as Yoga$dReact$dDOM$dHTML$dLi from "../Yoga.React.DOM.HTML.Li/index.js";
import * as Yoga$dReact$dDOM$dHTML$dUl from "../Yoga.React.DOM.HTML.Ul/index.js";
const listRow = () => Yoga$dReact$dDOM$dHTML$dLi.li()()({className: "list-row"});
const listColWrap = () => Yoga$dReact$dDOM$dHTML$dDiv.div()()({className: "list-col-wrap"});
const listColGrow = () => Yoga$dReact$dDOM$dHTML$dDiv.div()()({className: "list-col-grow"});
const list = () => Yoga$dReact$dDOM$dHTML$dUl.ul()()({className: "list bg-base-100 rounded-box shadow-md"});
export {list, listColGrow, listColWrap, listRow};
