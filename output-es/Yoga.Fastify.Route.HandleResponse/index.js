import * as Data$dVariant from "../Data.Variant/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Promise$dAff from "../Promise.Aff/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Yoga$dFastify$dFastify from "../Yoga.Fastify.Fastify/index.js";
const handleResponseRLNilRow = {handleResponseRL: v => Data$dVariant.case_};
const handleResponseRL = dict => dict.handleResponseRL;
const handleResponse1 = () => dictHandleResponseRL => ({handleResponse: v => dictHandleResponseRL.handleResponseRL(Type$dProxy.Proxy)});
const handleResponseRLConsRespo = dictIsSymbol => dictStatusCodeMap => dictSetHeaders => dictWriteForeign => dictHandleResponseRL => () => () => (
  {
    handleResponseRL: v => variant => reply => {
      if (variant.type === dictIsSymbol.reflectSymbol(Type$dProxy.Proxy)) {
        const $0 = variant.value._1;
        return Effect$dAff._bind(Effect$dAff._map(v$1 => {})(Effect$dAff._liftEffect((() => {
          const $1 = dictStatusCodeMap.statusCodeFor(Type$dProxy.Proxy);
          return () => Yoga$dFastify$dFastify.statusImpl(reply, $1);
        })())))(() => Effect$dAff._bind(Effect$dAff._map(v$1 => {})(Effect$dAff._liftEffect(dictSetHeaders.setHeaders($0.headers)(reply))))(() => {
          const $1 = dictWriteForeign.writeImpl($0.body);
          return Effect$dAff._bind(Effect$dAff._liftEffect(() => Yoga$dFastify$dFastify.sendImpl(reply, $1)))(Promise$dAff.toAff$p(Promise$dAff.coerce));
        }));
      }
      return dictHandleResponseRL.handleResponseRL(Type$dProxy.Proxy)(variant)(reply);
    }
  }
);
const handleResponse = dict => dict.handleResponse;
export {handleResponse, handleResponse1, handleResponseRL, handleResponseRLConsRespo, handleResponseRLNilRow};
