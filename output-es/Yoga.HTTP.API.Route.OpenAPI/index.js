import * as $runtime from "../runtime.js";
import * as Control$dBind from "../Control.Bind/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dString$dCodePoints from "../Data.String.CodePoints/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Data$dString$dRegex from "../Data.String.Regex/index.js";
import * as Data$dString$dRegex$dFlags from "../Data.String.Regex.Flags/index.js";
import * as Data$dString$dRegex$dUnsafe from "../Data.String.Regex.Unsafe/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Data$dUndefined$dNoProblem from "../Data.Undefined.NoProblem/index.js";
import * as Foreign from "../Foreign/index.js";
import * as Foreign$dObject from "../Foreign.Object/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
import * as Yoga$dJSON from "../Yoga.JSON/index.js";
const readJSON_ = /* #__PURE__ */ Yoga$dJSON.readJSON_(/* #__PURE__ */ Yoga$dJSON.readForeignObject(Yoga$dJSON.readForeignForeign));
const fromFoldable = /* #__PURE__ */ Foreign$dObject.fromFoldable(Data$dFoldable.foldableArray);
const eq1 = /* #__PURE__ */ Data$dEq.eqArrayImpl(Data$dEq.eqStringImpl);
const identity = x => x;
const writeForeignFieldsCons = /* #__PURE__ */ Yoga$dJSON.writeForeignFieldsCons({reflectSymbol: () => "url"})(Yoga$dJSON.writeForeignString)(Yoga$dJSON.writeForeignFieldsNilRowR)()()();
const writeForeignFieldsCons1 = /* #__PURE__ */ Yoga$dJSON.writeForeignFieldsCons({reflectSymbol: () => "name"})(Yoga$dJSON.writeForeignString)(writeForeignFieldsCons)()()();
const writeImpl1 = /* #__PURE__ */ (() => {
  const $0 = Yoga$dJSON.writeForeignFieldsCons({reflectSymbol: () => "email"})(Yoga$dJSON.writeForeignString)(writeForeignFieldsCons1)()()();
  return rec => $0.writeImplFields(Type$dProxy.Proxy)(rec)({});
})();
const writeImpl3 = /* #__PURE__ */ (() => {
  const $0 = Yoga$dJSON.writeForeignFieldsCons({reflectSymbol: () => "description"})({
    writeImpl: v2 => {
      if (v2.tag === "Nothing") { return Yoga$dJSON._undefined; }
      if (v2.tag === "Just") { return v2._1; }
      $runtime.fail();
    }
  })(writeForeignFieldsCons)()()();
  return xs => Data$dFunctor.arrayMap(rec => $0.writeImplFields(Type$dProxy.Proxy)(rec)({}))(xs);
})();
const writeForeignOpenAPISpec = {writeImpl: Unsafe$dCoerce.unsafeCoerce};
const validateSchemaNames = () => () => () => ({});
const validateNoDuplicatesRLNil = {};
const validateNoDuplicatesRLCon = () => () => ({});
const renderResponseHeadersSche = {renderResponseHeadersSchemaRL: v => Foreign$dObject.empty};
const renderRequestBodySchemaPl = {renderRequestBodySchema: v => Data$dMaybe.$Maybe("Just", {required: true, content: {"text/plain": {schema: {type: "string"}}}})};
const renderRequestBodySchemaNo = {renderRequestBodySchema: v => Data$dMaybe.Nothing};
const renderRecordSchemaRLNilRo = {renderRecordSchemaRL: v => Foreign$dObject.empty, getRequiredFields: v => []};
const renderQueryParamsSchemaRL1 = {renderQueryParamsSchemaRL: v => []};
const renderPathParamsSchemaRLN = {renderPathParamsSchemaRL: v => []};
const renderJSONSchemaSchema = dictIsSymbol => dictRenderJSONSchema => (
  {
    renderJSONSchema: v => {
      const $0 = "#/components/schemas/" + dictIsSymbol.reflectSymbol(Type$dProxy.Proxy);
      const $1 = {};
      $1.$ref = $0;
      return $1;
    }
  }
);
const renderJSONSchemaPlainText = {renderJSONSchema: v => ({type: "string"})};
const renderJSONSchemaNoBody = {renderJSONSchema: v => ({type: "null"})};
const renderHeadersSchemaRLNilR = {renderHeadersSchemaRL: v => []};
const renderCookieParamsSchemaR = {renderCookieParamsSchemaRL: v => []};
const getContentTypeXML = {getContentType: v => "application/xml"};
const getContentTypeUnit = {getContentType: v => "application/json"};
const getContentTypeString = {getContentType: v => "application/json"};
const getContentTypeRecord = {getContentType: v => "application/json"};
const getContentTypePlainText = {getContentType: v => "text/plain"};
const getContentTypeNumber = {getContentType: v => "application/json"};
const getContentTypeNoBody = {getContentType: v => ""};
const getContentTypeMultipartFo = {getContentType: v => "multipart/form-data"};
const getContentTypeMaybe = dictGetContentType => ({getContentType: v => "application/json"});
const getContentTypeJSON = {getContentType: v => "application/json"};
const getContentTypeInt = {getContentType: v => "application/json"};
const getContentTypeFormData = {getContentType: v => "application/x-www-form-urlencoded"};
const getContentTypeCustomConte = dictIsSymbol => ({getContentType: v => dictIsSymbol.reflectSymbol(Type$dProxy.Proxy)});
const getContentTypeBoolean = {getContentType: v => "application/json"};
const getContentTypeArray = dictGetContentType => ({getContentType: v => "application/json"});
const detectSecurityRLNil = {detectSecurityRL: v => []};
const detectSecurityRLConsExamp = dictDetectSecurityRL => (
  {
    detectSecurityRL: v => [
      (() => {
        const $0 = {};
        $0.digestAuth = [];
        return $0;
      })()
    ]
  }
);
const detectSecurityRLConsExamp1 = dictDetectSecurityRL => dictIsSymbol => (
  {
    detectSecurityRL: v => [
      (() => {
        const $0 = dictIsSymbol.reflectSymbol(Type$dProxy.Proxy) + "ApiKey";
        const $1 = {};
        $1[$0] = [];
        return $1;
      })()
    ]
  }
);
const detectSecurityRLConsExamp2 = dictDetectSecurityRL => (
  {
    detectSecurityRL: v => [
      (() => {
        const $0 = {};
        $0.basicAuth = [];
        return $0;
      })()
    ]
  }
);
const detectSecurityRLConsExamp3 = dictDetectSecurityRL => (
  {
    detectSecurityRL: v => [
      (() => {
        const $0 = {};
        $0.bearerAuth = [];
        return $0;
      })()
    ]
  }
);
const detectSecurityRLConsDiges = dictDetectSecurityRL => (
  {
    detectSecurityRL: v => [
      (() => {
        const $0 = {};
        $0.digestAuth = [];
        return $0;
      })()
    ]
  }
);
const detectSecurityRLConsDescr = dictDetectSecurityRL => (
  {
    detectSecurityRL: v => [
      (() => {
        const $0 = {};
        $0.digestAuth = [];
        return $0;
      })()
    ]
  }
);
const detectSecurityRLConsDescr1 = dictDetectSecurityRL => dictIsSymbol => (
  {
    detectSecurityRL: v => [
      (() => {
        const $0 = dictIsSymbol.reflectSymbol(Type$dProxy.Proxy) + "ApiKey";
        const $1 = {};
        $1[$0] = [];
        return $1;
      })()
    ]
  }
);
const detectSecurityRLConsDescr2 = dictDetectSecurityRL => (
  {
    detectSecurityRL: v => [
      (() => {
        const $0 = {};
        $0.basicAuth = [];
        return $0;
      })()
    ]
  }
);
const detectSecurityRLConsDescr3 = dictDetectSecurityRL => (
  {
    detectSecurityRL: v => [
      (() => {
        const $0 = {};
        $0.bearerAuth = [];
        return $0;
      })()
    ]
  }
);
const detectSecurityRLConsDepre = dictDetectSecurityRL => (
  {
    detectSecurityRL: v => [
      (() => {
        const $0 = {};
        $0.digestAuth = [];
        return $0;
      })()
    ]
  }
);
const detectSecurityRLConsDepre1 = dictDetectSecurityRL => dictIsSymbol => (
  {
    detectSecurityRL: v => [
      (() => {
        const $0 = dictIsSymbol.reflectSymbol(Type$dProxy.Proxy) + "ApiKey";
        const $1 = {};
        $1[$0] = [];
        return $1;
      })()
    ]
  }
);
const detectSecurityRLConsDepre2 = dictDetectSecurityRL => (
  {
    detectSecurityRL: v => [
      (() => {
        const $0 = {};
        $0.basicAuth = [];
        return $0;
      })()
    ]
  }
);
const detectSecurityRLConsDepre3 = dictDetectSecurityRL => (
  {
    detectSecurityRL: v => [
      (() => {
        const $0 = {};
        $0.bearerAuth = [];
        return $0;
      })()
    ]
  }
);
const detectSecurityRLConsBeare = dictDetectSecurityRL => (
  {
    detectSecurityRL: v => [
      (() => {
        const $0 = {};
        $0.bearerAuth = [];
        return $0;
      })()
    ]
  }
);
const detectSecurityRLConsBasic = dictDetectSecurityRL => (
  {
    detectSecurityRL: v => [
      (() => {
        const $0 = {};
        $0.basicAuth = [];
        return $0;
      })()
    ]
  }
);
const detectSecurityRLConsApiKe = dictDetectSecurityRL => dictIsSymbol => (
  {
    detectSecurityRL: v => [
      (() => {
        const $0 = dictIsSymbol.reflectSymbol(Type$dProxy.Proxy) + "ApiKey";
        const $1 = {};
        $1[$0] = [];
        return $1;
      })()
    ]
  }
);
const detectCookieSecurityRLNil = {detectCookieSecurityRL: v => []};
const detectCookieSecurityRLCon = dictDetectCookieSecurityRL => dictIsSymbol => (
  {
    detectCookieSecurityRL: v => [
      (() => {
        const $0 = dictIsSymbol.reflectSymbol(Type$dProxy.Proxy) + "Cookie";
        const $1 = {};
        $1[$0] = [];
        return $1;
      })()
    ]
  }
);
const detectCookieSecurityRLCon1 = dictDetectCookieSecurityRL => dictIsSymbol => (
  {
    detectCookieSecurityRL: v => [
      (() => {
        const $0 = dictIsSymbol.reflectSymbol(Type$dProxy.Proxy) + "Cookie";
        const $1 = {};
        $1[$0] = [];
        return $1;
      })()
    ]
  }
);
const detectCookieSecurityRLCon2 = dictDetectCookieSecurityRL => dictIsSymbol => (
  {
    detectCookieSecurityRL: v => [
      (() => {
        const $0 = dictIsSymbol.reflectSymbol(Type$dProxy.Proxy) + "Cookie";
        const $1 = {};
        $1[$0] = [];
        return $1;
      })()
    ]
  }
);
const detectCookieSecurityRLCon3 = dictDetectCookieSecurityRL => dictIsSymbol => (
  {
    detectCookieSecurityRL: v => [
      (() => {
        const $0 = dictIsSymbol.reflectSymbol(Type$dProxy.Proxy) + "Cookie";
        const $1 = {};
        $1[$0] = [];
        return $1;
      })()
    ]
  }
);
const collectVariantSchemasRLNi = {collectVariantSchemasRL: v => Foreign$dObject.empty};
const collectVariantSchemaNames = () => () => () => () => ({});
const collectVariantSchemaNames1 = {};
const collectSchemasUnit = {collectSchemas: v => Foreign$dObject.empty};
const collectSchemasString = {collectSchemas: v => Foreign$dObject.empty};
const collectSchemasRLNil = {collectSchemasRL: v => Foreign$dObject.empty};
const collectSchemasPlainText = {collectSchemas: v => Foreign$dObject.empty};
const collectSchemasNumber = {collectSchemas: v => Foreign$dObject.empty};
const collectSchemasNoBody = {collectSchemas: v => Foreign$dObject.empty};
const collectSchemasInt = {collectSchemas: v => Foreign$dObject.empty};
const collectSchemasBoolean = {collectSchemas: v => Foreign$dObject.empty};
const collectSchemaNamesXML = () => ({});
const collectSchemaNamesUnitRow = {};
const collectSchemaNamesTitle = () => ({});
const collectSchemaNamesStringR = {};
const collectSchemaNamesSchema = () => () => () => ({});
const collectSchemaNamesRecord = () => () => ({});
const collectSchemaNamesRLNilRo = {};
const collectSchemaNamesRLCons = () => () => () => ({});
const collectSchemaNamesPlainTe = {};
const collectSchemaNamesPattern = () => ({});
const collectSchemaNamesNumberR = {};
const collectSchemaNamesNullabl = () => ({});
const collectSchemaNamesNoBodyR = {};
const collectSchemaNamesMultipa = () => ({});
const collectSchemaNamesMinimum = () => ({});
const collectSchemaNamesMinLeng = () => ({});
const collectSchemaNamesMaybe = () => ({});
const collectSchemaNamesMaximum = () => ({});
const collectSchemaNamesMaxLeng = () => ({});
const collectSchemaNamesJSON = () => ({});
const collectSchemaNamesIntRow = {};
const collectSchemaNamesFormat = () => ({});
const collectSchemaNamesFormDat = () => ({});
const collectSchemaNamesExample = () => ({});
const collectSchemaNamesExample1 = () => ({});
const collectSchemaNamesEnum = () => ({});
const collectSchemaNamesDescrip = () => ({});
const collectSchemaNamesDepreca = () => ({});
const collectSchemaNamesDefault = () => ({});
const collectSchemaNamesCustomC = () => ({});
const collectSchemaNamesBoolean = {};
const collectSchemaNamesArray = () => ({});
const collectRouteSchemasRLNil = {collectRouteSchemasRL: v => Foreign$dObject.empty};
const collectRouteSchemaNamesRe = () => () => ({});
const collectRouteSchemaNameRLN = {};
const collectRouteSchemaNameRLC = () => () => () => ({});
const collectNamedOperationsRLN = {collectNamedOperationsRL: v => []};
const toOpenAPIPath = /* #__PURE__ */ Data$dString$dRegex.replace(/* #__PURE__ */ Data$dString$dRegex$dUnsafe.unsafeRegex(":([a-zA-Z][a-zA-Z0-9]*)")(Data$dString$dRegex$dFlags.global))("{$1}");
const toOpenAPIImpl = dict => dict.toOpenAPIImpl;
const toOpenAPI = dictToOpenAPI => dictToOpenAPI.toOpenAPIImpl(Type$dProxy.Proxy);
const stripKeys = keys => obj => Data$dFoldable.foldlArray(b => a => Foreign$dObject.mutate($0 => () => {
  delete $0[a];
  return $0;
})(b))(obj)(keys);
const setOperationId = name => jsonStr => {
  const v = readJSON_(jsonStr);
  if (v.tag === "Nothing") { return jsonStr; }
  if (v.tag === "Just") {
    return Yoga$dJSON._unsafeStringify(Foreign$dObject.mutate($0 => () => {
      $0.operationId = name;
      return $0;
    })(v._1));
  }
  $runtime.fail();
};
const renderVariantResponseSchemaRLNil = {renderVariantResponseSchemaRL: v => Foreign$dObject.empty};
const renderVariantResponseSchemaRL = dict => dict.renderVariantResponseSchemaRL;
const renderVariantResponseSche = () => dictRenderVariantResponseSchemaRL => (
  {renderVariantResponseSchema: v => dictRenderVariantResponseSchemaRL.renderVariantResponseSchemaRL(Type$dProxy.Proxy)}
);
const renderVariantResponseSchema = dict => dict.renderVariantResponseSchema;
const renderResponseSchema = dict => dict.renderResponseSchema;
const renderResponseHeadersSchemaRL = dict => dict.renderResponseHeadersSchemaRL;
const renderResponseHeadersSche1 = () => dictRenderResponseHeadersSchemaRL => (
  {renderResponseHeadersSchema: v => dictRenderResponseHeadersSchemaRL.renderResponseHeadersSchemaRL(Type$dProxy.Proxy)}
);
const renderResponseHeadersSchema = dict => dict.renderResponseHeadersSchema;
const renderRequestBodySchema = dict => dict.renderRequestBodySchema;
const renderRecordSchemaRL = dict => dict.renderRecordSchemaRL;
const renderQueryParamsSchemaRL = dict => dict.renderQueryParamsSchemaRL;
const renderQueryParamsSchema1 = () => dictRenderQueryParamsSchemaRL => ({renderQueryParamsSchema: v => dictRenderQueryParamsSchemaRL.renderQueryParamsSchemaRL(Type$dProxy.Proxy)});
const renderQueryParamsSchema = dict => dict.renderQueryParamsSchema;
const renderPathParamsSchemaRL = dict => dict.renderPathParamsSchemaRL;
const renderPathParamsSchema1 = () => dictRenderPathParamsSchemaRL => ({renderPathParamsSchema: v => dictRenderPathParamsSchemaRL.renderPathParamsSchemaRL(Type$dProxy.Proxy)});
const renderPathParamsSchema = dict => dict.renderPathParamsSchema;
const renderJSONSchema = dict => dict.renderJSONSchema;
const renderJSONSchemaArray = dictRenderJSONSchema => (
  {renderJSONSchema: v => fromFoldable([Data$dTuple.$Tuple("type", "array"), Data$dTuple.$Tuple("items", dictRenderJSONSchema.renderJSONSchema(Type$dProxy.Proxy))])}
);
const renderJSONSchemaMaybe = dictRenderJSONSchema => (
  {
    renderJSONSchema: v => Foreign$dObject.mutate($0 => () => {
      $0.nullable = true;
      return $0;
    })(dictRenderJSONSchema.renderJSONSchema(Type$dProxy.Proxy))
  }
);
const renderJSONSchemaCustomCon = dictRenderJSONSchema => ({renderJSONSchema: v => dictRenderJSONSchema.renderJSONSchema(Type$dProxy.Proxy)});
const renderJSONSchemaDeprecate = dictRenderJSONSchema => (
  {
    renderJSONSchema: v => Foreign$dObject.mutate($0 => () => {
      $0.deprecated = true;
      return $0;
    })(dictRenderJSONSchema.renderJSONSchema(Type$dProxy.Proxy))
  }
);
const renderJSONSchemaDescripti = dictRenderJSONSchema => dictIsSymbol => (
  {
    renderJSONSchema: v => {
      const innerObj = dictRenderJSONSchema.renderJSONSchema(Type$dProxy.Proxy);
      const descStr = dictIsSymbol.reflectSymbol(Type$dProxy.Proxy);
      if (descStr === "") { return innerObj; }
      return Foreign$dObject.mutate($0 => () => {
        $0.description = descStr;
        return $0;
      })(innerObj);
    }
  }
);
const renderJSONSchemaEnum = dictRenderJSONSchema => dictHasEnum => (
  {
    renderJSONSchema: v => {
      const innerObj = dictRenderJSONSchema.renderJSONSchema(Type$dProxy.Proxy);
      const enumValues = dictHasEnum.enum(Type$dProxy.Proxy);
      if (enumValues.tag === "Nothing") { return innerObj; }
      if (enumValues.tag === "Just") {
        const $0 = enumValues._1;
        return Foreign$dObject.mutate($1 => () => {
          $1.enum = $0;
          return $1;
        })(innerObj);
      }
      $runtime.fail();
    }
  }
);
const renderJSONSchemaExample = dictRenderJSONSchema => dictIsSymbol => (
  {
    renderJSONSchema: v => {
      const innerObj = dictRenderJSONSchema.renderJSONSchema(Type$dProxy.Proxy);
      const exStr = dictIsSymbol.reflectSymbol(Type$dProxy.Proxy);
      if (exStr === "") { return innerObj; }
      return Foreign$dObject.mutate($0 => () => {
        $0.example = exStr;
        return $0;
      })(innerObj);
    }
  }
);
const renderJSONSchemaExamples = dictRenderJSONSchema => ({renderJSONSchema: v => dictRenderJSONSchema.renderJSONSchema(Type$dProxy.Proxy)});
const renderJSONSchemaFormData = dictRenderJSONSchema => ({renderJSONSchema: v => dictRenderJSONSchema.renderJSONSchema(Type$dProxy.Proxy)});
const renderJSONSchemaFormat = dictRenderJSONSchema => dictIsSymbol => (
  {
    renderJSONSchema: v => {
      const innerObj = dictRenderJSONSchema.renderJSONSchema(Type$dProxy.Proxy);
      const fmtStr = dictIsSymbol.reflectSymbol(Type$dProxy.Proxy);
      if (fmtStr === "") { return innerObj; }
      return Foreign$dObject.mutate($0 => () => {
        $0.format = fmtStr;
        return $0;
      })(innerObj);
    }
  }
);
const renderJSONSchemaJSON = dictRenderJSONSchema => ({renderJSONSchema: v => dictRenderJSONSchema.renderJSONSchema(Type$dProxy.Proxy)});
const renderJSONSchemaMultipart = dictRenderJSONSchema => ({renderJSONSchema: v => dictRenderJSONSchema.renderJSONSchema(Type$dProxy.Proxy)});
const renderJSONSchemaNullable = dictRenderJSONSchema => (
  {
    renderJSONSchema: v => Foreign$dObject.mutate($0 => () => {
      $0.nullable = true;
      return $0;
    })(dictRenderJSONSchema.renderJSONSchema(Type$dProxy.Proxy))
  }
);
const renderJSONSchemaXML = dictRenderJSONSchema => ({renderJSONSchema: v => dictRenderJSONSchema.renderJSONSchema(Type$dProxy.Proxy)});
const renderRequestBodySchemaCu = dictIsSymbol => dictRenderJSONSchema => (
  {
    renderRequestBodySchema: v => Data$dMaybe.$Maybe(
      "Just",
      {
        required: true,
        content: (() => {
          const $0 = dictIsSymbol.reflectSymbol(Type$dProxy.Proxy);
          const $1 = {schema: dictRenderJSONSchema.renderJSONSchema(Type$dProxy.Proxy)};
          const $2 = {};
          $2[$0] = $1;
          return $2;
        })()
      }
    )
  }
);
const renderRequestBodySchemaFo = dictRenderJSONSchema => (
  {
    renderRequestBodySchema: v => Data$dMaybe.$Maybe(
      "Just",
      {required: true, content: {"application/x-www-form-urlencoded": {schema: dictRenderJSONSchema.renderJSONSchema(Type$dProxy.Proxy)}}}
    )
  }
);
const renderRequestBodySchemaJS = dictRenderJSONSchema => (
  {renderRequestBodySchema: v => Data$dMaybe.$Maybe("Just", {required: true, content: {"application/json": {schema: dictRenderJSONSchema.renderJSONSchema(Type$dProxy.Proxy)}}})}
);
const renderRequestBodySchemaMu = dictRenderJSONSchema => (
  {renderRequestBodySchema: v => Data$dMaybe.$Maybe("Just", {required: true, content: {"multipart/form-data": {schema: dictRenderJSONSchema.renderJSONSchema(Type$dProxy.Proxy)}}})}
);
const renderRequestBodySchemaXM = dictRenderJSONSchema => (
  {renderRequestBodySchema: v => Data$dMaybe.$Maybe("Just", {required: true, content: {"application/xml": {schema: dictRenderJSONSchema.renderJSONSchema(Type$dProxy.Proxy)}}})}
);
const renderHeadersSchemaRL = dict => dict.renderHeadersSchemaRL;
const renderHeadersSchema1 = () => dictRenderHeadersSchemaRL => ({renderHeadersSchema: v => dictRenderHeadersSchemaRL.renderHeadersSchemaRL(Type$dProxy.Proxy)});
const renderHeadersSchemaRLCons = dictRenderHeadersSchemaRL => () => () => ({renderHeadersSchemaRL: v => dictRenderHeadersSchemaRL.renderHeadersSchemaRL(Type$dProxy.Proxy)});
const renderHeadersSchemaRLCons1 = dictRenderHeadersSchemaRL => () => () => ({renderHeadersSchemaRL: v => dictRenderHeadersSchemaRL.renderHeadersSchemaRL(Type$dProxy.Proxy)});
const renderHeadersSchemaRLCons2 = dictRenderHeadersSchemaRL => () => () => ({renderHeadersSchemaRL: v => dictRenderHeadersSchemaRL.renderHeadersSchemaRL(Type$dProxy.Proxy)});
const renderHeadersSchemaRLCons3 = dictRenderHeadersSchemaRL => () => () => ({renderHeadersSchemaRL: v => dictRenderHeadersSchemaRL.renderHeadersSchemaRL(Type$dProxy.Proxy)});
const renderHeadersSchemaRLCons4 = dictRenderHeadersSchemaRL => () => () => ({renderHeadersSchemaRL: v => dictRenderHeadersSchemaRL.renderHeadersSchemaRL(Type$dProxy.Proxy)});
const renderHeadersSchemaRLCons5 = dictRenderHeadersSchemaRL => () => () => ({renderHeadersSchemaRL: v => dictRenderHeadersSchemaRL.renderHeadersSchemaRL(Type$dProxy.Proxy)});
const renderHeadersSchemaRLCons6 = dictRenderHeadersSchemaRL => () => () => ({renderHeadersSchemaRL: v => dictRenderHeadersSchemaRL.renderHeadersSchemaRL(Type$dProxy.Proxy)});
const renderHeadersSchemaRLCons7 = dictRenderHeadersSchemaRL => () => () => ({renderHeadersSchemaRL: v => dictRenderHeadersSchemaRL.renderHeadersSchemaRL(Type$dProxy.Proxy)});
const renderHeadersSchemaRLCons8 = dictRenderHeadersSchemaRL => () => () => ({renderHeadersSchemaRL: v => dictRenderHeadersSchemaRL.renderHeadersSchemaRL(Type$dProxy.Proxy)});
const renderHeadersSchemaRLCons9 = dictRenderHeadersSchemaRL => () => () => ({renderHeadersSchemaRL: v => dictRenderHeadersSchemaRL.renderHeadersSchemaRL(Type$dProxy.Proxy)});
const renderHeadersSchemaRLCons10 = dictRenderHeadersSchemaRL => () => () => ({renderHeadersSchemaRL: v => dictRenderHeadersSchemaRL.renderHeadersSchemaRL(Type$dProxy.Proxy)});
const renderHeadersSchemaRLCons11 = dictRenderHeadersSchemaRL => () => () => ({renderHeadersSchemaRL: v => dictRenderHeadersSchemaRL.renderHeadersSchemaRL(Type$dProxy.Proxy)});
const renderHeadersSchemaRLCons12 = dictRenderHeadersSchemaRL => () => () => ({renderHeadersSchemaRL: v => dictRenderHeadersSchemaRL.renderHeadersSchemaRL(Type$dProxy.Proxy)});
const renderHeadersSchemaRLCons13 = dictRenderHeadersSchemaRL => () => () => ({renderHeadersSchemaRL: v => dictRenderHeadersSchemaRL.renderHeadersSchemaRL(Type$dProxy.Proxy)});
const renderHeadersSchemaRLCons14 = dictRenderHeadersSchemaRL => () => () => ({renderHeadersSchemaRL: v => dictRenderHeadersSchemaRL.renderHeadersSchemaRL(Type$dProxy.Proxy)});
const renderHeadersSchemaRLCons15 = dictRenderHeadersSchemaRL => () => () => ({renderHeadersSchemaRL: v => dictRenderHeadersSchemaRL.renderHeadersSchemaRL(Type$dProxy.Proxy)});
const renderHeadersSchema = dict => dict.renderHeadersSchema;
const renderCookieParamsSchemaRL = dict => dict.renderCookieParamsSchemaRL;
const renderCookieParamsSchema1 = () => dictRenderCookieParamsSchemaRL => (
  {renderCookieParamsSchema: v => dictRenderCookieParamsSchemaRL.renderCookieParamsSchemaRL(Type$dProxy.Proxy)}
);
const renderCookieParamsSchemaR1 = dictRenderCookieParamsSchemaRL => () => () => (
  {renderCookieParamsSchemaRL: v => dictRenderCookieParamsSchemaRL.renderCookieParamsSchemaRL(Type$dProxy.Proxy)}
);
const renderCookieParamsSchemaR2 = dictRenderCookieParamsSchemaRL => () => () => (
  {renderCookieParamsSchemaRL: v => dictRenderCookieParamsSchemaRL.renderCookieParamsSchemaRL(Type$dProxy.Proxy)}
);
const renderCookieParamsSchemaR3 = dictRenderCookieParamsSchemaRL => () => () => (
  {renderCookieParamsSchemaRL: v => dictRenderCookieParamsSchemaRL.renderCookieParamsSchemaRL(Type$dProxy.Proxy)}
);
const renderCookieParamsSchemaR4 = dictRenderCookieParamsSchemaRL => () => () => (
  {renderCookieParamsSchemaRL: v => dictRenderCookieParamsSchemaRL.renderCookieParamsSchemaRL(Type$dProxy.Proxy)}
);
const renderCookieParamsSchema = dict => dict.renderCookieParamsSchema;
const groupByPath = /* #__PURE__ */ Data$dFoldable.foldlArray(acc => entry => {
  const pathKey = toOpenAPIPath(entry.path);
  const $0 = entry.method;
  const $1 = stripKeys(["method", "path"])((() => {
    const v = readJSON_(entry.operation);
    if (v.tag === "Just") { return v._1; }
    if (v.tag === "Nothing") { return entry.operation; }
    $runtime.fail();
  })());
  const $2 = Foreign$dObject.mutate($2 => () => {
    $2[$0] = $1;
    return $2;
  })((() => {
    const $2 = Foreign$dObject._lookup(Data$dMaybe.Nothing, Data$dMaybe.Just, pathKey, acc);
    if ($2.tag === "Nothing") { return Foreign$dObject.empty; }
    if ($2.tag === "Just") { return $2._1; }
    $runtime.fail();
  })());
  return Foreign$dObject.mutate($3 => () => {
    $3[pathKey] = $2;
    return $3;
  })(acc);
})(Foreign$dObject.empty);
const getRequiredFields = dict => dict.getRequiredFields;
const renderJSONSchemaRecord = () => dictRenderRecordSchemaRL => (
  {
    renderJSONSchema: v => {
      const required = dictRenderRecordSchemaRL.getRequiredFields(Type$dProxy.Proxy);
      const base = fromFoldable([Data$dTuple.$Tuple("type", "object"), Data$dTuple.$Tuple("properties", dictRenderRecordSchemaRL.renderRecordSchemaRL(Type$dProxy.Proxy))]);
      if (eq1(required)([])) { return base; }
      return Foreign$dObject.mutate($0 => () => {
        $0.required = required;
        return $0;
      })(base);
    }
  }
);
const renderRecordSchemaRLCons = dictIsSymbol => dictRenderJSONSchema => dictRenderRecordSchemaRL => () => () => (
  {
    renderRecordSchemaRL: v => {
      const $0 = dictIsSymbol.reflectSymbol(Type$dProxy.Proxy);
      const $1 = dictRenderJSONSchema.renderJSONSchema(Type$dProxy.Proxy);
      return Foreign$dObject.mutate($2 => () => {
        $2[$0] = $1;
        return $2;
      })(dictRenderRecordSchemaRL.renderRecordSchemaRL(Type$dProxy.Proxy));
    },
    getRequiredFields: v => [dictIsSymbol.reflectSymbol(Type$dProxy.Proxy), ...dictRenderRecordSchemaRL.getRequiredFields(Type$dProxy.Proxy)]
  }
);
const getContentType = dict => dict.getContentType;
const renderVariantResponseSchemaRLCons = dictIsSymbol => dictStatusCodeMap => () => dictRenderResponseHeadersSchema => dictRenderJSONSchema => dictGetContentType => dictRenderVariantResponseSchemaRL => (
  {
    renderVariantResponseSchemaRL: v => {
      const $0 = Data$dShow.showIntImpl(dictStatusCodeMap.statusCodeFor(Type$dProxy.Proxy));
      const $1 = {
        description: "Successful response",
        headers: dictRenderResponseHeadersSchema.renderResponseHeadersSchema(Type$dProxy.Proxy),
        content: (() => {
          const $1 = dictGetContentType.getContentType(Type$dProxy.Proxy);
          const $2 = {schema: dictRenderJSONSchema.renderJSONSchema(Type$dProxy.Proxy)};
          const $3 = {};
          $3[$1] = $2;
          return $3;
        })()
      };
      return Foreign$dObject.mutate($2 => () => {
        $2[$0] = $1;
        return $2;
      })(dictRenderVariantResponseSchemaRL.renderVariantResponseSchemaRL(Type$dProxy.Proxy));
    }
  }
);
const getContentTypeDefault = dictGetContentType => ({getContentType: v => dictGetContentType.getContentType(Type$dProxy.Proxy)});
const getContentTypeDeprecated = dictGetContentType => ({getContentType: v => dictGetContentType.getContentType(Type$dProxy.Proxy)});
const getContentTypeDescription = dictGetContentType => ({getContentType: v => dictGetContentType.getContentType(Type$dProxy.Proxy)});
const getContentTypeEnum = dictGetContentType => ({getContentType: v => dictGetContentType.getContentType(Type$dProxy.Proxy)});
const getContentTypeExample = dictGetContentType => ({getContentType: v => dictGetContentType.getContentType(Type$dProxy.Proxy)});
const getContentTypeFormat = dictGetContentType => ({getContentType: v => dictGetContentType.getContentType(Type$dProxy.Proxy)});
const getContentTypeMaxLength = dictGetContentType => ({getContentType: v => dictGetContentType.getContentType(Type$dProxy.Proxy)});
const getContentTypeMaximum = dictGetContentType => ({getContentType: v => dictGetContentType.getContentType(Type$dProxy.Proxy)});
const getContentTypeMinLength = dictGetContentType => ({getContentType: v => dictGetContentType.getContentType(Type$dProxy.Proxy)});
const getContentTypeMinimum = dictGetContentType => ({getContentType: v => dictGetContentType.getContentType(Type$dProxy.Proxy)});
const getContentTypeNullable = dictGetContentType => ({getContentType: v => dictGetContentType.getContentType(Type$dProxy.Proxy)});
const getContentTypePattern = dictGetContentType => ({getContentType: v => dictGetContentType.getContentType(Type$dProxy.Proxy)});
const getContentTypeSchema = dictGetContentType => ({getContentType: v => dictGetContentType.getContentType(Type$dProxy.Proxy)});
const getContentTypeTitle = dictGetContentType => ({getContentType: v => dictGetContentType.getContentType(Type$dProxy.Proxy)});
const renderResponseSchema1 = dictRenderResponseHeadersSchema => dictRenderJSONSchema => dictGetContentType => (
  {
    renderResponseSchema: headersProxy => bodyProxy => (
      {
        "200": {
          description: "Successful response",
          headers: dictRenderResponseHeadersSchema.renderResponseHeadersSchema(headersProxy),
          content: (() => {
            const $0 = dictGetContentType.getContentType(bodyProxy);
            const $1 = {schema: dictRenderJSONSchema.renderJSONSchema(bodyProxy)};
            const $2 = {};
            $2[$0] = $1;
            return $2;
          })()
        }
      }
    )
  }
);
const detectSecurityRL = dict => dict.detectSecurityRL;
const detectSecurity1 = () => dictDetectSecurityRL => ({detectSecurity: v => dictDetectSecurityRL.detectSecurityRL(Type$dProxy.Proxy)});
const detectSecurityRLCons = dictDetectSecurityRL => dictHeaderValueType => ({detectSecurityRL: v => dictDetectSecurityRL.detectSecurityRL(Type$dProxy.Proxy)});
const detectSecurity = dict => dict.detectSecurity;
const detectCookieSecurityRL = dict => dict.detectCookieSecurityRL;
const detectCookieSecurity1 = () => dictDetectCookieSecurityRL => ({detectCookieSecurity: v => dictDetectCookieSecurityRL.detectCookieSecurityRL(Type$dProxy.Proxy)});
const detectCookieSecurityRLCon4 = dictDetectCookieSecurityRL => dictHeaderValueType => (
  {detectCookieSecurityRL: v => dictDetectCookieSecurityRL.detectCookieSecurityRL(Type$dProxy.Proxy)}
);
const detectCookieSecurity = dict => dict.detectCookieSecurity;
const collectVariantSchemasRL = dict => dict.collectVariantSchemasRL;
const collectSchemasRL = dict => dict.collectSchemasRL;
const collectSchemasRecord = () => dictCollectSchemasRL => ({collectSchemas: v => dictCollectSchemasRL.collectSchemasRL(Type$dProxy.Proxy)});
const collectSchemas = dict => dict.collectSchemas;
const collectSchemasArray = dictCollectSchemas => ({collectSchemas: v => dictCollectSchemas.collectSchemas(Type$dProxy.Proxy)});
const collectSchemasCustomConte = dictCollectSchemas => ({collectSchemas: v => dictCollectSchemas.collectSchemas(Type$dProxy.Proxy)});
const collectSchemasDefault = dictCollectSchemas => ({collectSchemas: v => dictCollectSchemas.collectSchemas(Type$dProxy.Proxy)});
const collectSchemasDeprecated = dictCollectSchemas => ({collectSchemas: v => dictCollectSchemas.collectSchemas(Type$dProxy.Proxy)});
const collectSchemasDescription = dictCollectSchemas => ({collectSchemas: v => dictCollectSchemas.collectSchemas(Type$dProxy.Proxy)});
const collectSchemasEnum = dictCollectSchemas => ({collectSchemas: v => dictCollectSchemas.collectSchemas(Type$dProxy.Proxy)});
const collectSchemasExample = dictCollectSchemas => ({collectSchemas: v => dictCollectSchemas.collectSchemas(Type$dProxy.Proxy)});
const collectSchemasExamples = dictCollectSchemas => ({collectSchemas: v => dictCollectSchemas.collectSchemas(Type$dProxy.Proxy)});
const collectSchemasFormData = dictCollectSchemas => ({collectSchemas: v => dictCollectSchemas.collectSchemas(Type$dProxy.Proxy)});
const collectSchemasFormat = dictCollectSchemas => ({collectSchemas: v => dictCollectSchemas.collectSchemas(Type$dProxy.Proxy)});
const collectSchemasJSON = dictCollectSchemas => ({collectSchemas: v => dictCollectSchemas.collectSchemas(Type$dProxy.Proxy)});
const collectSchemasMaxLength = dictCollectSchemas => ({collectSchemas: v => dictCollectSchemas.collectSchemas(Type$dProxy.Proxy)});
const collectSchemasMaximum = dictCollectSchemas => ({collectSchemas: v => dictCollectSchemas.collectSchemas(Type$dProxy.Proxy)});
const collectSchemasMaybe = dictCollectSchemas => ({collectSchemas: v => dictCollectSchemas.collectSchemas(Type$dProxy.Proxy)});
const collectSchemasMinLength = dictCollectSchemas => ({collectSchemas: v => dictCollectSchemas.collectSchemas(Type$dProxy.Proxy)});
const collectSchemasMinimum = dictCollectSchemas => ({collectSchemas: v => dictCollectSchemas.collectSchemas(Type$dProxy.Proxy)});
const collectSchemasMultipartFo = dictCollectSchemas => ({collectSchemas: v => dictCollectSchemas.collectSchemas(Type$dProxy.Proxy)});
const collectSchemasNullable = dictCollectSchemas => ({collectSchemas: v => dictCollectSchemas.collectSchemas(Type$dProxy.Proxy)});
const collectSchemasPattern = dictCollectSchemas => ({collectSchemas: v => dictCollectSchemas.collectSchemas(Type$dProxy.Proxy)});
const collectSchemasRLCons = dictIsSymbol => dictCollectSchemas => dictCollectSchemasRL => (
  {collectSchemasRL: v => Foreign$dObject.union(dictCollectSchemas.collectSchemas(Type$dProxy.Proxy))(dictCollectSchemasRL.collectSchemasRL(Type$dProxy.Proxy))}
);
const collectSchemasSchema = dictIsSymbol => dictRenderJSONSchema => dictCollectSchemas => (
  {
    collectSchemas: v => {
      const $0 = dictIsSymbol.reflectSymbol(Type$dProxy.Proxy);
      const $1 = dictRenderJSONSchema.renderJSONSchema(Type$dProxy.Proxy);
      return Foreign$dObject.mutate($2 => () => {
        $2[$0] = $1;
        return $2;
      })(dictCollectSchemas.collectSchemas(Type$dProxy.Proxy));
    }
  }
);
const collectSchemasTitle = dictCollectSchemas => ({collectSchemas: v => dictCollectSchemas.collectSchemas(Type$dProxy.Proxy)});
const collectSchemasXML = dictCollectSchemas => ({collectSchemas: v => dictCollectSchemas.collectSchemas(Type$dProxy.Proxy)});
const collectVariantSchemasRLCo = () => dictCollectSchemas => dictCollectVariantSchemasRL => (
  {
    collectVariantSchemasRL: v => Foreign$dObject.union(dictCollectSchemas.collectSchemas(Type$dProxy.Proxy))(dictCollectVariantSchemasRL.collectVariantSchemasRL(Type$dProxy.Proxy))
  }
);
const collectRouteSchemasRL = dict => dict.collectRouteSchemasRL;
const collectRouteSchemasRecord = () => dictCollectRouteSchemasRL => ({collectRouteSchemas: v => dictCollectRouteSchemasRL.collectRouteSchemasRL(Type$dProxy.Proxy)});
const collectRouteSchemas = dict => dict.collectRouteSchemas;
const collectRouteSchemasRLCons = dictCollectRouteSchemas => dictCollectRouteSchemasRL => (
  {
    collectRouteSchemasRL: v => Foreign$dObject.union(dictCollectRouteSchemas.collectRouteSchemas(Type$dProxy.Proxy))(dictCollectRouteSchemasRL.collectRouteSchemasRL(Type$dProxy.Proxy))
  }
);
const collectOperations = dict => dict.collectOperations;
const collectNamedOperationsRL = dict => dict.collectNamedOperationsRL;
const collectNamedOperationsRLC = dictIsSymbol => dictCollectOperations => dictCollectNamedOperationsRL => (
  {
    collectNamedOperationsRL: v => {
      const name = dictIsSymbol.reflectSymbol(Type$dProxy.Proxy);
      return [
        ...Data$dFunctor.arrayMap(entry => ({...entry, operation: setOperationId(name)(entry.operation)}))(dictCollectOperations.collectOperations(Type$dProxy.Proxy)),
        ...dictCollectNamedOperationsRL.collectNamedOperationsRL(Type$dProxy.Proxy)
      ];
    }
  }
);
const collectOperationsRecord = () => dictCollectNamedOperationsRL => ({collectOperations: v => dictCollectNamedOperationsRL.collectNamedOperationsRL(Type$dProxy.Proxy)});
const buildSecuritySchemes = ops => fromFoldable(Data$dArray.mapMaybe(x => x)(Data$dFunctor.arrayMap(key => {
  if (key === "bearerAuth") { return Data$dMaybe.$Maybe("Just", Data$dTuple.$Tuple(key, {type: "http", scheme: "bearer", bearerFormat: "JWT"})); }
  if (key === "basicAuth") { return Data$dMaybe.$Maybe("Just", Data$dTuple.$Tuple(key, {type: "http", scheme: "basic"})); }
  if (key === "digestAuth") { return Data$dMaybe.$Maybe("Just", Data$dTuple.$Tuple(key, {type: "http", scheme: "digest"})); }
  if (
    Data$dString$dCodePoints.take(Data$dString$dCodePoints.toCodePointArray(key).length - 6 | 0)(key) !== "" && Data$dString$dCodeUnits.drop(Data$dString$dCodeUnits.length(Data$dString$dCodePoints.take(Data$dString$dCodePoints.toCodePointArray(key).length - 6 | 0)(key)))(key) === "Cookie"
  ) {
    return Data$dMaybe.$Maybe(
      "Just",
      Data$dTuple.$Tuple(key, {type: "apiKey", in: "cookie", name: Data$dString$dCodePoints.take(Data$dString$dCodePoints.toCodePointArray(key).length - 6 | 0)(key)})
    );
  }
  if (
    Data$dString$dCodePoints.take(Data$dString$dCodePoints.toCodePointArray(key).length - 6 | 0)(key) !== "" && Data$dString$dCodeUnits.drop(Data$dString$dCodeUnits.length(Data$dString$dCodePoints.take(Data$dString$dCodePoints.toCodePointArray(key).length - 6 | 0)(key)))(key) === "ApiKey"
  ) {
    return Data$dMaybe.$Maybe(
      "Just",
      Data$dTuple.$Tuple(key, {type: "apiKey", in: "header", name: Data$dString$dCodePoints.take(Data$dString$dCodePoints.toCodePointArray(key).length - 6 | 0)(key)})
    );
  }
  return Data$dMaybe.Nothing;
})(Data$dArray.nubBy(Data$dOrd.ordString.compare)(Data$dFoldable.foldlArray(acc => entry => {
  const securityField = Foreign$dObject._lookup(
    Data$dMaybe.Nothing,
    Data$dMaybe.Just,
    "security",
    (() => {
      const v = readJSON_(entry.operation);
      if (v.tag === "Just") { return v._1; }
      if (v.tag === "Nothing") { return entry.operation; }
      $runtime.fail();
    })()
  );
  if (securityField.tag === "Nothing") { return acc; }
  if (securityField.tag === "Just") { return [...acc, ...Control$dBind.arrayBind(securityField._1)(Foreign$dObject.keys)]; }
  $runtime.fail();
})([])(ops)))));
const buildSchema = s => {
  const $0 = (s.nullable
    ? (obj => Foreign$dObject.mutate($0 => () => {
        $0.nullable = true;
        return $0;
      })(obj))
    : identity)((() => {
    const $0 = fromFoldable([Data$dTuple.$Tuple("type", s.type)]);
    const $1 = (() => {
      const $1 = (() => {
        const $1 = (() => {
          const $1 = (() => {
            const $1 = (() => {
              const $1 = (() => {
                const $1 = (() => {
                  if (s.format.tag === "Nothing") { return $0; }
                  if (s.format.tag === "Just") {
                    const $1 = s.format._1;
                    return Foreign$dObject.mutate($2 => () => {
                      $2.format = $1;
                      return $2;
                    })($0);
                  }
                  $runtime.fail();
                })();
                if (s.example.tag === "Nothing") { return $1; }
                if (s.example.tag === "Just") {
                  const $2 = s.example._1;
                  return Foreign$dObject.mutate($3 => () => {
                    $3.example = $2;
                    return $3;
                  })($1);
                }
                $runtime.fail();
              })();
              if (s.minimum.tag === "Nothing") { return $1; }
              if (s.minimum.tag === "Just") {
                const $2 = s.minimum._1;
                return Foreign$dObject.mutate($3 => () => {
                  $3.minimum = $2;
                  return $3;
                })($1);
              }
              $runtime.fail();
            })();
            if (s.maximum.tag === "Nothing") { return $1; }
            if (s.maximum.tag === "Just") {
              const $2 = s.maximum._1;
              return Foreign$dObject.mutate($3 => () => {
                $3.maximum = $2;
                return $3;
              })($1);
            }
            $runtime.fail();
          })();
          if (s.pattern.tag === "Nothing") { return $1; }
          if (s.pattern.tag === "Just") {
            const $2 = s.pattern._1;
            return Foreign$dObject.mutate($3 => () => {
              $3.pattern = $2;
              return $3;
            })($1);
          }
          $runtime.fail();
        })();
        if (s.minLength.tag === "Nothing") { return $1; }
        if (s.minLength.tag === "Just") {
          const $2 = s.minLength._1;
          return Foreign$dObject.mutate($3 => () => {
            $3.minLength = $2;
            return $3;
          })($1);
        }
        $runtime.fail();
      })();
      if (s.maxLength.tag === "Nothing") { return $1; }
      if (s.maxLength.tag === "Just") {
        const $2 = s.maxLength._1;
        return Foreign$dObject.mutate($3 => () => {
          $3.maxLength = $2;
          return $3;
        })($1);
      }
      $runtime.fail();
    })();
    if (s.title.tag === "Nothing") { return $1; }
    if (s.title.tag === "Just") {
      const $2 = s.title._1;
      return Foreign$dObject.mutate($3 => () => {
        $3.title = $2;
        return $3;
      })($1);
    }
    $runtime.fail();
  })());
  const $1 = (() => {
    if (s.default.tag === "Nothing") { return $0; }
    if (s.default.tag === "Just") {
      const $1 = s.default._1;
      return Foreign$dObject.mutate($2 => () => {
        $2.default = $1;
        return $2;
      })($0);
    }
    $runtime.fail();
  })();
  if (s.enum.tag === "Nothing") { return $1; }
  if (s.enum.tag === "Just") {
    const $2 = s.enum._1;
    return Foreign$dObject.mutate($3 => () => {
      $3.enum = $2;
      return $3;
    })($1);
  }
  $runtime.fail();
};
const renderJSONSchemaUnit = {
  renderJSONSchema: v => buildSchema({
    type: "null",
    format: Data$dMaybe.Nothing,
    examples: Data$dMaybe.Nothing,
    example: Data$dMaybe.Nothing,
    minimum: Data$dMaybe.Nothing,
    maximum: Data$dMaybe.Nothing,
    pattern: Data$dMaybe.Nothing,
    minLength: Data$dMaybe.Nothing,
    maxLength: Data$dMaybe.Nothing,
    title: Data$dMaybe.Nothing,
    nullable: false,
    default: Data$dMaybe.Nothing,
    enum: Data$dMaybe.Nothing
  })
};
const renderJSONSchemaBoolean = {
  renderJSONSchema: v => buildSchema({
    type: "boolean",
    format: Data$dMaybe.Nothing,
    examples: Data$dMaybe.Nothing,
    example: Data$dMaybe.Nothing,
    minimum: Data$dMaybe.Nothing,
    maximum: Data$dMaybe.Nothing,
    pattern: Data$dMaybe.Nothing,
    minLength: Data$dMaybe.Nothing,
    maxLength: Data$dMaybe.Nothing,
    title: Data$dMaybe.Nothing,
    nullable: false,
    default: Data$dMaybe.Nothing,
    enum: Data$dMaybe.Nothing
  })
};
const renderJSONSchemaInt = {
  renderJSONSchema: v => buildSchema({
    type: "integer",
    format: Data$dMaybe.Nothing,
    examples: Data$dMaybe.Nothing,
    example: Data$dMaybe.Nothing,
    minimum: Data$dMaybe.Nothing,
    maximum: Data$dMaybe.Nothing,
    pattern: Data$dMaybe.Nothing,
    minLength: Data$dMaybe.Nothing,
    maxLength: Data$dMaybe.Nothing,
    title: Data$dMaybe.Nothing,
    nullable: false,
    default: Data$dMaybe.Nothing,
    enum: Data$dMaybe.Nothing
  })
};
const renderJSONSchemaNumber = {
  renderJSONSchema: v => buildSchema({
    type: "number",
    format: Data$dMaybe.Nothing,
    examples: Data$dMaybe.Nothing,
    example: Data$dMaybe.Nothing,
    minimum: Data$dMaybe.Nothing,
    maximum: Data$dMaybe.Nothing,
    pattern: Data$dMaybe.Nothing,
    minLength: Data$dMaybe.Nothing,
    maxLength: Data$dMaybe.Nothing,
    title: Data$dMaybe.Nothing,
    nullable: false,
    default: Data$dMaybe.Nothing,
    enum: Data$dMaybe.Nothing
  })
};
const renderJSONSchemaString = {
  renderJSONSchema: v => buildSchema({
    type: "string",
    format: Data$dMaybe.Nothing,
    examples: Data$dMaybe.Nothing,
    example: Data$dMaybe.Nothing,
    minimum: Data$dMaybe.Nothing,
    maximum: Data$dMaybe.Nothing,
    pattern: Data$dMaybe.Nothing,
    minLength: Data$dMaybe.Nothing,
    maxLength: Data$dMaybe.Nothing,
    title: Data$dMaybe.Nothing,
    nullable: false,
    default: Data$dMaybe.Nothing,
    enum: Data$dMaybe.Nothing
  })
};
const buildResponseHeader = v => (
  {
    schema: (() => {
      const $0 = fromFoldable([Data$dTuple.$Tuple("type", v.type)]);
      const $1 = (() => {
        if (v.format.tag === "Nothing") { return $0; }
        if (v.format.tag === "Just") {
          const $1 = v.format._1;
          return Foreign$dObject.mutate($2 => () => {
            $2.format = $1;
            return $2;
          })($0);
        }
        $runtime.fail();
      })();
      if (v.enum.tag === "Nothing") { return $1; }
      if (v.enum.tag === "Just") {
        const $2 = v.enum._1;
        return Foreign$dObject.mutate($3 => () => {
          $3.enum = $2;
          return $3;
        })($1);
      }
      $runtime.fail();
    })(),
    description: v.description,
    example: v.example,
    deprecated: (v.deprecated.tag === "Nothing" ? false : v.deprecated.tag === "Just" && v.deprecated._1) ? Data$dMaybe.$Maybe("Just", true) : Data$dMaybe.Nothing
  }
);
const renderResponseHeadersSche2 = dictIsSymbol => dictHeaderValueType => dictHasDescription => dictHasExample => dictHasDeprecated => dictHasFormat => dictHasEnum => dictRenderResponseHeadersSchemaRL => () => () => (
  {
    renderResponseHeadersSchemaRL: v => {
      const $0 = dictIsSymbol.reflectSymbol(Type$dProxy.Proxy);
      const $1 = buildResponseHeader({
        type: dictHeaderValueType.headerValueType(Type$dProxy.Proxy),
        description: dictHasDescription.description(Type$dProxy.Proxy),
        example: dictHasExample.example(Type$dProxy.Proxy),
        deprecated: dictHasDeprecated.deprecated(Type$dProxy.Proxy) ? Data$dMaybe.$Maybe("Just", true) : Data$dMaybe.Nothing,
        format: dictHasFormat.format(Type$dProxy.Proxy),
        enum: dictHasEnum.enum(Type$dProxy.Proxy)
      });
      return Foreign$dObject.mutate($2 => () => {
        $2[$0] = $1;
        return $2;
      })(dictRenderResponseHeadersSchemaRL.renderResponseHeadersSchemaRL(Type$dProxy.Proxy));
    }
  }
);
const buildParameter = v => {
  const $0 = fromFoldable([Data$dTuple.$Tuple("name", v.name), Data$dTuple.$Tuple("in", v.in), Data$dTuple.$Tuple("required", v.required), Data$dTuple.$Tuple("schema", v.schema)]);
  const $1 = (() => {
    const $1 = (() => {
      if (v.description.tag === "Nothing") { return $0; }
      if (v.description.tag === "Just") {
        const $1 = v.description._1;
        return Foreign$dObject.mutate($2 => () => {
          $2.description = $1;
          return $2;
        })($0);
      }
      $runtime.fail();
    })();
    if (v.deprecated.tag === "Nothing") { return $1; }
    if (v.deprecated.tag === "Just") {
      const $2 = v.deprecated._1;
      return Foreign$dObject.mutate($3 => () => {
        $3.deprecated = $2;
        return $3;
      })($1);
    }
    $runtime.fail();
  })();
  if (v.examples.tag === "Nothing") { return $1; }
  if (v.examples.tag === "Just") {
    const $2 = v.examples._1;
    return Foreign$dObject.mutate($3 => () => {
      $3.examples = $2;
      return $3;
    })($1);
  }
  $runtime.fail();
};
const renderCookieParamsSchemaR5 = dictIsSymbol => dictHeaderValueType => dictHasDescription => dictHasExample => dictHasFormat => dictHasMinimum => dictHasMaximum => dictHasPattern => dictHasMinLength => dictHasMaxLength => dictHasTitle => dictHasNullable => dictHasDefault => dictHasDeprecated => dictHasEnum => dictHasExamples => dictRenderCookieParamsSchemaRL => () => () => (
  {
    renderCookieParamsSchemaRL: v => [
      buildParameter({
        name: dictIsSymbol.reflectSymbol(Type$dProxy.Proxy),
        in: "cookie",
        required: false,
        schema: buildSchema({
          type: dictHeaderValueType.headerValueType(Type$dProxy.Proxy),
          format: dictHasFormat.format(Type$dProxy.Proxy),
          example: dictHasExample.example(Type$dProxy.Proxy),
          examples: Data$dMaybe.Nothing,
          minimum: dictHasMinimum.minimum(Type$dProxy.Proxy),
          maximum: dictHasMaximum.maximum(Type$dProxy.Proxy),
          pattern: dictHasPattern.pattern(Type$dProxy.Proxy),
          minLength: dictHasMinLength.minLength(Type$dProxy.Proxy),
          maxLength: dictHasMaxLength.maxLength(Type$dProxy.Proxy),
          title: dictHasTitle.title(Type$dProxy.Proxy),
          nullable: dictHasNullable.nullable(Type$dProxy.Proxy),
          default: dictHasDefault.default(Type$dProxy.Proxy),
          enum: dictHasEnum.enum(Type$dProxy.Proxy)
        }),
        description: dictHasDescription.description(Type$dProxy.Proxy),
        deprecated: dictHasDeprecated.deprecated(Type$dProxy.Proxy) ? Data$dMaybe.$Maybe("Just", true) : Data$dMaybe.Nothing,
        examples: dictHasExamples.examples(Type$dProxy.Proxy)
      }),
      ...dictRenderCookieParamsSchemaRL.renderCookieParamsSchemaRL(Type$dProxy.Proxy)
    ]
  }
);
const renderHeadersSchemaRLCons16 = dictIsSymbol => dictHeaderValueType => dictHasDescription => dictHasExample => dictHasFormat => dictHasMinimum => dictHasMaximum => dictHasPattern => dictHasMinLength => dictHasMaxLength => dictHasTitle => dictHasNullable => dictHasDefault => dictHasDeprecated => dictHasEnum => dictHasExamples => dictRenderHeadersSchemaRL => () => () => (
  {
    renderHeadersSchemaRL: v => [
      buildParameter({
        name: dictIsSymbol.reflectSymbol(Type$dProxy.Proxy),
        in: "header",
        required: true,
        schema: buildSchema({
          type: dictHeaderValueType.headerValueType(Type$dProxy.Proxy),
          format: dictHasFormat.format(Type$dProxy.Proxy),
          example: dictHasExample.example(Type$dProxy.Proxy),
          examples: Data$dMaybe.Nothing,
          minimum: dictHasMinimum.minimum(Type$dProxy.Proxy),
          maximum: dictHasMaximum.maximum(Type$dProxy.Proxy),
          pattern: dictHasPattern.pattern(Type$dProxy.Proxy),
          minLength: dictHasMinLength.minLength(Type$dProxy.Proxy),
          maxLength: dictHasMaxLength.maxLength(Type$dProxy.Proxy),
          title: dictHasTitle.title(Type$dProxy.Proxy),
          nullable: dictHasNullable.nullable(Type$dProxy.Proxy),
          default: dictHasDefault.default(Type$dProxy.Proxy),
          enum: dictHasEnum.enum(Type$dProxy.Proxy)
        }),
        description: dictHasDescription.description(Type$dProxy.Proxy),
        deprecated: dictHasDeprecated.deprecated(Type$dProxy.Proxy) ? Data$dMaybe.$Maybe("Just", true) : Data$dMaybe.Nothing,
        examples: dictHasExamples.examples(Type$dProxy.Proxy)
      }),
      ...dictRenderHeadersSchemaRL.renderHeadersSchemaRL(Type$dProxy.Proxy)
    ]
  }
);
const renderPathParamsSchemaRLC = dictIsSymbol => dictHeaderValueType => dictHasDescription => dictHasExample => dictHasFormat => dictHasMinimum => dictHasMaximum => dictHasPattern => dictHasMinLength => dictHasMaxLength => dictHasTitle => dictHasNullable => dictHasDefault => dictHasDeprecated => dictHasEnum => dictHasExamples => dictRenderPathParamsSchemaRL => () => () => (
  {
    renderPathParamsSchemaRL: v => [
      buildParameter({
        name: dictIsSymbol.reflectSymbol(Type$dProxy.Proxy),
        in: "path",
        required: true,
        schema: buildSchema({
          type: dictHeaderValueType.headerValueType(Type$dProxy.Proxy),
          format: dictHasFormat.format(Type$dProxy.Proxy),
          example: dictHasExample.example(Type$dProxy.Proxy),
          examples: Data$dMaybe.Nothing,
          minimum: dictHasMinimum.minimum(Type$dProxy.Proxy),
          maximum: dictHasMaximum.maximum(Type$dProxy.Proxy),
          pattern: dictHasPattern.pattern(Type$dProxy.Proxy),
          minLength: dictHasMinLength.minLength(Type$dProxy.Proxy),
          maxLength: dictHasMaxLength.maxLength(Type$dProxy.Proxy),
          title: dictHasTitle.title(Type$dProxy.Proxy),
          nullable: dictHasNullable.nullable(Type$dProxy.Proxy),
          default: dictHasDefault.default(Type$dProxy.Proxy),
          enum: dictHasEnum.enum(Type$dProxy.Proxy)
        }),
        description: dictHasDescription.description(Type$dProxy.Proxy),
        deprecated: dictHasDeprecated.deprecated(Type$dProxy.Proxy) ? Data$dMaybe.$Maybe("Just", true) : Data$dMaybe.Nothing,
        examples: dictHasExamples.examples(Type$dProxy.Proxy)
      }),
      ...dictRenderPathParamsSchemaRL.renderPathParamsSchemaRL(Type$dProxy.Proxy)
    ]
  }
);
const renderQueryParamsSchemaRL2 = dictIsSymbol => dictHeaderValueType => dictHasDescription => dictHasExample => dictHasFormat => dictHasMinimum => dictHasMaximum => dictHasPattern => dictHasMinLength => dictHasMaxLength => dictHasTitle => dictHasNullable => dictHasDefault => dictHasDeprecated => dictHasEnum => dictHasExamples => dictRenderQueryParamsSchemaRL => () => () => (
  {
    renderQueryParamsSchemaRL: v => [
      buildParameter({
        name: dictIsSymbol.reflectSymbol(Type$dProxy.Proxy),
        in: "query",
        required: false,
        schema: buildSchema({
          type: dictHeaderValueType.headerValueType(Type$dProxy.Proxy),
          format: dictHasFormat.format(Type$dProxy.Proxy),
          example: dictHasExample.example(Type$dProxy.Proxy),
          examples: Data$dMaybe.Nothing,
          minimum: dictHasMinimum.minimum(Type$dProxy.Proxy),
          maximum: dictHasMaximum.maximum(Type$dProxy.Proxy),
          pattern: dictHasPattern.pattern(Type$dProxy.Proxy),
          minLength: dictHasMinLength.minLength(Type$dProxy.Proxy),
          maxLength: dictHasMaxLength.maxLength(Type$dProxy.Proxy),
          title: dictHasTitle.title(Type$dProxy.Proxy),
          nullable: dictHasNullable.nullable(Type$dProxy.Proxy),
          default: dictHasDefault.default(Type$dProxy.Proxy),
          enum: dictHasEnum.enum(Type$dProxy.Proxy)
        }),
        description: dictHasDescription.description(Type$dProxy.Proxy),
        deprecated: dictHasDeprecated.deprecated(Type$dProxy.Proxy) ? Data$dMaybe.$Maybe("Just", true) : Data$dMaybe.Nothing,
        examples: dictHasExamples.examples(Type$dProxy.Proxy)
      }),
      ...dictRenderQueryParamsSchemaRL.renderQueryParamsSchemaRL(Type$dProxy.Proxy)
    ]
  }
);
const buildOpenAPISpec$p = dictCollectOperations => dictCollectRouteSchemas => () => info => config => {
  const schemas = dictCollectRouteSchemas.collectRouteSchemas(Type$dProxy.Proxy);
  const ops = dictCollectOperations.collectOperations(Type$dProxy.Proxy);
  const securitySchemes = buildSecuritySchemes(ops);
  const infoBase = fromFoldable([Data$dTuple.$Tuple("title", info.title), Data$dTuple.$Tuple("version", info.version)]);
  const $0 = Foreign.typeOf(info.description) === "undefined" ? Data$dMaybe.Nothing : Data$dMaybe.$Maybe("Just", info.description);
  const infoWithDescription = (() => {
    if ($0.tag === "Nothing") { return infoBase; }
    if ($0.tag === "Just") {
      const $1 = $0._1;
      return Foreign$dObject.mutate($2 => () => {
        $2.description = $1;
        return $2;
      })(infoBase);
    }
    $runtime.fail();
  })();
  const $1 = Foreign.typeOf(info.contact) === "undefined" ? Data$dMaybe.Nothing : Data$dMaybe.$Maybe("Just", info.contact);
  const infoWithContact = (() => {
    if ($1.tag === "Nothing") { return infoWithDescription; }
    if ($1.tag === "Just") {
      const $2 = writeImpl1($1._1);
      return Foreign$dObject.mutate($3 => () => {
        $3.contact = $2;
        return $3;
      })(infoWithDescription);
    }
    $runtime.fail();
  })();
  const baseSpec = fromFoldable([
    Data$dTuple.$Tuple("openapi", "3.0.0"),
    Data$dTuple.$Tuple(
      "info",
      (() => {
        if (Foreign.typeOf(info.license) === "undefined") { return infoWithContact; }
        const $2 = writeForeignFieldsCons1.writeImplFields(Type$dProxy.Proxy)(info.license)({});
        return Foreign$dObject.mutate($3 => () => {
          $3.license = $2;
          return $3;
        })(infoWithContact);
      })()
    ),
    Data$dTuple.$Tuple("paths", groupByPath(ops))
  ]);
  const withComponents = (() => {
    if (Foreign$dObject.isEmpty(schemas) && Foreign$dObject.isEmpty(securitySchemes)) { return baseSpec; }
    const $2 = fromFoldable([
      ...Foreign$dObject.isEmpty(schemas) ? [] : [Data$dTuple.$Tuple("schemas", schemas)],
      ...Foreign$dObject.isEmpty(securitySchemes) ? [] : [Data$dTuple.$Tuple("securitySchemes", securitySchemes)]
    ]);
    return Foreign$dObject.mutate($3 => () => {
      $3.components = $2;
      return $3;
    })(baseSpec);
  })();
  if (Foreign.isUndefined(config.servers)) { return withComponents; }
  const $2 = writeImpl3(config.servers);
  return Foreign$dObject.mutate($3 => () => {
    $3.servers = $2;
    return $3;
  })(withComponents);
};
const buildOpenAPISpec = dictCollectOperations => dictCollectRouteSchemas => () => () => given => buildOpenAPISpec$p(dictCollectOperations)(dictCollectRouteSchemas)()(given)({
  servers: Data$dUndefined$dNoProblem.undefined
});
export {
  buildOpenAPISpec,
  buildOpenAPISpec$p,
  buildParameter,
  buildResponseHeader,
  buildSchema,
  buildSecuritySchemes,
  collectNamedOperationsRL,
  collectNamedOperationsRLC,
  collectNamedOperationsRLN,
  collectOperations,
  collectOperationsRecord,
  collectRouteSchemaNameRLC,
  collectRouteSchemaNameRLN,
  collectRouteSchemaNamesRe,
  collectRouteSchemas,
  collectRouteSchemasRL,
  collectRouteSchemasRLCons,
  collectRouteSchemasRLNil,
  collectRouteSchemasRecord,
  collectSchemaNamesArray,
  collectSchemaNamesBoolean,
  collectSchemaNamesCustomC,
  collectSchemaNamesDefault,
  collectSchemaNamesDepreca,
  collectSchemaNamesDescrip,
  collectSchemaNamesEnum,
  collectSchemaNamesExample,
  collectSchemaNamesExample1,
  collectSchemaNamesFormDat,
  collectSchemaNamesFormat,
  collectSchemaNamesIntRow,
  collectSchemaNamesJSON,
  collectSchemaNamesMaxLeng,
  collectSchemaNamesMaximum,
  collectSchemaNamesMaybe,
  collectSchemaNamesMinLeng,
  collectSchemaNamesMinimum,
  collectSchemaNamesMultipa,
  collectSchemaNamesNoBodyR,
  collectSchemaNamesNullabl,
  collectSchemaNamesNumberR,
  collectSchemaNamesPattern,
  collectSchemaNamesPlainTe,
  collectSchemaNamesRLCons,
  collectSchemaNamesRLNilRo,
  collectSchemaNamesRecord,
  collectSchemaNamesSchema,
  collectSchemaNamesStringR,
  collectSchemaNamesTitle,
  collectSchemaNamesUnitRow,
  collectSchemaNamesXML,
  collectSchemas,
  collectSchemasArray,
  collectSchemasBoolean,
  collectSchemasCustomConte,
  collectSchemasDefault,
  collectSchemasDeprecated,
  collectSchemasDescription,
  collectSchemasEnum,
  collectSchemasExample,
  collectSchemasExamples,
  collectSchemasFormData,
  collectSchemasFormat,
  collectSchemasInt,
  collectSchemasJSON,
  collectSchemasMaxLength,
  collectSchemasMaximum,
  collectSchemasMaybe,
  collectSchemasMinLength,
  collectSchemasMinimum,
  collectSchemasMultipartFo,
  collectSchemasNoBody,
  collectSchemasNullable,
  collectSchemasNumber,
  collectSchemasPattern,
  collectSchemasPlainText,
  collectSchemasRL,
  collectSchemasRLCons,
  collectSchemasRLNil,
  collectSchemasRecord,
  collectSchemasSchema,
  collectSchemasString,
  collectSchemasTitle,
  collectSchemasUnit,
  collectSchemasXML,
  collectVariantSchemaNames,
  collectVariantSchemaNames1,
  collectVariantSchemasRL,
  collectVariantSchemasRLCo,
  collectVariantSchemasRLNi,
  detectCookieSecurity,
  detectCookieSecurity1,
  detectCookieSecurityRL,
  detectCookieSecurityRLCon,
  detectCookieSecurityRLCon1,
  detectCookieSecurityRLCon2,
  detectCookieSecurityRLCon3,
  detectCookieSecurityRLCon4,
  detectCookieSecurityRLNil,
  detectSecurity,
  detectSecurity1,
  detectSecurityRL,
  detectSecurityRLCons,
  detectSecurityRLConsApiKe,
  detectSecurityRLConsBasic,
  detectSecurityRLConsBeare,
  detectSecurityRLConsDepre,
  detectSecurityRLConsDepre1,
  detectSecurityRLConsDepre2,
  detectSecurityRLConsDepre3,
  detectSecurityRLConsDescr,
  detectSecurityRLConsDescr1,
  detectSecurityRLConsDescr2,
  detectSecurityRLConsDescr3,
  detectSecurityRLConsDiges,
  detectSecurityRLConsExamp,
  detectSecurityRLConsExamp1,
  detectSecurityRLConsExamp2,
  detectSecurityRLConsExamp3,
  detectSecurityRLNil,
  eq1,
  fromFoldable,
  getContentType,
  getContentTypeArray,
  getContentTypeBoolean,
  getContentTypeCustomConte,
  getContentTypeDefault,
  getContentTypeDeprecated,
  getContentTypeDescription,
  getContentTypeEnum,
  getContentTypeExample,
  getContentTypeFormData,
  getContentTypeFormat,
  getContentTypeInt,
  getContentTypeJSON,
  getContentTypeMaxLength,
  getContentTypeMaximum,
  getContentTypeMaybe,
  getContentTypeMinLength,
  getContentTypeMinimum,
  getContentTypeMultipartFo,
  getContentTypeNoBody,
  getContentTypeNullable,
  getContentTypeNumber,
  getContentTypePattern,
  getContentTypePlainText,
  getContentTypeRecord,
  getContentTypeSchema,
  getContentTypeString,
  getContentTypeTitle,
  getContentTypeUnit,
  getContentTypeXML,
  getRequiredFields,
  groupByPath,
  identity,
  readJSON_,
  renderCookieParamsSchema,
  renderCookieParamsSchema1,
  renderCookieParamsSchemaR,
  renderCookieParamsSchemaR1,
  renderCookieParamsSchemaR2,
  renderCookieParamsSchemaR3,
  renderCookieParamsSchemaR4,
  renderCookieParamsSchemaR5,
  renderCookieParamsSchemaRL,
  renderHeadersSchema,
  renderHeadersSchema1,
  renderHeadersSchemaRL,
  renderHeadersSchemaRLCons,
  renderHeadersSchemaRLCons1,
  renderHeadersSchemaRLCons10,
  renderHeadersSchemaRLCons11,
  renderHeadersSchemaRLCons12,
  renderHeadersSchemaRLCons13,
  renderHeadersSchemaRLCons14,
  renderHeadersSchemaRLCons15,
  renderHeadersSchemaRLCons16,
  renderHeadersSchemaRLCons2,
  renderHeadersSchemaRLCons3,
  renderHeadersSchemaRLCons4,
  renderHeadersSchemaRLCons5,
  renderHeadersSchemaRLCons6,
  renderHeadersSchemaRLCons7,
  renderHeadersSchemaRLCons8,
  renderHeadersSchemaRLCons9,
  renderHeadersSchemaRLNilR,
  renderJSONSchema,
  renderJSONSchemaArray,
  renderJSONSchemaBoolean,
  renderJSONSchemaCustomCon,
  renderJSONSchemaDeprecate,
  renderJSONSchemaDescripti,
  renderJSONSchemaEnum,
  renderJSONSchemaExample,
  renderJSONSchemaExamples,
  renderJSONSchemaFormData,
  renderJSONSchemaFormat,
  renderJSONSchemaInt,
  renderJSONSchemaJSON,
  renderJSONSchemaMaybe,
  renderJSONSchemaMultipart,
  renderJSONSchemaNoBody,
  renderJSONSchemaNullable,
  renderJSONSchemaNumber,
  renderJSONSchemaPlainText,
  renderJSONSchemaRecord,
  renderJSONSchemaSchema,
  renderJSONSchemaString,
  renderJSONSchemaUnit,
  renderJSONSchemaXML,
  renderPathParamsSchema,
  renderPathParamsSchema1,
  renderPathParamsSchemaRL,
  renderPathParamsSchemaRLC,
  renderPathParamsSchemaRLN,
  renderQueryParamsSchema,
  renderQueryParamsSchema1,
  renderQueryParamsSchemaRL,
  renderQueryParamsSchemaRL1,
  renderQueryParamsSchemaRL2,
  renderRecordSchemaRL,
  renderRecordSchemaRLCons,
  renderRecordSchemaRLNilRo,
  renderRequestBodySchema,
  renderRequestBodySchemaCu,
  renderRequestBodySchemaFo,
  renderRequestBodySchemaJS,
  renderRequestBodySchemaMu,
  renderRequestBodySchemaNo,
  renderRequestBodySchemaPl,
  renderRequestBodySchemaXM,
  renderResponseHeadersSche,
  renderResponseHeadersSche1,
  renderResponseHeadersSche2,
  renderResponseHeadersSchema,
  renderResponseHeadersSchemaRL,
  renderResponseSchema,
  renderResponseSchema1,
  renderVariantResponseSche,
  renderVariantResponseSchema,
  renderVariantResponseSchemaRL,
  renderVariantResponseSchemaRLCons,
  renderVariantResponseSchemaRLNil,
  setOperationId,
  stripKeys,
  toOpenAPI,
  toOpenAPIImpl,
  toOpenAPIPath,
  validateNoDuplicatesRLCon,
  validateNoDuplicatesRLNil,
  validateSchemaNames,
  writeForeignFieldsCons,
  writeForeignFieldsCons1,
  writeForeignOpenAPISpec,
  writeImpl1,
  writeImpl3
};
