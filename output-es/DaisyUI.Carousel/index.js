import * as Yoga$dReact$dDOM$dHTML$dDiv from "../Yoga.React.DOM.HTML.Div/index.js";
const vertical = "carousel-vertical";
const end = "carousel-end";
const center = "carousel-center";
const carouselItem = () => Yoga$dReact$dDOM$dHTML$dDiv.div()()({className: "carousel-item"});
const carousel = modifier => () => Yoga$dReact$dDOM$dHTML$dDiv.div()()({className: "carousel " + modifier});
export {carousel, carouselItem, center, end, vertical};
