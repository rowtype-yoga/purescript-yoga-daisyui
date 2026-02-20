import * as Record$dUnsafe from "../Record.Unsafe/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Yoga$dFastify$dFastify from "../Yoga.Fastify.Fastify/index.js";
const setHeadersRLNilRow = {setHeadersRL: v => v1 => reply => () => reply};
const setHeadersRL = dict => dict.setHeadersRL;
const setHeaders1 = () => dictSetHeadersRL => ({setHeaders: dictSetHeadersRL.setHeadersRL(Type$dProxy.Proxy)});
const setHeadersRLConsString = dictIsSymbol => dictSetHeadersRL => () => () => (
  {
    setHeadersRL: v => headers => reply => {
      const tailHeaders = Record$dUnsafe.unsafeDelete(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(headers);
      const $0 = dictIsSymbol.reflectSymbol(Type$dProxy.Proxy);
      const $1 = Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(headers);
      return () => {
        const reply$p = Yoga$dFastify$dFastify.headerImpl(reply, $0, $1);
        return dictSetHeadersRL.setHeadersRL(Type$dProxy.Proxy)(tailHeaders)(reply$p)();
      };
    }
  }
);
const setHeaders = dict => dict.setHeaders;
export {setHeaders, setHeaders1, setHeadersRL, setHeadersRLConsString, setHeadersRLNilRow};
