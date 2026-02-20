// | Ergonomic optional fields for PureScript records.
// |
// | Define a row type with `f`-wrapped optional fields, resolve it with
// | `OneOf Undefined`, then use `options` to accept any subset:
// |
// | ```purescript
// | type MyConfigR f =
// |   ( host :: String
// |   , port :: Int
// |   , ssl :: f Boolean
// |   )
// | type MyConfig = MyConfigR (OneOf Undefined)
// |
// | myFunction :: forall r. Options r MyConfig => { | r } -> Result
// | myFunction given = do
// |   let config = options @MyConfig given
// |   let ssl = uorToMaybe config.ssl    -- Maybe Boolean
// |   let ssl' = config.ssl ?? false     -- Boolean
// | ```
import * as Foreign from "../Foreign/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const optionsRLNil = {};
const optionsRLCons = () => () => () => ({});
const optionsFieldTypeUndefined = {};
const optionsFieldTypeUndefined1 = {};
const optionsFieldTypeRecordUnd = () => () => () => ({});
const optionsFieldTypeIdentity = {};
const optionsFieldType = {};
const options1 = () => () => () => ({});
const lookupFieldCons = () => ({});
const lookupFieldCons1 = {};
const options = () => Unsafe$dCoerce.unsafeCoerce;
const nullishCoalesce = uor => fallback => {
  if (Foreign.typeOf(uor) === "undefined") { return fallback; }
  return uor;
};
export {
  lookupFieldCons,
  lookupFieldCons1,
  nullishCoalesce,
  options,
  options1,
  optionsFieldType,
  optionsFieldTypeIdentity,
  optionsFieldTypeRecordUnd,
  optionsFieldTypeUndefined,
  optionsFieldTypeUndefined1,
  optionsRLCons,
  optionsRLNil
};
