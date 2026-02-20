import * as Yoga$dReact$dDOM$dHTML$dKbd from "../Yoga.React.DOM.HTML.Kbd/index.js";
const xs = "kbd-xs";
const sm = "kbd-sm";
const md = "kbd-md";
const lg = "kbd-lg";
const kbdKey = size => () => Yoga$dReact$dDOM$dHTML$dKbd.kbd()()({className: "kbd " + size});
export {kbdKey, lg, md, sm, xs};
