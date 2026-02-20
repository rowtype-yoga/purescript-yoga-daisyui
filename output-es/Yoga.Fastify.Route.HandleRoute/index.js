import * as $runtime from "../runtime.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNullable from "../Data.Nullable/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Promise$dAff from "../Promise.Aff/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Yoga$dFastify$dFastify from "../Yoga.Fastify.Fastify/index.js";
import * as Yoga$dJSON from "../Yoga.JSON/index.js";
const writeJSON = /* #__PURE__ */ Yoga$dJSON.writeJSON(/* #__PURE__ */ (() => {
  const $0 = Yoga$dJSON.writeForeignFieldsCons({reflectSymbol: () => "details"})((() => {
    const $0 = Yoga$dJSON.writeForeignFieldsCons({reflectSymbol: () => "error"})(Yoga$dJSON.writeForeignString)(Yoga$dJSON.writeForeignFieldsCons({reflectSymbol: () => "field"})(Yoga$dJSON.writeForeignString)(Yoga$dJSON.writeForeignFieldsNilRowR)()()())()()();
    return {writeImpl: a => Data$dFunctor.arrayMap(rec => $0.writeImplFields(Type$dProxy.Proxy)(rec)({}))(a)};
  })())(Yoga$dJSON.writeForeignFieldsCons({reflectSymbol: () => "error"})(Yoga$dJSON.writeForeignString)(Yoga$dJSON.writeForeignFieldsNilRowR)()()())()()();
  return {writeImpl: rec => $0.writeImplFields(Type$dProxy.Proxy)(rec)({})};
})());
const handleRoute = () => () => dictRenderMethod => dictPathPattern => () => () => () => dictParsePathParams => dictParseQueryParamsFromObject => dictParseHeaders => dictParseBody => () => dictHandleResponse => () => handler => fastify => {
  const $0 = {method: Data$dString$dCommon.toUpper(dictRenderMethod.renderMethod(Type$dProxy.Proxy)), url: dictPathPattern.pathPattern(Type$dProxy.Proxy)};
  return () => Yoga$dFastify$dFastify.routeImpl(
    fastify,
    $0,
    Promise$dAff.fromAff(),
    req => reply => Effect$dAff._bind(Effect$dAff._liftEffect(Yoga$dFastify$dFastify.params(req)))(paramsObj => Effect$dAff._bind(Effect$dAff._liftEffect(Yoga$dFastify$dFastify.query(req)))(queryObj => Effect$dAff._bind(Effect$dAff._liftEffect(Yoga$dFastify$dFastify.headers(req)))(headersObj => Effect$dAff._bind(Effect$dAff._liftEffect(() => {
      const a$p = Yoga$dFastify$dFastify.bodyImpl(req);
      return Data$dNullable.nullable(a$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
    }))(bodyMaybe => {
      const queryResult = dictParseQueryParamsFromObject.parseQueryParamsFromObject(Type$dProxy.Proxy)(queryObj);
      const pathResult = dictParsePathParams.parsePathParams(Type$dProxy.Proxy)(paramsObj);
      const headersResult = dictParseHeaders.parseHeaders(Type$dProxy.Proxy)(headersObj);
      const bodyResult = dictParseBody.parseBody(Type$dProxy.Proxy)(bodyMaybe);
      const $1 = Data$dArray.concat([
        (() => {
          const $1 = Data$dFunctor.arrayMap(err => ({field: "path", error: err}));
          if (pathResult.tag === "Left") { return $1(pathResult._1); }
          if (pathResult.tag === "Right") { return []; }
          $runtime.fail();
        })(),
        (() => {
          const $1 = Data$dFunctor.arrayMap(err => ({field: "query", error: err}));
          if (queryResult.tag === "Left") { return $1(queryResult._1); }
          if (queryResult.tag === "Right") { return []; }
          $runtime.fail();
        })(),
        (() => {
          const $1 = Data$dFunctor.arrayMap(x => (
            {
              field: "headers",
              error: (() => {
                if (x.tag === "MissingHeader") { return "Missing required header: " + x._1; }
                if (x.tag === "InvalidHeaderValue") { return "Invalid header '" + x._1 + "': " + x._2; }
                $runtime.fail();
              })()
            }
          ));
          if (headersResult.tag === "Left") { return $1(headersResult._1); }
          if (headersResult.tag === "Right") { return []; }
          $runtime.fail();
        })(),
        (() => {
          const $1 = Data$dFunctor.arrayMap(err => ({field: "body", error: err}));
          if (bodyResult.tag === "Left") { return $1([bodyResult._1]); }
          if (bodyResult.tag === "Right") { return []; }
          $runtime.fail();
        })()
      ]);
      if ($1.length > 0) {
        const $2 = writeJSON({error: "Invalid request", details: $1});
        return Effect$dAff._bind(Effect$dAff._map(v => {})(Effect$dAff._liftEffect(() => Yoga$dFastify$dFastify.statusImpl(reply, 400))))(() => Effect$dAff._bind(Effect$dAff._map(v => {})(Effect$dAff._liftEffect(() => Yoga$dFastify$dFastify.headerImpl(
          reply,
          "content-type",
          "application/json"
        ))))(() => Effect$dAff._bind(Effect$dAff._liftEffect(() => Yoga$dFastify$dFastify.sendImpl(reply, $2)))(Promise$dAff.toAff$p(Promise$dAff.coerce))));
      }
      if (pathResult.tag === "Right" && queryResult.tag === "Right" && headersResult.tag === "Right" && bodyResult.tag === "Right") {
        return Effect$dAff._bind(handler({path: pathResult._1, query: queryResult._1, headers: headersResult._1, body: bodyResult._1}))(result => dictHandleResponse.handleResponse(Type$dProxy.Proxy)(result)(reply));
      }
      return Effect$dAff._pure();
    }))))
  );
};
export {handleRoute, writeJSON};
