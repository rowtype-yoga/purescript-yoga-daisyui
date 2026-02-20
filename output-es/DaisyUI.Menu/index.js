import * as Yoga$dReact$dDOM$dHTML$dLi from "../Yoga.React.DOM.HTML.Li/index.js";
import * as Yoga$dReact$dDOM$dHTML$dUl from "../Yoga.React.DOM.HTML.Ul/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
const xs = "menu-xs";
const sm = "menu-sm";
const menuTitle = () => Yoga$dReact$dDOM$dHTML$dLi.li()()({className: "menu-title"});
const menuSub = () => title => kids => Yoga$dReact$dDOM$dInternal.createElementImpl(
  "li",
  {},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "details",
      {},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl("summary", {}, Yoga$dReact$dDOM$dInternal.createElementImpl("span", {}, title)),
        Yoga$dReact$dDOM$dInternal.createElementImpl("ul", {}, kids)
      ]
    )
  ]
);
const menuItem = () => Yoga$dReact$dDOM$dHTML$dLi.li()()({});
const menuHorizontal = size => () => Yoga$dReact$dDOM$dHTML$dUl.ul()()({className: "menu menu-horizontal " + size});
const menuDisabled = () => Yoga$dReact$dDOM$dHTML$dLi.li()()({className: "disabled"});
const menuActive = () => Yoga$dReact$dDOM$dHTML$dLi.li()()({className: "active"});
const menu = size => () => Yoga$dReact$dDOM$dHTML$dUl.ul()()({className: "menu " + size});
const md = "menu-md";
const lg = "menu-lg";
export {lg, md, menu, menuActive, menuDisabled, menuHorizontal, menuItem, menuSub, menuTitle, sm, xs};
