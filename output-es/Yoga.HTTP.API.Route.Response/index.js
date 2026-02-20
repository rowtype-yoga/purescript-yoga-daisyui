import * as Type$dProxy from "../Type.Proxy/index.js";
const $Response = _1 => ({tag: "Response", _1});
const Response = value0 => $Response(value0);
const toResponseRecord = () => () => ({});
const toResponseRLInvalid = undefined;
const toResponseRLBodyOnly = {};
const toResponseRLBodyHeaders = {};
const toResponseIdentity = {};
const respondWith = dictIsSymbol => () => label => headers => body => ({type: dictIsSymbol.reflectSymbol(label), value: $Response({headers, body})});
const seeOtherWith = headers => body => ({type: "seeOther", value: $Response({headers, body})});
const serviceUnavailableWith = headers => body => ({type: "serviceUnavailable", value: $Response({headers, body})});
const switchingProtocolsWith = headers => body => ({type: "switchingProtocols", value: $Response({headers, body})});
const temporaryRedirectWith = headers => body => ({type: "temporaryRedirect", value: $Response({headers, body})});
const tooEarlyWith = headers => body => ({type: "tooEarly", value: $Response({headers, body})});
const tooManyRequestsWith = headers => body => ({type: "tooManyRequests", value: $Response({headers, body})});
const unauthorizedWith = headers => body => ({type: "unauthorized", value: $Response({headers, body})});
const unavailableForLegalReasonsWith = headers => body => ({type: "unavailableForLegalReasons", value: $Response({headers, body})});
const unprocessableEntityWith = headers => body => ({type: "unprocessableEntity", value: $Response({headers, body})});
const unsupportedMediaTypeWith = headers => body => ({type: "unsupportedMediaType", value: $Response({headers, body})});
const upgradeRequiredWith = headers => body => ({type: "upgradeRequired", value: $Response({headers, body})});
const uriTooLongWith = headers => body => ({type: "uriTooLong", value: $Response({headers, body})});
const useProxyWith = headers => body => ({type: "useProxy", value: $Response({headers, body})});
const variantAlsoNegotiatesWith = headers => body => ({type: "variantAlsoNegotiates", value: $Response({headers, body})});
const respondStatusWith = () => dictIsSymbol => () => headers => body => ({type: dictIsSymbol.reflectSymbol(Type$dProxy.Proxy), value: $Response({headers, body})});
const respondStatus = () => dictIsSymbol => () => body => ({type: dictIsSymbol.reflectSymbol(Type$dProxy.Proxy), value: $Response({headers: {}, body})});
const respondNothing = dictIsSymbol => () => ({type: dictIsSymbol.reflectSymbol(Type$dProxy.Proxy), value: $Response({headers: {}, body: undefined})});
const respondNotModified = () => ({type: "notModified", value: $Response({headers: {}, body: undefined})});
const respondNoHeaders = dictIsSymbol => () => body => ({type: dictIsSymbol.reflectSymbol(Type$dProxy.Proxy), value: $Response({headers: {}, body})});
const seeOther = body => ({type: "seeOther", value: $Response({headers: {}, body})});
const serviceUnavailable = body => ({type: "serviceUnavailable", value: $Response({headers: {}, body})});
const switchingProtocols = body => ({type: "switchingProtocols", value: $Response({headers: {}, body})});
const temporaryRedirect = body => ({type: "temporaryRedirect", value: $Response({headers: {}, body})});
const tooEarly = body => ({type: "tooEarly", value: $Response({headers: {}, body})});
const tooManyRequests = body => ({type: "tooManyRequests", value: $Response({headers: {}, body})});
const unauthorized = body => ({type: "unauthorized", value: $Response({headers: {}, body})});
const unavailableForLegalReasons = body => ({type: "unavailableForLegalReasons", value: $Response({headers: {}, body})});
const unprocessableEntity = body => ({type: "unprocessableEntity", value: $Response({headers: {}, body})});
const unsupportedMediaType = body => ({type: "unsupportedMediaType", value: $Response({headers: {}, body})});
const upgradeRequired = body => ({type: "upgradeRequired", value: $Response({headers: {}, body})});
const uriTooLong = body => ({type: "uriTooLong", value: $Response({headers: {}, body})});
const useProxy = body => ({type: "useProxy", value: $Response({headers: {}, body})});
const variantAlsoNegotiates = body => ({type: "variantAlsoNegotiates", value: $Response({headers: {}, body})});
const respondNoContent = () => ({type: "noContent", value: $Response({headers: {}, body: undefined})});
const respondNoBody = dictIsSymbol => () => label => headers => ({type: dictIsSymbol.reflectSymbol(label), value: $Response({headers, body: undefined})});
const respond = dictIsSymbol => () => label => rd => ({type: dictIsSymbol.reflectSymbol(label), value: rd});
const resetContentWith = headers => body => ({type: "resetContent", value: $Response({headers, body})});
const resetContent = body => ({type: "resetContent", value: $Response({headers: {}, body})});
const requestTimeoutWith = headers => body => ({type: "requestTimeout", value: $Response({headers, body})});
const requestTimeout = body => ({type: "requestTimeout", value: $Response({headers: {}, body})});
const requestHeaderFieldsTooLargeWith = headers => body => ({type: "requestHeaderFieldsTooLarge", value: $Response({headers, body})});
const requestHeaderFieldsTooLarge = body => ({type: "requestHeaderFieldsTooLarge", value: $Response({headers: {}, body})});
const rangeNotSatisfiableWith = headers => body => ({type: "rangeNotSatisfiable", value: $Response({headers, body})});
const rangeNotSatisfiable = body => ({type: "rangeNotSatisfiable", value: $Response({headers: {}, body})});
const proxyAuthenticationRequiredWith = headers => body => ({type: "proxyAuthenticationRequired", value: $Response({headers, body})});
const proxyAuthenticationRequired = body => ({type: "proxyAuthenticationRequired", value: $Response({headers: {}, body})});
const processingWith = headers => body => ({type: "processing", value: $Response({headers, body})});
const processing = body => ({type: "processing", value: $Response({headers: {}, body})});
const preconditionRequiredWith = headers => body => ({type: "preconditionRequired", value: $Response({headers, body})});
const preconditionRequired = body => ({type: "preconditionRequired", value: $Response({headers: {}, body})});
const preconditionFailedWith = headers => body => ({type: "preconditionFailed", value: $Response({headers, body})});
const preconditionFailed = body => ({type: "preconditionFailed", value: $Response({headers: {}, body})});
const permanentRedirectWith = headers => body => ({type: "permanentRedirect", value: $Response({headers, body})});
const permanentRedirect = body => ({type: "permanentRedirect", value: $Response({headers: {}, body})});
const paymentRequiredWith = headers => body => ({type: "paymentRequired", value: $Response({headers, body})});
const paymentRequired = body => ({type: "paymentRequired", value: $Response({headers: {}, body})});
const payloadTooLargeWith = headers => body => ({type: "payloadTooLarge", value: $Response({headers, body})});
const payloadTooLarge = body => ({type: "payloadTooLarge", value: $Response({headers: {}, body})});
const partialContentWith = headers => body => ({type: "partialContent", value: $Response({headers, body})});
const partialContent = body => ({type: "partialContent", value: $Response({headers: {}, body})});
const okWith = headers => body => ({type: "ok", value: $Response({headers, body})});
const ok = body => ({type: "ok", value: $Response({headers: {}, body})});
const notModifiedWith = headers => body => ({type: "notModified", value: $Response({headers, body})});
const notModified = body => ({type: "notModified", value: $Response({headers: {}, body})});
const notImplementedWith = headers => body => ({type: "notImplemented", value: $Response({headers, body})});
const notImplemented = body => ({type: "notImplemented", value: $Response({headers: {}, body})});
const notFoundWith = headers => body => ({type: "notFound", value: $Response({headers, body})});
const notFound = body => ({type: "notFound", value: $Response({headers: {}, body})});
const notExtendedWith = headers => body => ({type: "notExtended", value: $Response({headers, body})});
const notExtended = body => ({type: "notExtended", value: $Response({headers: {}, body})});
const notAcceptableWith = headers => body => ({type: "notAcceptable", value: $Response({headers, body})});
const notAcceptable = body => ({type: "notAcceptable", value: $Response({headers: {}, body})});
const nonAuthoritativeInformationWith = headers => body => ({type: "nonAuthoritativeInformation", value: $Response({headers, body})});
const nonAuthoritativeInformation = body => ({type: "nonAuthoritativeInformation", value: $Response({headers: {}, body})});
const noContentWith = headers => body => ({type: "noContent", value: $Response({headers, body})});
const noContent = body => ({type: "noContent", value: $Response({headers: {}, body})});
const networkAuthenticationRequiredWith = headers => body => ({type: "networkAuthenticationRequired", value: $Response({headers, body})});
const networkAuthenticationRequired = body => ({type: "networkAuthenticationRequired", value: $Response({headers: {}, body})});
const multipleChoicesWith = headers => body => ({type: "multipleChoices", value: $Response({headers, body})});
const multipleChoices = body => ({type: "multipleChoices", value: $Response({headers: {}, body})});
const multiStatusWith = headers => body => ({type: "multiStatus", value: $Response({headers, body})});
const multiStatus = body => ({type: "multiStatus", value: $Response({headers: {}, body})});
const movedPermanentlyWith = headers => body => ({type: "movedPermanently", value: $Response({headers, body})});
const movedPermanently = body => ({type: "movedPermanently", value: $Response({headers: {}, body})});
const misdirectedRequestWith = headers => body => ({type: "misdirectedRequest", value: $Response({headers, body})});
const misdirectedRequest = body => ({type: "misdirectedRequest", value: $Response({headers: {}, body})});
const methodNotAllowedWith = headers => body => ({type: "methodNotAllowed", value: $Response({headers, body})});
const methodNotAllowed = body => ({type: "methodNotAllowed", value: $Response({headers: {}, body})});
const loopDetectedWith = headers => body => ({type: "loopDetected", value: $Response({headers, body})});
const loopDetected = body => ({type: "loopDetected", value: $Response({headers: {}, body})});
const lockedWith = headers => body => ({type: "locked", value: $Response({headers, body})});
const locked = body => ({type: "locked", value: $Response({headers: {}, body})});
const lengthRequiredWith = headers => body => ({type: "lengthRequired", value: $Response({headers, body})});
const lengthRequired = body => ({type: "lengthRequired", value: $Response({headers: {}, body})});
const internalServerErrorWith = headers => body => ({type: "internalServerError", value: $Response({headers, body})});
const internalServerError = body => ({type: "internalServerError", value: $Response({headers: {}, body})});
const insufficientStorageWith = headers => body => ({type: "insufficientStorage", value: $Response({headers, body})});
const insufficientStorage = body => ({type: "insufficientStorage", value: $Response({headers: {}, body})});
const imUsedWith = headers => body => ({type: "imUsed", value: $Response({headers, body})});
const imUsed = body => ({type: "imUsed", value: $Response({headers: {}, body})});
const imATeapotWith = headers => body => ({type: "imATeapot", value: $Response({headers, body})});
const imATeapot = body => ({type: "imATeapot", value: $Response({headers: {}, body})});
const httpVersionNotSupportedWith = headers => body => ({type: "httpVersionNotSupported", value: $Response({headers, body})});
const httpVersionNotSupported = body => ({type: "httpVersionNotSupported", value: $Response({headers: {}, body})});
const goneWith = headers => body => ({type: "gone", value: $Response({headers, body})});
const gone = body => ({type: "gone", value: $Response({headers: {}, body})});
const gatewayTimeoutWith = headers => body => ({type: "gatewayTimeout", value: $Response({headers, body})});
const gatewayTimeout = body => ({type: "gatewayTimeout", value: $Response({headers: {}, body})});
const foundWith = headers => body => ({type: "found", value: $Response({headers, body})});
const found = body => ({type: "found", value: $Response({headers: {}, body})});
const forbiddenWith = headers => body => ({type: "forbidden", value: $Response({headers, body})});
const forbidden = body => ({type: "forbidden", value: $Response({headers: {}, body})});
const failedDependencyWith = headers => body => ({type: "failedDependency", value: $Response({headers, body})});
const failedDependency = body => ({type: "failedDependency", value: $Response({headers: {}, body})});
const expectationFailedWith = headers => body => ({type: "expectationFailed", value: $Response({headers, body})});
const expectationFailed = body => ({type: "expectationFailed", value: $Response({headers: {}, body})});
const earlyHintsWith = headers => body => ({type: "earlyHints", value: $Response({headers, body})});
const earlyHints = body => ({type: "earlyHints", value: $Response({headers: {}, body})});
const createdWith = headers => body => ({type: "created", value: $Response({headers, body})});
const created = body => ({type: "created", value: $Response({headers: {}, body})});
const continueWith = headers => body => ({type: "continue", value: $Response({headers, body})});
const $$continue = body => ({type: "continue", value: $Response({headers: {}, body})});
const conflictWith = headers => body => ({type: "conflict", value: $Response({headers, body})});
const conflict = body => ({type: "conflict", value: $Response({headers: {}, body})});
const badRequestWith = headers => body => ({type: "badRequest", value: $Response({headers, body})});
const badRequest = body => ({type: "badRequest", value: $Response({headers: {}, body})});
const badGatewayWith = headers => body => ({type: "badGateway", value: $Response({headers, body})});
const badGateway = body => ({type: "badGateway", value: $Response({headers: {}, body})});
const alreadyReportedWith = headers => body => ({type: "alreadyReported", value: $Response({headers, body})});
const alreadyReported = body => ({type: "alreadyReported", value: $Response({headers: {}, body})});
const acceptedWith = headers => body => ({type: "accepted", value: $Response({headers, body})});
const accepted = body => ({type: "accepted", value: $Response({headers: {}, body})});
export {
  $Response,
  Response,
  accepted,
  acceptedWith,
  alreadyReported,
  alreadyReportedWith,
  badGateway,
  badGatewayWith,
  badRequest,
  badRequestWith,
  conflict,
  conflictWith,
  $$continue as continue,
  continueWith,
  created,
  createdWith,
  earlyHints,
  earlyHintsWith,
  expectationFailed,
  expectationFailedWith,
  failedDependency,
  failedDependencyWith,
  forbidden,
  forbiddenWith,
  found,
  foundWith,
  gatewayTimeout,
  gatewayTimeoutWith,
  gone,
  goneWith,
  httpVersionNotSupported,
  httpVersionNotSupportedWith,
  imATeapot,
  imATeapotWith,
  imUsed,
  imUsedWith,
  insufficientStorage,
  insufficientStorageWith,
  internalServerError,
  internalServerErrorWith,
  lengthRequired,
  lengthRequiredWith,
  locked,
  lockedWith,
  loopDetected,
  loopDetectedWith,
  methodNotAllowed,
  methodNotAllowedWith,
  misdirectedRequest,
  misdirectedRequestWith,
  movedPermanently,
  movedPermanentlyWith,
  multiStatus,
  multiStatusWith,
  multipleChoices,
  multipleChoicesWith,
  networkAuthenticationRequired,
  networkAuthenticationRequiredWith,
  noContent,
  noContentWith,
  nonAuthoritativeInformation,
  nonAuthoritativeInformationWith,
  notAcceptable,
  notAcceptableWith,
  notExtended,
  notExtendedWith,
  notFound,
  notFoundWith,
  notImplemented,
  notImplementedWith,
  notModified,
  notModifiedWith,
  ok,
  okWith,
  partialContent,
  partialContentWith,
  payloadTooLarge,
  payloadTooLargeWith,
  paymentRequired,
  paymentRequiredWith,
  permanentRedirect,
  permanentRedirectWith,
  preconditionFailed,
  preconditionFailedWith,
  preconditionRequired,
  preconditionRequiredWith,
  processing,
  processingWith,
  proxyAuthenticationRequired,
  proxyAuthenticationRequiredWith,
  rangeNotSatisfiable,
  rangeNotSatisfiableWith,
  requestHeaderFieldsTooLarge,
  requestHeaderFieldsTooLargeWith,
  requestTimeout,
  requestTimeoutWith,
  resetContent,
  resetContentWith,
  respond,
  respondNoBody,
  respondNoContent,
  respondNoHeaders,
  respondNotModified,
  respondNothing,
  respondStatus,
  respondStatusWith,
  respondWith,
  seeOther,
  seeOtherWith,
  serviceUnavailable,
  serviceUnavailableWith,
  switchingProtocols,
  switchingProtocolsWith,
  temporaryRedirect,
  temporaryRedirectWith,
  toResponseIdentity,
  toResponseRLBodyHeaders,
  toResponseRLBodyOnly,
  toResponseRLInvalid,
  toResponseRecord,
  tooEarly,
  tooEarlyWith,
  tooManyRequests,
  tooManyRequestsWith,
  unauthorized,
  unauthorizedWith,
  unavailableForLegalReasons,
  unavailableForLegalReasonsWith,
  unprocessableEntity,
  unprocessableEntityWith,
  unsupportedMediaType,
  unsupportedMediaTypeWith,
  upgradeRequired,
  upgradeRequiredWith,
  uriTooLong,
  uriTooLongWith,
  useProxy,
  useProxyWith,
  variantAlsoNegotiates,
  variantAlsoNegotiatesWith
};
