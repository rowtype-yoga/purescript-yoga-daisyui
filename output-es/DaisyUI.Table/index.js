import * as Yoga$dReact$dDOM$dHTML$dTbody from "../Yoga.React.DOM.HTML.Tbody/index.js";
import * as Yoga$dReact$dDOM$dHTML$dTd from "../Yoga.React.DOM.HTML.Td/index.js";
import * as Yoga$dReact$dDOM$dHTML$dTfoot from "../Yoga.React.DOM.HTML.Tfoot/index.js";
import * as Yoga$dReact$dDOM$dHTML$dTh from "../Yoga.React.DOM.HTML.Th/index.js";
import * as Yoga$dReact$dDOM$dHTML$dThead from "../Yoga.React.DOM.HTML.Thead/index.js";
import * as Yoga$dReact$dDOM$dHTML$dTr from "../Yoga.React.DOM.HTML.Tr/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
const zebra = "table-zebra";
const xs = "table-xs";
const tableRowHover = () => Yoga$dReact$dDOM$dHTML$dTr.tr()()({className: "hover"});
const tableRowActive = () => Yoga$dReact$dDOM$dHTML$dTr.tr()()({className: "active"});
const tableRow = () => Yoga$dReact$dDOM$dHTML$dTr.tr()()({});
const tableHeader = () => Yoga$dReact$dDOM$dHTML$dThead.thead()()({});
const tableHead = () => Yoga$dReact$dDOM$dHTML$dTh.th()()({});
const tableFooter = () => Yoga$dReact$dDOM$dHTML$dTfoot.tfoot()()({});
const tableCell = () => Yoga$dReact$dDOM$dHTML$dTd.td()()({});
const tableBody = () => Yoga$dReact$dDOM$dHTML$dTbody.tbody()()({});
const sm = "table-sm";
const pinRows = "table-pin-rows";
const pinCols = "table-pin-cols";
const md = "table-md";
const lg = "table-lg";
const daisyTable = size => () => kids => Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "overflow-x-auto"},
  [Yoga$dReact$dDOM$dInternal.createElementImpl("table", {className: "table " + size}, kids)]
);
export {daisyTable, lg, md, pinCols, pinRows, sm, tableBody, tableCell, tableFooter, tableHead, tableHeader, tableRow, tableRowActive, tableRowHover, xs, zebra};
