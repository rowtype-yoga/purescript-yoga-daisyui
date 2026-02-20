const $Request = _1 => ({tag: "Request", _1});
const Request = value0 => $Request(value0);
const segmentQueryParamsRLNil = {};
const segmentQueryParamsRLConsRequired = () => () => () => ({});
const segmentQueryParamsRLConsOptional = () => () => () => ({});
const segmentQueryParamsQP = () => () => ({});
const segmentQueryParamsCatchAll = {};
const segmentPathParamsQueryParams = () => ({});
const segmentPathParamsCatchAll = () => ({});
const requestHeadersRequest = () => ({});
const requestCookiesRequest = () => ({});
const requestBodyRequest = () => ({});
const encodingBodyNoBody = {};
const encodingBodyJSON = {};
const defaultRequestFieldsImpl = () => () => ({});
const defaultFieldsRLOtherCons = () => ({});
const defaultFieldsRLNil = {};
const defaultFieldsRLHeadersCons = () => ({});
const defaultFieldsRLCookiesCons = () => ({});
const defaultFieldsRLBodyCons = () => ({});
const captureParamsPath = () => ({});
const captureParamsParam = () => () => ({});
const captureParamsDefault = {};
const captureParamsCons = () => () => () => () => ({});
const captureParamsCapture = () => () => ({});
export {
  $Request,
  Request,
  captureParamsCapture,
  captureParamsCons,
  captureParamsDefault,
  captureParamsParam,
  captureParamsPath,
  defaultFieldsRLBodyCons,
  defaultFieldsRLCookiesCons,
  defaultFieldsRLHeadersCons,
  defaultFieldsRLNil,
  defaultFieldsRLOtherCons,
  defaultRequestFieldsImpl,
  encodingBodyJSON,
  encodingBodyNoBody,
  requestBodyRequest,
  requestCookiesRequest,
  requestHeadersRequest,
  segmentPathParamsCatchAll,
  segmentPathParamsQueryParams,
  segmentQueryParamsCatchAll,
  segmentQueryParamsQP,
  segmentQueryParamsRLConsOptional,
  segmentQueryParamsRLConsRequired,
  segmentQueryParamsRLNil
};
