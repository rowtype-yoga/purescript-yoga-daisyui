import * as $runtime from "../runtime.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dGeneric$dRep from "../Data.Generic.Rep/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNullable from "../Data.Nullable/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Foreign$dObject from "../Foreign.Object/index.js";
import * as Record$dBuilder from "../Record.Builder/index.js";
import * as Record$dUnsafe from "../Record.Unsafe/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
import * as Yoga$dJSON from "../Yoga.JSON/index.js";
import {elImpl, inputImpl, parseFloat_, parseInt_} from "./foreign.js";
const identity = x => x;
const identity1 = x => x;
const readJSON_ = /* #__PURE__ */ Yoga$dJSON.readJSON_(/* #__PURE__ */ Yoga$dJSON.readForeignObject(Yoga$dJSON.readForeignString));
const toParamsNil = {toParams: v => v1 => v2 => Foreign$dObject.empty};
const toParamStringString = {toParam: v => identity};
const toParamSliderNumber = {toParam: v => Data$dShow.showNumberImpl};
const toParamSelectStringString = {toParam: v => identity};
const toParamNumberNumber = {toParam: v => Data$dShow.showNumberImpl};
const toParamMaybeStringMaybeSt = {
  toParam: v => v1 => {
    if (v1.tag === "Nothing") { return ""; }
    if (v1.tag === "Just") { return v1._1; }
    $runtime.fail();
  }
};
const toParamMaybeNumberMaybeNu = {
  toParam: v => v1 => {
    if (v1.tag === "Nothing") { return ""; }
    if (v1.tag === "Just") { return Data$dShow.showNumberImpl(v1._1); }
    $runtime.fail();
  }
};
const toParamMaybeIntMaybeInt = {
  toParam: v => v1 => {
    if (v1.tag === "Nothing") { return ""; }
    if (v1.tag === "Just") { return Data$dShow.showIntImpl(v1._1); }
    $runtime.fail();
  }
};
const toParamMaybeBooleanMaybeB = {
  toParam: v => v1 => {
    if (v1.tag === "Nothing") { return ""; }
    if (v1.tag === "Just") {
      if (v1._1) { return "true"; }
      return "false";
    }
    $runtime.fail();
  }
};
const toParamIntInt = {toParam: v => Data$dShow.showIntImpl};
const toParamCustomControl = {toParam: v => v.toStr};
const toParamColorString = {toParam: v => identity};
const toParamBooleanBoolean = {
  toParam: v => b => {
    if (b) { return "true"; }
    return "false";
  }
};
const renderControlsNil = {renderControls: v => v1 => v2 => v3 => []};
const initialValuesNilRowRow = {initialValues: v => v1 => identity1};
const initialValueStringString = {initialValue: identity};
const initialValueSliderNumber = {initialValue: v => v.value};
const initialValueSelectStringS = {initialValue: v => v.value};
const initialValueNumberNumber = {initialValue: identity};
const initialValueMaybeStringMa = {initialValue: identity};
const initialValueMaybeNumberMa = {initialValue: identity};
const initialValueMaybeIntMaybe = {initialValue: identity};
const initialValueMaybeBooleanM = {initialValue: identity};
const initialValueIntInt = {initialValue: identity};
const initialValueEnum = {initialValue: v => v.value};
const initialValueCustomControl = {initialValue: v => v.value};
const initialValueColorString = {initialValue: v => v};
const initialValueBooleanBoolea = {initialValue: identity};
const genericToStringConstructo = dictIsSymbol => ({genericToString: v => dictIsSymbol.reflectSymbol(Type$dProxy.Proxy)});
const genericFromStringConstruc = dictIsSymbol => (
  {
    genericFromString: s => {
      if (s === dictIsSymbol.reflectSymbol(Type$dProxy.Proxy)) { return Data$dMaybe.$Maybe("Just", Data$dGeneric$dRep.NoArguments); }
      return Data$dMaybe.Nothing;
    }
  }
);
const fromParamsNil = {fromParams: v => v1 => v2 => vals => vals};
const fromParamStringString = {fromParam: v => Data$dMaybe.Just};
const fromParamSliderNumber = {
  fromParam: v => s => {
    const n = parseFloat_(s);
    if (n === n) { return Data$dMaybe.$Maybe("Just", n); }
    return Data$dMaybe.Nothing;
  }
};
const fromParamSelectStringStri = {fromParam: v => Data$dMaybe.Just};
const fromParamNumberNumber = {
  fromParam: v => s => {
    const n = parseFloat_(s);
    if (n === n) { return Data$dMaybe.$Maybe("Just", n); }
    return Data$dMaybe.Nothing;
  }
};
const fromParamMaybeStringMaybe = {
  fromParam: v => v1 => {
    if (v1 === "") { return Data$dMaybe.$Maybe("Just", Data$dMaybe.Nothing); }
    return Data$dMaybe.$Maybe("Just", Data$dMaybe.$Maybe("Just", v1));
  }
};
const fromParamMaybeNumberMaybe = {
  fromParam: v => v1 => {
    if (v1 === "") { return Data$dMaybe.$Maybe("Just", Data$dMaybe.Nothing); }
    const n = parseFloat_(v1);
    if (n === n) { return Data$dMaybe.$Maybe("Just", Data$dMaybe.$Maybe("Just", n)); }
    return Data$dMaybe.Nothing;
  }
};
const fromParamMaybeIntMaybeInt = {
  fromParam: v => v1 => {
    if (v1 === "") { return Data$dMaybe.$Maybe("Just", Data$dMaybe.Nothing); }
    const n = parseInt_(v1);
    if (n === n) { return Data$dMaybe.$Maybe("Just", Data$dMaybe.$Maybe("Just", n)); }
    return Data$dMaybe.Nothing;
  }
};
const fromParamMaybeBooleanMayb = {
  fromParam: v => v1 => {
    if (v1 === "") { return Data$dMaybe.$Maybe("Just", Data$dMaybe.Nothing); }
    if (v1 === "true") { return Data$dMaybe.$Maybe("Just", Data$dMaybe.$Maybe("Just", true)); }
    if (v1 === "false") { return Data$dMaybe.$Maybe("Just", Data$dMaybe.$Maybe("Just", false)); }
    return Data$dMaybe.Nothing;
  }
};
const fromParamIntInt = {
  fromParam: v => s => {
    const n = parseInt_(s);
    if (n === n) { return Data$dMaybe.$Maybe("Just", n); }
    return Data$dMaybe.Nothing;
  }
};
const fromParamCustomControl = {fromParam: v => v.fromStr};
const fromParamColorString = {fromParam: v => Data$dMaybe.Just};
const fromParamBooleanBoolean = {
  fromParam: v => v1 => {
    if (v1 === "true") { return Data$dMaybe.$Maybe("Just", true); }
    if (v1 === "false") { return Data$dMaybe.$Maybe("Just", false); }
    return Data$dMaybe.Nothing;
  }
};
const toParams = dict => dict.toParams;
const valuesToParams = () => dictToParams => schema => values => dictToParams.toParams(Type$dProxy.Proxy)(schema)(values);
const toParamRecordRecord = () => dictInitialValues => dictToParams => (
  {
    toParam: schema => values => Yoga$dJSON._unsafeStringify(Foreign$dObject._mapWithKey(dictToParams.toParams(Type$dProxy.Proxy)(schema)(values), v => Unsafe$dCoerce.unsafeCoerce))
  }
);
const toParam = dict => dict.toParam;
const toParamsCons = dictIsSymbol => dictToParam => dictToParams => () => () => (
  {
    toParams: v => schema => values => {
      const $0 = dictIsSymbol.reflectSymbol(Type$dProxy.Proxy);
      const $1 = dictToParam.toParam(Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(schema))(Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(values));
      return Foreign$dObject.mutate($2 => () => {
        $2[$0] = $1;
        return $2;
      })(dictToParams.toParams(Type$dProxy.Proxy)(schema)(values));
    }
  }
);
const renderControls = dict => dict.renderControls;
const renderControl = dict => dict.renderControl;
const renderControlsCons = dictIsSymbol => dictRenderControl => dictRenderControls => () => () => (
  {
    renderControls: v => schema => values => setValues => [
      dictRenderControl.renderControl(Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(schema))(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(values))(newVal => setValues(Record$dUnsafe.unsafeSet(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(newVal)(values))),
      ...dictRenderControls.renderControls(Type$dProxy.Proxy)(schema)(values)(setValues)
    ]
  }
);
const inputStyle = {
  width: "100%",
  background: "#0f172a",
  border: "1px solid #475569",
  borderRadius: "4px",
  padding: "4px 8px",
  fontSize: "13px",
  color: "#e2e8f0",
  outline: "none",
  boxSizing: "border-box"
};
const selectStyle = {...inputStyle, padding: "6px 32px 6px 8px"};
const initialValues = dict => dict.initialValues;
const initialValue = dict => dict.initialValue;
const initialValuesCons = dictIsSymbol => dictInitialValue => dictInitialValues => () => () => () => (
  {
    initialValues: v => schema => {
      const $0 = Record$dBuilder.insert()()(dictIsSymbol)(Type$dProxy.Proxy)(dictInitialValue.initialValue(Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(schema)));
      const $1 = dictInitialValues.initialValues(Type$dProxy.Proxy)(schema);
      return x => $0($1(x));
    }
  }
);
const genericToString = dict => dict.genericToString;
const genericToStringSum = dictGenericToString => dictGenericToString1 => (
  {
    genericToString: v => {
      if (v.tag === "Inl") { return dictGenericToString.genericToString(v._1); }
      if (v.tag === "Inr") { return dictGenericToString1.genericToString(v._1); }
      $runtime.fail();
    }
  }
);
const toParamEnum = dictGeneric => dictGenericToString => ({toParam: v => x => dictGenericToString.genericToString(dictGeneric.from(x))});
const genericFromString = dict => dict.genericFromString;
const fromParamEnum = dictGeneric => dictGenericFromString => (
  {
    fromParam: v => s => {
      const $0 = dictGenericFromString.genericFromString(s);
      if ($0.tag === "Just") { return Data$dMaybe.$Maybe("Just", dictGeneric.to($0._1)); }
      return Data$dMaybe.Nothing;
    }
  }
);
const genericFromStringSum = dictGenericFromString => dictGenericFromString1 => (
  {
    genericFromString: s => {
      const v = dictGenericFromString.genericFromString(s);
      if (v.tag === "Just") { return Data$dMaybe.$Maybe("Just", Data$dGeneric$dRep.$Sum("Inl", v._1)); }
      if (v.tag === "Nothing") {
        const v1 = dictGenericFromString1.genericFromString(s);
        if (v1.tag === "Just") { return Data$dMaybe.$Maybe("Just", Data$dGeneric$dRep.$Sum("Inr", v1._1)); }
        if (v1.tag === "Nothing") { return Data$dMaybe.Nothing; }
      }
      $runtime.fail();
    }
  }
);
const fromParams = dict => dict.fromParams;
const paramsToValues = () => dictFromParams => schema => params => defaults => dictFromParams.fromParams(Type$dProxy.Proxy)(schema)(params)(defaults);
const fromParam = dict => dict.fromParam;
const fromParamsCons = dictIsSymbol => dictFromParam => dictFromParams => () => () => (
  {
    fromParams: v => schema => params => values => {
      const rest = dictFromParams.fromParams(Type$dProxy.Proxy)(schema)(params)(values);
      const $0 = Foreign$dObject._lookup(Data$dMaybe.Nothing, Data$dMaybe.Just, dictIsSymbol.reflectSymbol(Type$dProxy.Proxy), params);
      const v1 = (() => {
        const $1 = dictFromParam.fromParam(Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(schema));
        if ($0.tag === "Just") { return $1($0._1); }
        if ($0.tag === "Nothing") { return Data$dMaybe.Nothing; }
        $runtime.fail();
      })();
      if (v1.tag === "Just") { return Record$dUnsafe.unsafeSet(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(v1._1)(rest); }
      if (v1.tag === "Nothing") { return rest; }
      $runtime.fail();
    }
  }
);
const controlsPanel = controls => elImpl("div")({
  style: {
    border: "1px solid #334155",
    borderRadius: "8px",
    background: "#1e293b",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontSize: "13px",
    color: "#e2e8f0",
    boxSizing: "border-box"
  }
})(controls);
const controlRow = lbl => children => elImpl("label")({style: {display: "flex", alignItems: "center", gap: "12px"}})([
  elImpl("span")({style: {color: "#94a3b8", width: "96px", flexShrink: "0"}})([lbl]),
  elImpl("div")({style: {display: "flex", alignItems: "center", flex: "1"}})(children)
]);
const renderControlBooleanBoole = {
  renderControl: v => lbl => val => setter => controlRow(lbl)([
    inputImpl({
      type: "checkbox",
      checked: val,
      style: {accentColor: "#6366f1"},
      onChange: x => {
        const $0 = Data$dNullable.nullable(x.target.checked, Data$dMaybe.Nothing, Data$dMaybe.Just);
        if ($0.tag === "Just") { return setter($0._1)(); }
        if ($0.tag === "Nothing") { return; }
        $runtime.fail();
      }
    })
  ])
};
const renderControlColorString = {
  renderControl: v => lbl => val => setter => controlRow(lbl)([
    inputImpl({
      type: "color",
      value: val,
      style: {width: "32px", height: "32px", borderRadius: "4px", border: "1px solid #475569", background: "transparent", cursor: "pointer", padding: "0"},
      onChange: x => {
        const $0 = Data$dNullable.nullable(x.target.value, Data$dMaybe.Nothing, Data$dMaybe.Just);
        if ($0.tag === "Just") { return setter($0._1)(); }
        if ($0.tag === "Nothing") { return; }
        $runtime.fail();
      }
    }),
    elImpl("span")({style: {fontSize: "11px", color: "#94a3b8", marginLeft: "8px"}})([val])
  ])
};
const renderControlCustomContro = {renderControl: v => lbl => val => setter => controlRow(lbl)([v.render(val)(setter)])};
const renderControlEnum = dictGeneric => dictGenericToString => dictGenericFromString => dictEnumOptions => (
  {
    renderControl: v => lbl => val => setter => controlRow(lbl)([
      elImpl("select")({
        value: dictGenericToString.genericToString(dictGeneric.from(val)),
        style: selectStyle,
        onChange: x => {
          const $0 = Data$dNullable.nullable(x.target.value, Data$dMaybe.Nothing, Data$dMaybe.Just);
          if ($0.tag === "Just") {
            const $1 = dictGenericFromString.genericFromString($0._1);
            if ($1.tag === "Just") { return setter(dictGeneric.to($1._1))(); }
            return;
          }
          if ($0.tag === "Nothing") { return; }
          $runtime.fail();
        }
      })(Data$dFunctor.arrayMap(opt => elImpl("option")({value: opt})([opt]))(dictEnumOptions.enumOptions(Type$dProxy.Proxy)))
    ])
  }
);
const renderControlIntInt = {
  renderControl: v => lbl => val => setter => controlRow(lbl)([
    inputImpl({
      type: "number",
      value: Data$dShow.showIntImpl(val),
      style: inputStyle,
      step: "1",
      onChange: x => {
        const $0 = Data$dNullable.nullable(x.target.value, Data$dMaybe.Nothing, Data$dMaybe.Just);
        if ($0.tag === "Just") {
          const n = parseInt_($0._1);
          const $1 = setter(n);
          if (n === n) { return $1(); }
          return;
        }
        if ($0.tag === "Nothing") { return; }
        $runtime.fail();
      }
    })
  ])
};
const renderControlMaybeBoolean = {
  renderControl: v => lbl => val => setter => controlRow(lbl)([
    inputImpl({
      type: "checkbox",
      checked: (() => {
        if (val.tag === "Just") { return true; }
        if (val.tag === "Nothing") { return false; }
        $runtime.fail();
      })(),
      style: {accentColor: "#6366f1", marginRight: "8px"},
      onChange: x => {
        const $0 = Data$dNullable.nullable(x.target.checked, Data$dMaybe.Nothing, Data$dMaybe.Just);
        if ($0.tag === "Just" && $0._1) { return setter(Data$dMaybe.$Maybe("Just", false))(); }
        return setter(Data$dMaybe.Nothing)();
      }
    }),
    (() => {
      if (val.tag === "Nothing") { return ""; }
      if (val.tag === "Just") {
        return inputImpl({
          type: "checkbox",
          checked: val._1,
          style: {accentColor: "#6366f1"},
          onChange: x => {
            const $0 = Data$dNullable.nullable(x.target.checked, Data$dMaybe.Nothing, Data$dMaybe.Just);
            if ($0.tag === "Just") { return setter(Data$dMaybe.$Maybe("Just", $0._1))(); }
            if ($0.tag === "Nothing") { return; }
            $runtime.fail();
          }
        });
      }
      $runtime.fail();
    })()
  ])
};
const renderControlMaybeIntMayb = {
  renderControl: v => lbl => val => setter => controlRow(lbl)([
    inputImpl({
      type: "checkbox",
      checked: (() => {
        if (val.tag === "Just") { return true; }
        if (val.tag === "Nothing") { return false; }
        $runtime.fail();
      })(),
      style: {accentColor: "#6366f1", marginRight: "8px"},
      onChange: x => {
        const $0 = Data$dNullable.nullable(x.target.checked, Data$dMaybe.Nothing, Data$dMaybe.Just);
        if ($0.tag === "Just" && $0._1) { return setter(Data$dMaybe.$Maybe("Just", 0))(); }
        return setter(Data$dMaybe.Nothing)();
      }
    }),
    (() => {
      if (val.tag === "Nothing") { return ""; }
      if (val.tag === "Just") {
        return inputImpl({
          type: "number",
          value: Data$dShow.showIntImpl(val._1),
          step: "1",
          style: inputStyle,
          onChange: x => {
            const $0 = Data$dNullable.nullable(x.target.value, Data$dMaybe.Nothing, Data$dMaybe.Just);
            if ($0.tag === "Just") {
              const num = parseInt_($0._1);
              const $1 = setter(Data$dMaybe.$Maybe("Just", num));
              if (num === num) { return $1(); }
              return;
            }
            if ($0.tag === "Nothing") { return; }
            $runtime.fail();
          }
        });
      }
      $runtime.fail();
    })()
  ])
};
const renderControlMaybeNumberM = {
  renderControl: v => lbl => val => setter => controlRow(lbl)([
    inputImpl({
      type: "checkbox",
      checked: (() => {
        if (val.tag === "Just") { return true; }
        if (val.tag === "Nothing") { return false; }
        $runtime.fail();
      })(),
      style: {accentColor: "#6366f1", marginRight: "8px"},
      onChange: x => {
        const $0 = Data$dNullable.nullable(x.target.checked, Data$dMaybe.Nothing, Data$dMaybe.Just);
        if ($0.tag === "Just" && $0._1) { return setter(Data$dMaybe.$Maybe("Just", 0.0))(); }
        return setter(Data$dMaybe.Nothing)();
      }
    }),
    (() => {
      if (val.tag === "Nothing") { return ""; }
      if (val.tag === "Just") {
        return inputImpl({
          type: "number",
          value: Data$dShow.showNumberImpl(val._1),
          step: "any",
          style: inputStyle,
          onChange: x => {
            const $0 = Data$dNullable.nullable(x.target.value, Data$dMaybe.Nothing, Data$dMaybe.Just);
            if ($0.tag === "Just") {
              const num = parseFloat_($0._1);
              const $1 = setter(Data$dMaybe.$Maybe("Just", num));
              if (num === num) { return $1(); }
              return;
            }
            if ($0.tag === "Nothing") { return; }
            $runtime.fail();
          }
        });
      }
      $runtime.fail();
    })()
  ])
};
const renderControlMaybeStringM = {
  renderControl: v => lbl => val => setter => controlRow(lbl)([
    inputImpl({
      type: "checkbox",
      checked: (() => {
        if (val.tag === "Just") { return true; }
        if (val.tag === "Nothing") { return false; }
        $runtime.fail();
      })(),
      style: {accentColor: "#6366f1", marginRight: "8px"},
      onChange: x => {
        const $0 = Data$dNullable.nullable(x.target.checked, Data$dMaybe.Nothing, Data$dMaybe.Just);
        if ($0.tag === "Just" && $0._1) { return setter(Data$dMaybe.$Maybe("Just", ""))(); }
        return setter(Data$dMaybe.Nothing)();
      }
    }),
    (() => {
      if (val.tag === "Nothing") { return ""; }
      if (val.tag === "Just") {
        return inputImpl({
          type: "text",
          value: val._1,
          style: inputStyle,
          onChange: x => {
            const $0 = Data$dNullable.nullable(x.target.value, Data$dMaybe.Nothing, Data$dMaybe.Just);
            if ($0.tag === "Just") { return setter(Data$dMaybe.$Maybe("Just", $0._1))(); }
            if ($0.tag === "Nothing") { return; }
            $runtime.fail();
          }
        });
      }
      $runtime.fail();
    })()
  ])
};
const renderControlNumberNumber = {
  renderControl: v => lbl => val => setter => controlRow(lbl)([
    inputImpl({
      type: "number",
      value: Data$dShow.showNumberImpl(val),
      style: inputStyle,
      step: "any",
      onChange: x => {
        const $0 = Data$dNullable.nullable(x.target.value, Data$dMaybe.Nothing, Data$dMaybe.Just);
        if ($0.tag === "Just") {
          const n = parseFloat_($0._1);
          const $1 = setter(n);
          if (n === n) { return $1(); }
          return;
        }
        if ($0.tag === "Nothing") { return; }
        $runtime.fail();
      }
    })
  ])
};
const renderControlSelectString = {
  renderControl: v => lbl => val => setter => controlRow(lbl)([
    elImpl("select")({
      value: val,
      style: selectStyle,
      onChange: x => {
        const $0 = Data$dNullable.nullable(x.target.value, Data$dMaybe.Nothing, Data$dMaybe.Just);
        if ($0.tag === "Just") { return setter($0._1)(); }
        if ($0.tag === "Nothing") { return; }
        $runtime.fail();
      }
    })(Data$dFunctor.arrayMap(opt => elImpl("option")({value: opt})([opt]))(v.options))
  ])
};
const renderControlSliderNumber = {
  renderControl: v => lbl => val => setter => controlRow(lbl)([
    elImpl("div")({style: {display: "flex", alignItems: "center", gap: "8px", flex: "1"}})([
      inputImpl({
        type: "range",
        min: Data$dShow.showNumberImpl(v.min),
        max: Data$dShow.showNumberImpl(v.max),
        step: Data$dShow.showNumberImpl(v.step),
        value: Data$dShow.showNumberImpl(val),
        style: {flex: "1", accentColor: "#6366f1"},
        onChange: x => {
          const $0 = Data$dNullable.nullable(x.target.value, Data$dMaybe.Nothing, Data$dMaybe.Just);
          if ($0.tag === "Just") {
            const n = parseFloat_($0._1);
            const $1 = setter(n);
            if (n === n) { return $1(); }
            return;
          }
          if ($0.tag === "Nothing") { return; }
          $runtime.fail();
        }
      }),
      elImpl("span")({style: {fontSize: "11px", color: "#94a3b8", width: "48px", textAlign: "right"}})([Data$dShow.showNumberImpl(val)])
    ])
  ])
};
const renderControlStringString = {
  renderControl: v => lbl => val => setter => controlRow(lbl)([
    inputImpl({
      type: "text",
      value: val,
      style: inputStyle,
      onChange: x => {
        const $0 = Data$dNullable.nullable(x.target.value, Data$dMaybe.Nothing, Data$dMaybe.Just);
        if ($0.tag === "Just") { return setter($0._1)(); }
        if ($0.tag === "Nothing") { return; }
        $runtime.fail();
      }
    })
  ])
};
const controlGroup = lbl => children => elImpl("div")({style: {display: "flex", flexDirection: "column", gap: "8px"}})([
  elImpl("span")({style: {fontSize: "11px", fontWeight: "500", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em"}})([lbl]),
  elImpl("div")({style: {paddingLeft: "16px", borderLeft: "1px solid #334155", display: "flex", flexDirection: "column", gap: "12px"}})(children)
]);
const renderControlRecordRecord = () => dictRenderControls => (
  {renderControl: schema => lbl => values => setter => controlGroup(lbl)(dictRenderControls.renderControls(Type$dProxy.Proxy)(schema)(values)(setter))}
);
const buildInitialValues = () => dictInitialValues => schema => dictInitialValues.initialValues(Type$dProxy.Proxy)(schema)({});
const fromParamRecordRecord = () => dictInitialValues => dictFromParams => (
  {
    fromParam: schema => s => {
      const $0 = readJSON_(s);
      if ($0.tag === "Just") {
        return Data$dMaybe.$Maybe("Just", dictFromParams.fromParams(Type$dProxy.Proxy)(schema)($0._1)(dictInitialValues.initialValues(Type$dProxy.Proxy)(schema)({})));
      }
      if ($0.tag === "Nothing") { return Data$dMaybe.Nothing; }
      $runtime.fail();
    }
  }
);
const initialValueRecordRecord = () => dictInitialValues => ({initialValue: schema => dictInitialValues.initialValues(Type$dProxy.Proxy)(schema)({})});
export {
  buildInitialValues,
  controlGroup,
  controlRow,
  controlsPanel,
  fromParam,
  fromParamBooleanBoolean,
  fromParamColorString,
  fromParamCustomControl,
  fromParamEnum,
  fromParamIntInt,
  fromParamMaybeBooleanMayb,
  fromParamMaybeIntMaybeInt,
  fromParamMaybeNumberMaybe,
  fromParamMaybeStringMaybe,
  fromParamNumberNumber,
  fromParamRecordRecord,
  fromParamSelectStringStri,
  fromParamSliderNumber,
  fromParamStringString,
  fromParams,
  fromParamsCons,
  fromParamsNil,
  genericFromString,
  genericFromStringConstruc,
  genericFromStringSum,
  genericToString,
  genericToStringConstructo,
  genericToStringSum,
  identity,
  identity1,
  initialValue,
  initialValueBooleanBoolea,
  initialValueColorString,
  initialValueCustomControl,
  initialValueEnum,
  initialValueIntInt,
  initialValueMaybeBooleanM,
  initialValueMaybeIntMaybe,
  initialValueMaybeNumberMa,
  initialValueMaybeStringMa,
  initialValueNumberNumber,
  initialValueRecordRecord,
  initialValueSelectStringS,
  initialValueSliderNumber,
  initialValueStringString,
  initialValues,
  initialValuesCons,
  initialValuesNilRowRow,
  inputStyle,
  paramsToValues,
  readJSON_,
  renderControl,
  renderControlBooleanBoole,
  renderControlColorString,
  renderControlCustomContro,
  renderControlEnum,
  renderControlIntInt,
  renderControlMaybeBoolean,
  renderControlMaybeIntMayb,
  renderControlMaybeNumberM,
  renderControlMaybeStringM,
  renderControlNumberNumber,
  renderControlRecordRecord,
  renderControlSelectString,
  renderControlSliderNumber,
  renderControlStringString,
  renderControls,
  renderControlsCons,
  renderControlsNil,
  selectStyle,
  toParam,
  toParamBooleanBoolean,
  toParamColorString,
  toParamCustomControl,
  toParamEnum,
  toParamIntInt,
  toParamMaybeBooleanMaybeB,
  toParamMaybeIntMaybeInt,
  toParamMaybeNumberMaybeNu,
  toParamMaybeStringMaybeSt,
  toParamNumberNumber,
  toParamRecordRecord,
  toParamSelectStringString,
  toParamSliderNumber,
  toParamStringString,
  toParams,
  toParamsCons,
  toParamsNil,
  valuesToParams
};
export * from "./foreign.js";
