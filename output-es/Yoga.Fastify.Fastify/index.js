import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNullable from "../Data.Nullable/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dUncurried from "../Effect.Uncurried/index.js";
import * as Promise$dAff from "../Promise.Aff/index.js";
import {bodyImpl, closeImpl, fastifyImpl, headerImpl, headersImpl, listenImpl, methodImpl, paramsImpl, queryImpl, routeImpl, sendImpl, sendJsonImpl, statusImpl, urlImpl} from "./foreign.js";
const StatusCode = x => x;
const RouteURL = x => x;
const RouteSchema = x => x;
const RouteConfig = x => x;
const Port = x => x;
const JsonSchema = x => x;
const Host = x => x;
const HTTPMethod = x => x;
const AjvOptions = x => x;
const showStatusCode = Data$dShow.showInt;
const showRouteURL = Data$dShow.showString;
const showPort = Data$dShow.showInt;
const showHost = Data$dShow.showString;
const showHTTPMethod = Data$dShow.showString;
const newtypeStatusCode_ = {Coercible0: () => {}};
const newtypeRouteURL_ = {Coercible0: () => {}};
const newtypeRouteSchema_ = {Coercible0: () => {}};
const newtypeRouteConfig_ = {Coercible0: () => {}};
const newtypePort_ = {Coercible0: () => {}};
const newtypeJsonSchema_ = {Coercible0: () => {}};
const newtypeHost_ = {Coercible0: () => {}};
const newtypeHTTPMethod_ = {Coercible0: () => {}};
const newtypeAjvOptions_ = {Coercible0: () => {}};
const url = req => () => urlImpl(req);
const status = code => reply => () => statusImpl(reply, code);
const sendJson = payload => reply => Effect$dAff._bind(Effect$dAff._liftEffect(() => sendJsonImpl(reply, payload)))(Promise$dAff.toAff$p(Promise$dAff.coerce));
const send = payload => reply => Effect$dAff._bind(Effect$dAff._liftEffect(() => sendImpl(reply, payload)))(Promise$dAff.toAff$p(Promise$dAff.coerce));
const routeSchema = () => opts => opts;
const routeConfig = () => opts => opts;
const route = () => opts => handler => app => () => routeImpl(app, opts, Promise$dAff.fromAff(), handler);
const query = /* #__PURE__ */ Effect$dUncurried.runEffectFn1(queryImpl);
const put = routeUrl => handler => route()({method: "PUT", url: routeUrl})(handler);
const post = routeUrl => handler => route()({method: "POST", url: routeUrl})(handler);
const patch = routeUrl => handler => route()({method: "PATCH", url: routeUrl})(handler);
const params = /* #__PURE__ */ Effect$dUncurried.runEffectFn1(paramsImpl);
const method = req => () => methodImpl(req);
const listen = () => opts => app => Effect$dAff._bind(Effect$dAff._liftEffect(() => listenImpl(app, opts)))(Promise$dAff.toAff$p(Promise$dAff.coerce));
const headers = /* #__PURE__ */ Effect$dUncurried.runEffectFn1(headersImpl);
const header = key => value => reply => () => headerImpl(reply, key, value);
const $$get = routeUrl => handler => route()({method: "GET", url: routeUrl})(handler);
const fastify = () => opts => () => fastifyImpl(opts);
const $$delete = routeUrl => handler => route()({method: "DELETE", url: routeUrl})(handler);
const close = /* #__PURE__ */ (() => {
  const $0 = Effect$dUncurried.runEffectFn1(closeImpl);
  return x => Effect$dAff._bind(Effect$dAff._liftEffect($0(x)))(Promise$dAff.toAff$p(Promise$dAff.coerce));
})();
const body = req => () => {
  const a$p = bodyImpl(req);
  return Data$dNullable.nullable(a$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
};
const ajvOptions = () => opts => ({customOptions: opts});
export {
  AjvOptions,
  HTTPMethod,
  Host,
  JsonSchema,
  Port,
  RouteConfig,
  RouteSchema,
  RouteURL,
  StatusCode,
  ajvOptions,
  body,
  close,
  $$delete as delete,
  fastify,
  $$get as get,
  header,
  headers,
  listen,
  method,
  newtypeAjvOptions_,
  newtypeHTTPMethod_,
  newtypeHost_,
  newtypeJsonSchema_,
  newtypePort_,
  newtypeRouteConfig_,
  newtypeRouteSchema_,
  newtypeRouteURL_,
  newtypeStatusCode_,
  params,
  patch,
  post,
  put,
  query,
  route,
  routeConfig,
  routeSchema,
  send,
  sendJson,
  showHTTPMethod,
  showHost,
  showPort,
  showRouteURL,
  showStatusCode,
  status,
  url
};
export * from "./foreign.js";
