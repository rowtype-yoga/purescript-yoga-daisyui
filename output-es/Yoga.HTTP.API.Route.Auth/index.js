import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dString$dCodePoints from "../Data.String.CodePoints/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
const DigestAuth = x => x;
const BearerToken = x => x;
const BasicAuth = x => x;
const ApiKeyHeader = x => x;
const ApiKeyCookie = x => x;
const showDigestAuth = Data$dShow.showString;
const showBearerToken = Data$dShow.showString;
const showBasicAuth = Data$dShow.showString;
const showApiKeyHeader = Data$dShow.showString;
const showApiKeyCookie = Data$dShow.showString;
const newtypeDigestAuth_ = {Coercible0: () => {}};
const newtypeBearerToken_ = {Coercible0: () => {}};
const newtypeBasicAuth_ = {Coercible0: () => {}};
const newtypeApiKeyHeader_ = {Coercible0: () => {}};
const newtypeApiKeyCookie_ = {Coercible0: () => {}};
const headerValueTypeDigestAuth = {headerValueType: v => "string"};
const headerValueTypeBearerToke = {headerValueType: v => "string"};
const headerValueTypeBasicAuth = {headerValueType: v => "string"};
const headerValueTypeApiKeyHead = {headerValueType: v => "string"};
const headerValueTypeApiKeyCook = {headerValueType: v => "string"};
const headerValueDigestAuth = {
  parseHeader: s => {
    if (Data$dString$dCodePoints.take(7)(s) === "Digest ") { return Data$dEither.$Either("Right", s); }
    return Data$dEither.$Either("Left", "missing 'Digest ' prefix");
  },
  printHeader: v => v
};
const headerValueBearerToken = {
  parseHeader: s => {
    if (Data$dString$dCodePoints.take(7)(s) === "Bearer ") {
      return Data$dEither.$Either("Right", Data$dString$dCodeUnits.drop(Data$dString$dCodeUnits.length(Data$dString$dCodePoints.take(7)(s)))(s));
    }
    return Data$dEither.$Either("Left", "missing 'Bearer ' prefix");
  },
  printHeader: v => "Bearer " + v
};
const headerValueBasicAuth = {
  parseHeader: s => {
    if (Data$dString$dCodePoints.take(6)(s) === "Basic ") {
      return Data$dEither.$Either("Right", Data$dString$dCodeUnits.drop(Data$dString$dCodeUnits.length(Data$dString$dCodePoints.take(6)(s)))(s));
    }
    return Data$dEither.$Either("Left", "missing 'Basic ' prefix");
  },
  printHeader: v => "Basic " + v
};
const headerValueApiKeyHeader = {parseHeader: x => Data$dEither.$Either("Right", x), printHeader: v => v};
const headerValueApiKeyCookie = {parseHeader: x => Data$dEither.$Either("Right", x), printHeader: v => v};
const eqDigestAuth = {eq: x => y => x === y};
const eqBearerToken = {eq: x => y => x === y};
const eqBasicAuth = {eq: x => y => x === y};
const eqApiKeyHeader = {eq: x => y => x === y};
const eqApiKeyCookie = {eq: x => y => x === y};
export {
  ApiKeyCookie,
  ApiKeyHeader,
  BasicAuth,
  BearerToken,
  DigestAuth,
  eqApiKeyCookie,
  eqApiKeyHeader,
  eqBasicAuth,
  eqBearerToken,
  eqDigestAuth,
  headerValueApiKeyCookie,
  headerValueApiKeyHeader,
  headerValueBasicAuth,
  headerValueBearerToken,
  headerValueDigestAuth,
  headerValueTypeApiKeyCook,
  headerValueTypeApiKeyHead,
  headerValueTypeBasicAuth,
  headerValueTypeBearerToke,
  headerValueTypeDigestAuth,
  newtypeApiKeyCookie_,
  newtypeApiKeyHeader_,
  newtypeBasicAuth_,
  newtypeBearerToken_,
  newtypeDigestAuth_,
  showApiKeyCookie,
  showApiKeyHeader,
  showBasicAuth,
  showBearerToken,
  showDigestAuth
};
