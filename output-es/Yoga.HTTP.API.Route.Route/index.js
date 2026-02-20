import * as $runtime from "../runtime.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Foreign$dObject from "../Foreign.Object/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
import * as Yoga$dJSON from "../Yoga.JSON/index.js";
const $Route = () => ({tag: "Route"});
const writeForeignFieldsCons = /* #__PURE__ */ Yoga$dJSON.writeForeignFieldsCons({reflectSymbol: () => "deprecated"})({
  writeImpl: v2 => {
    if (v2.tag === "Nothing") { return Yoga$dJSON._undefined; }
    if (v2.tag === "Just") { return v2._1; }
    $runtime.fail();
  }
});
const writeForeignMaybe = {
  writeImpl: v2 => {
    if (v2.tag === "Nothing") { return Yoga$dJSON._undefined; }
    if (v2.tag === "Just") { return v2._1; }
    $runtime.fail();
  }
};
const writeForeignArray = {writeImpl: xs => Data$dFunctor.arrayMap(Yoga$dJSON.writeForeignForeign.writeImpl)(xs)};
const writeJSON = /* #__PURE__ */ Yoga$dJSON.writeJSON(/* #__PURE__ */ (() => {
  const $0 = writeForeignFieldsCons(Yoga$dJSON.writeForeignFieldsCons({reflectSymbol: () => "description"})(writeForeignMaybe)(Yoga$dJSON.writeForeignFieldsCons({
    reflectSymbol: () => "method"
  })(Yoga$dJSON.writeForeignString)(Yoga$dJSON.writeForeignFieldsCons({reflectSymbol: () => "operationId"})(writeForeignMaybe)(Yoga$dJSON.writeForeignFieldsCons({
    reflectSymbol: () => "parameters"
  })(writeForeignArray)(Yoga$dJSON.writeForeignFieldsCons({reflectSymbol: () => "path"})(Yoga$dJSON.writeForeignString)(Yoga$dJSON.writeForeignFieldsCons({
    reflectSymbol: () => "requestBody"
  })((() => {
    const $0 = Yoga$dJSON.writeForeignFieldsCons({reflectSymbol: () => "content"})(Yoga$dJSON.writeForeignForeign)(Yoga$dJSON.writeForeignFieldsCons({
      reflectSymbol: () => "required"
    })(Yoga$dJSON.writeForeignBoolean)(Yoga$dJSON.writeForeignFieldsNilRowR)()()())()()();
    return {
      writeImpl: v2 => {
        if (v2.tag === "Nothing") { return Yoga$dJSON._undefined; }
        if (v2.tag === "Just") { return $0.writeImplFields(Type$dProxy.Proxy)(v2._1)({}); }
        $runtime.fail();
      }
    };
  })())(Yoga$dJSON.writeForeignFieldsCons({reflectSymbol: () => "responses"})((() => {
    const $0 = Yoga$dJSON.writeForeignFieldsCons({reflectSymbol: () => "content"})(Yoga$dJSON.writeForeignForeign)(Yoga$dJSON.writeForeignFieldsCons({
      reflectSymbol: () => "description"
    })(Yoga$dJSON.writeForeignString)(Yoga$dJSON.writeForeignFieldsCons({reflectSymbol: () => "headers"})((() => {
      const $0 = writeForeignFieldsCons(Yoga$dJSON.writeForeignFieldsCons({reflectSymbol: () => "description"})(writeForeignMaybe)(Yoga$dJSON.writeForeignFieldsCons({
        reflectSymbol: () => "example"
      })(writeForeignMaybe)(Yoga$dJSON.writeForeignFieldsCons({reflectSymbol: () => "schema"})(Yoga$dJSON.writeForeignForeign)(Yoga$dJSON.writeForeignFieldsNilRowR)()()())()()())()()())()()();
      return {writeImpl: Foreign$dObject.mapWithKey(v => rec => $0.writeImplFields(Type$dProxy.Proxy)(rec)({}))};
    })())(Yoga$dJSON.writeForeignFieldsNilRowR)()()())()()())()()();
    return {writeImpl: Foreign$dObject.mapWithKey(v => rec => $0.writeImplFields(Type$dProxy.Proxy)(rec)({}))};
  })())(Yoga$dJSON.writeForeignFieldsCons({reflectSymbol: () => "security"})({
    writeImpl: v2 => {
      if (v2.tag === "Nothing") { return Yoga$dJSON._undefined; }
      if (v2.tag === "Just") { return Data$dFunctor.arrayMap(Yoga$dJSON.writeForeignForeign.writeImpl)(v2._1); }
      $runtime.fail();
    }
  })(Yoga$dJSON.writeForeignFieldsCons({reflectSymbol: () => "summary"})(writeForeignMaybe)(Yoga$dJSON.writeForeignFieldsCons({reflectSymbol: () => "tags"})({
    writeImpl: xs => Data$dFunctor.arrayMap(Unsafe$dCoerce.unsafeCoerce)(xs)
  })(Yoga$dJSON.writeForeignFieldsNilRowR)()()())()()())()()())()()())()()())()()())()()())()()())()()())()()())()()();
  return {writeImpl: rec => $0.writeImplFields(Type$dProxy.Proxy)(rec)({})};
})());
const Route = /* #__PURE__ */ $Route();
const toOpenAPIRouteRequestReco = dictToOpenAPI => ({toOpenAPIImpl: v => dictToOpenAPI.toOpenAPIImpl(Type$dProxy.Proxy)});
const toOpenAPIRouteRecord = dictRenderMethod => dictPathPattern => () => dictRenderHeadersSchema => dictRenderCookieParamsSchema => dictDetectSecurity => dictDetectCookieSecurity => () => dictRenderPathParamsSchema => () => dictRenderQueryParamsSchema => dictRenderRequestBodySchema => () => dictRenderVariantResponseSchemaRL => dictHasOperationMetadata => (
  {
    toOpenAPIImpl: proxy => {
      const metadata = dictHasOperationMetadata.operationMetadata(proxy);
      const security = [...dictDetectSecurity.detectSecurity(Type$dProxy.Proxy), ...dictDetectCookieSecurity.detectCookieSecurity(Type$dProxy.Proxy)];
      return writeJSON({
        method: dictRenderMethod.renderMethod(Type$dProxy.Proxy),
        path: dictPathPattern.pathPattern(Type$dProxy.Proxy),
        parameters: [
          ...dictRenderHeadersSchema.renderHeadersSchema(Type$dProxy.Proxy),
          ...dictRenderCookieParamsSchema.renderCookieParamsSchema(Type$dProxy.Proxy),
          ...dictRenderPathParamsSchema.renderPathParamsSchema(Type$dProxy.Proxy),
          ...dictRenderQueryParamsSchema.renderQueryParamsSchema(Type$dProxy.Proxy)
        ],
        requestBody: dictRenderRequestBodySchema.renderRequestBodySchema(Type$dProxy.Proxy),
        responses: dictRenderVariantResponseSchemaRL.renderVariantResponseSchemaRL(Type$dProxy.Proxy),
        security: security.length === 0 ? Data$dMaybe.Nothing : Data$dMaybe.$Maybe("Just", security),
        summary: metadata.summary,
        description: metadata.description,
        operationId: metadata.operationId,
        tags: metadata.tags,
        deprecated: metadata.deprecated ? Data$dMaybe.$Maybe("Just", true) : Data$dMaybe.Nothing
      });
    }
  }
);
const collectRouteSchemasRouteR = dictCollectRouteSchemas => ({collectRouteSchemas: v => dictCollectRouteSchemas.collectRouteSchemas(Type$dProxy.Proxy)});
const collectRouteSchemasRouteR1 = () => dictCollectSchemas => () => dictCollectVariantSchemasRL => (
  {collectRouteSchemas: v => Foreign$dObject.union(dictCollectSchemas.collectSchemas(Type$dProxy.Proxy))(dictCollectVariantSchemasRL.collectVariantSchemasRL(Type$dProxy.Proxy))}
);
const collectRouteSchemaNamesRo = () => ({});
const collectRouteSchemaNamesRo1 = () => () => () => () => () => ({});
const collectOperationsRoute = dictRenderMethod => dictPathPattern => dictToOpenAPI => (
  {
    collectOperations: v => [
      {method: dictRenderMethod.renderMethod(Type$dProxy.Proxy), path: dictPathPattern.pathPattern(Type$dProxy.Proxy), operation: dictToOpenAPI.toOpenAPIImpl(Type$dProxy.Proxy)}
    ]
  }
);
const convertResponseVariantRLNil = {};
const convertResponseVariantRLCons = () => () => () => () => ({});
const convertResponseVariantImpl = () => () => ({});
export {
  $Route,
  Route,
  collectOperationsRoute,
  collectRouteSchemaNamesRo,
  collectRouteSchemaNamesRo1,
  collectRouteSchemasRouteR,
  collectRouteSchemasRouteR1,
  convertResponseVariantImpl,
  convertResponseVariantRLCons,
  convertResponseVariantRLNil,
  toOpenAPIRouteRecord,
  toOpenAPIRouteRequestReco,
  writeForeignArray,
  writeForeignFieldsCons,
  writeForeignMaybe,
  writeJSON
};
