import * as Type$dProxy from "../Type.Proxy/index.js";
const Slider = x => x;
const Select = x => x;
const Enum = x => x;
const CustomControl = x => x;
const Color = x => x;
const newtypeSlider_ = {Coercible0: () => {}};
const newtypeSelect_ = {Coercible0: () => {}};
const newtypeEnum_ = {Coercible0: () => {}};
const newtypeCustomControl_ = {Coercible0: () => {}};
const newtypeColor_ = {Coercible0: () => {}};
const genericEnumOptionsNoArgum = {genericEnumOptions: v => []};
const genericEnumOptionsConstru = dictIsSymbol => ({genericEnumOptions: v => [dictIsSymbol.reflectSymbol(Type$dProxy.Proxy)]});
const slider = Slider;
const select = value => options => ({value, options});
const genericEnumOptions = dict => dict.genericEnumOptions;
const enumOptions1 = dictGeneric => dictGenericEnumOptions => ({enumOptions: v => dictGenericEnumOptions.genericEnumOptions(Type$dProxy.Proxy)});
const genericEnumOptionsSum = dictGenericEnumOptions => dictGenericEnumOptions1 => (
  {genericEnumOptions: v => [...dictGenericEnumOptions.genericEnumOptions(Type$dProxy.Proxy), ...dictGenericEnumOptions1.genericEnumOptions(Type$dProxy.Proxy)]}
);
const enumOptions = dict => dict.enumOptions;
const $$enum = dictEnumOptions => value => ({value, options: dictEnumOptions.enumOptions(Type$dProxy.Proxy)});
const customControl = config => value => ({value, render: config.render, toStr: config.toStr, fromStr: config.fromStr});
const color = Color;
export {
  Color,
  CustomControl,
  Enum,
  Select,
  Slider,
  color,
  customControl,
  $$enum as enum,
  enumOptions,
  enumOptions1,
  genericEnumOptions,
  genericEnumOptionsConstru,
  genericEnumOptionsNoArgum,
  genericEnumOptionsSum,
  newtypeColor_,
  newtypeCustomControl_,
  newtypeEnum_,
  newtypeSelect_,
  newtypeSlider_,
  select,
  slider
};
