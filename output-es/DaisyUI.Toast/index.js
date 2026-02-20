import * as Yoga$dReact$dDOM$dHTML$dDiv from "../Yoga.React.DOM.HTML.Div/index.js";
const toastTop = "toast-top";
const toastStart = "toast-start";
const toastMiddle = "toast-middle";
const toastEnd = "toast-end";
const toastCenter = "toast-center";
const toastBottom = "toast-bottom";
const toast = position => () => Yoga$dReact$dDOM$dHTML$dDiv.div()()({className: "toast " + position});
export {toast, toastBottom, toastCenter, toastEnd, toastMiddle, toastStart, toastTop};
