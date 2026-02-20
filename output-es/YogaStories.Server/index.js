import * as $runtime from "../runtime.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dConsole from "../Effect.Console/index.js";
import * as Node$dEncoding from "../Node.Encoding/index.js";
import * as Node$dFS$dAff from "../Node.FS.Aff/index.js";
import * as Node$dFS$dAsync from "../Node.FS.Async/index.js";
import * as Promise$dAff from "../Promise.Aff/index.js";
import * as Yoga$dFastify$dFastify from "../Yoga.Fastify.Fastify/index.js";
const startServer = v => port => {
  const $0 = v.distDir;
  return Effect$dAff._bind(Effect$dAff._liftEffect(() => {
    const f = Yoga$dFastify$dFastify.fastifyImpl({});
    Yoga$dFastify$dFastify.routeImpl(
      f,
      {method: "GET", url: "/*"},
      Promise$dAff.fromAff(),
      req => reply => Effect$dAff._bind(Effect$dAff._liftEffect(() => Yoga$dFastify$dFastify.urlImpl(req)))(reqUrl => {
        const filePath = (() => {
          if (Data$dString$dCodeUnits.contains("/output/")(reqUrl)) { return "." + reqUrl; }
          if (reqUrl === "/") { return $0 + "/index.html"; }
          return $0 + reqUrl;
        })();
        const contentType = (() => {
          if (Data$dString$dCodeUnits.contains(".html")(filePath)) { return "text/html; charset=utf-8"; }
          if (Data$dString$dCodeUnits.contains(".json")(filePath)) { return "application/json"; }
          if (Data$dString$dCodeUnits.contains(".js.map")(filePath)) { return "application/json"; }
          if (Data$dString$dCodeUnits.contains(".js")(filePath)) { return "application/javascript"; }
          if (Data$dString$dCodeUnits.contains(".css")(filePath)) { return "text/css"; }
          return "application/octet-stream";
        })();
        return Effect$dAff._bind(Effect$dAff.try(Node$dFS$dAff.toAff2(Node$dFS$dAsync.readTextFile)(Node$dEncoding.UTF8)(filePath)))(result => {
          if (result.tag === "Right") {
            const $1 = result._1;
            return Effect$dAff._bind(Effect$dAff._liftEffect(() => {Yoga$dFastify$dFastify.headerImpl(reply, "Content-Type", contentType);}))(() => Effect$dAff._bind(Effect$dAff._liftEffect(() => Yoga$dFastify$dFastify.sendImpl(
              reply,
              $1
            )))(Promise$dAff.toAff$p(Promise$dAff.coerce)));
          }
          if (result.tag === "Left") {
            return Effect$dAff._bind(Effect$dAff._liftEffect(() => {Yoga$dFastify$dFastify.statusImpl(reply, 404);}))(() => Effect$dAff._bind(Effect$dAff._liftEffect(() => Yoga$dFastify$dFastify.sendImpl(
              reply,
              "Not found"
            )))(Promise$dAff.toAff$p(Promise$dAff.coerce)));
          }
          $runtime.fail();
        });
      })
    );
    return f;
  }))(app => Effect$dAff._bind(Effect$dAff._bind(Effect$dAff._liftEffect(() => Yoga$dFastify$dFastify.listenImpl(app, {port})))(Promise$dAff.toAff$p(Promise$dAff.coerce)))(address => Effect$dAff._liftEffect(Effect$dConsole.log("yoga-stories running at " + address))));
};
export {startServer};
