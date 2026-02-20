import * as $runtime from "../runtime.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNullable from "../Data.Nullable/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as ExitCodes from "../ExitCodes/index.js";
import * as Options$dApplicative$dBuilder from "../Options.Applicative.Builder/index.js";
import * as Options$dApplicative$dBuilder$dInternal from "../Options.Applicative.Builder.Internal/index.js";
import * as Options$dApplicative$dExtra from "../Options.Applicative.Extra/index.js";
import * as Options$dApplicative$dHelp$dChunk from "../Options.Applicative.Help.Chunk/index.js";
import * as Options$dApplicative$dInternal$dUtils from "../Options.Applicative.Internal.Utils/index.js";
import * as Options$dApplicative$dTypes from "../Options.Applicative.Types/index.js";
import {buildProductionImpl, startDevServerImpl} from "./foreign.js";
const $Command = (tag, _1) => ({tag, _1});
const Serve = value0 => $Command("Serve", value0);
const Build = value0 => $Command("Build", value0);
const outputDirOption = /* #__PURE__ */ (() => Options$dApplicative$dTypes.parserFunctor.map(v => {
  if (v === "") { return Data$dMaybe.Nothing; }
  return Data$dMaybe.$Maybe("Just", v);
})(Options$dApplicative$dBuilder.option(Options$dApplicative$dTypes.readerAsk)((() => {
  const $0 = Options$dApplicative$dBuilder$dInternal.optionMod(p => ({...p, propMetaVar: "DIR"}));
  const $1 = Options$dApplicative$dBuilder$dInternal.optionMod(p => ({...p, propHelp: Options$dApplicative$dHelp$dChunk.paragraph("PureScript output directory")}));
  const $2 = $1._2._2.tag === "Nothing" ? $0._2._2 : $1._2._2;
  const $3 = $2.tag === "Nothing" ? Data$dMaybe.Nothing : $2;
  return Options$dApplicative$dBuilder$dInternal.$Mod(
    x => $1._1($0._1({...x, optNames: [Options$dApplicative$dTypes.$OptName("OptShort", "o"), Options$dApplicative$dTypes.$OptName("OptLong", "output"), ...x.optNames]})),
    Options$dApplicative$dBuilder$dInternal.$DefaultProp(Data$dMaybe.$Maybe("Just", ""), $3.tag === "Nothing" ? Data$dMaybe.Nothing : $3),
    x => $1._3($0._3(x))
  );
})())))();
const serveParser = /* #__PURE__ */ (() => Options$dApplicative$dTypes.$Parser(
  "MultP",
  Options$dApplicative$dTypes.$MultPE(
    Options$dApplicative$dTypes.$Parser(
      "MultP",
      Options$dApplicative$dTypes.$MultPE(
        Options$dApplicative$dTypes.$Parser(
          "MultP",
          Options$dApplicative$dTypes.$MultPE(
            Options$dApplicative$dTypes.parserFunctor.map(v => v1 => v2 => v3 => ({port: v, configPath: v1, outputDir: v2, open: !v3}))(Options$dApplicative$dBuilder.option(Options$dApplicative$dBuilder.int)((() => {
              const $0 = Options$dApplicative$dBuilder$dInternal.optionMod(p => ({...p, propMetaVar: "PORT"}));
              const $1 = Options$dApplicative$dBuilder$dInternal.optionMod(p => ({...p, propHelp: Options$dApplicative$dHelp$dChunk.paragraph("Dev server port")}));
              return Options$dApplicative$dBuilder$dInternal.$Mod(
                x => $1._1($0._1({...x, optNames: [Options$dApplicative$dTypes.$OptName("OptShort", "p"), Options$dApplicative$dTypes.$OptName("OptLong", "port"), ...x.optNames]})),
                Options$dApplicative$dBuilder$dInternal.$DefaultProp(Data$dMaybe.$Maybe("Just", 6006), Data$dMaybe.$Maybe("Just", Data$dShow.showIntImpl)),
                x => $1._3($0._3(x))
              );
            })())),
            Options$dApplicative$dBuilder.option(Options$dApplicative$dTypes.readerAsk)((() => {
              const $0 = Options$dApplicative$dBuilder$dInternal.optionMod(p => ({...p, propMetaVar: "PATH"}));
              const $1 = Options$dApplicative$dBuilder$dInternal.optionMod(p => ({...p, propHelp: Options$dApplicative$dHelp$dChunk.paragraph("Config file path")}));
              return Options$dApplicative$dBuilder$dInternal.$Mod(
                x => $1._1($0._1({...x, optNames: [Options$dApplicative$dTypes.$OptName("OptShort", "c"), Options$dApplicative$dTypes.$OptName("OptLong", "config"), ...x.optNames]})),
                Options$dApplicative$dBuilder$dInternal.$DefaultProp(Data$dMaybe.$Maybe("Just", "yoga-stories.json"), Data$dMaybe.$Maybe("Just", Data$dShow.showStringImpl)),
                x => $1._3($0._3(x))
              );
            })())
          )
        ),
        outputDirOption
      )
    ),
    Options$dApplicative$dTypes.$Parser(
      "AltP",
      Options$dApplicative$dBuilder.flag$p(true)((() => {
        const $0 = Options$dApplicative$dBuilder$dInternal.optionMod(p => ({...p, propHelp: Options$dApplicative$dHelp$dChunk.paragraph("Do not open browser on start")}));
        return Options$dApplicative$dBuilder$dInternal.$Mod(
          x => $0._1({...x, flagNames: [Options$dApplicative$dTypes.$OptName("OptLong", "no-open"), ...x.flagNames]}),
          Options$dApplicative$dBuilder$dInternal.$DefaultProp(
            $0._2._1.tag === "Nothing" ? Data$dMaybe.Nothing : $0._2._1,
            $0._2._2.tag === "Nothing" ? Data$dMaybe.Nothing : $0._2._2
          ),
          x => $0._3(x)
        );
      })()),
      Options$dApplicative$dTypes.$Parser("NilP", false)
    )
  )
))();
const buildParser = /* #__PURE__ */ (() => Options$dApplicative$dTypes.$Parser(
  "MultP",
  Options$dApplicative$dTypes.$MultPE(
    Options$dApplicative$dTypes.$Parser(
      "MultP",
      Options$dApplicative$dTypes.$MultPE(
        Options$dApplicative$dTypes.$Parser(
          "MultP",
          Options$dApplicative$dTypes.$MultPE(
            Options$dApplicative$dTypes.parserFunctor.map(v => v1 => v2 => v3 => ({configPath: v, outputDir: v1, outDir: v2, skipOptimize: v3}))(Options$dApplicative$dBuilder.option(Options$dApplicative$dTypes.readerAsk)((() => {
              const $0 = Options$dApplicative$dBuilder$dInternal.optionMod(p => ({...p, propMetaVar: "PATH"}));
              const $1 = Options$dApplicative$dBuilder$dInternal.optionMod(p => ({...p, propHelp: Options$dApplicative$dHelp$dChunk.paragraph("Config file path")}));
              return Options$dApplicative$dBuilder$dInternal.$Mod(
                x => $1._1($0._1({...x, optNames: [Options$dApplicative$dTypes.$OptName("OptShort", "c"), Options$dApplicative$dTypes.$OptName("OptLong", "config"), ...x.optNames]})),
                Options$dApplicative$dBuilder$dInternal.$DefaultProp(Data$dMaybe.$Maybe("Just", "yoga-stories.json"), Data$dMaybe.$Maybe("Just", Data$dShow.showStringImpl)),
                x => $1._3($0._3(x))
              );
            })())),
            outputDirOption
          )
        ),
        Options$dApplicative$dBuilder.option(Options$dApplicative$dTypes.readerAsk)((() => {
          const $0 = Options$dApplicative$dBuilder$dInternal.optionMod(p => ({...p, propMetaVar: "DIR"}));
          const $1 = Options$dApplicative$dBuilder$dInternal.optionMod(p => ({...p, propHelp: Options$dApplicative$dHelp$dChunk.paragraph("Build output directory")}));
          return Options$dApplicative$dBuilder$dInternal.$Mod(
            x => $1._1($0._1({...x, optNames: [Options$dApplicative$dTypes.$OptName("OptLong", "out-dir"), ...x.optNames]})),
            Options$dApplicative$dBuilder$dInternal.$DefaultProp(Data$dMaybe.$Maybe("Just", "dist"), Data$dMaybe.$Maybe("Just", Data$dShow.showStringImpl)),
            x => $1._3($0._3(x))
          );
        })())
      )
    ),
    Options$dApplicative$dTypes.$Parser(
      "AltP",
      Options$dApplicative$dBuilder.flag$p(true)((() => {
        const $0 = Options$dApplicative$dBuilder$dInternal.optionMod(p => ({...p, propHelp: Options$dApplicative$dHelp$dChunk.paragraph("Skip purs-backend-es step")}));
        return Options$dApplicative$dBuilder$dInternal.$Mod(
          x => $0._1({...x, flagNames: [Options$dApplicative$dTypes.$OptName("OptLong", "skip-optimize"), ...x.flagNames]}),
          Options$dApplicative$dBuilder$dInternal.$DefaultProp(
            $0._2._1.tag === "Nothing" ? Data$dMaybe.Nothing : $0._2._1,
            $0._2._2.tag === "Nothing" ? Data$dMaybe.Nothing : $0._2._2
          ),
          x => $0._3(x)
        );
      })()),
      Options$dApplicative$dTypes.$Parser("NilP", false)
    )
  )
))();
const commandParser = /* #__PURE__ */ (() => Options$dApplicative$dTypes.$Parser(
  "AltP",
  Options$dApplicative$dExtra.hsubparser((() => {
    const $0 = Options$dApplicative$dBuilder.command("serve")({
      infoFailureCode: ExitCodes.Error,
      infoFooter: Data$dMaybe.Nothing,
      infoFullDesc: true,
      infoHeader: Data$dMaybe.Nothing,
      infoParser: Options$dApplicative$dTypes.parserFunctor.map(Serve)(serveParser),
      infoPolicy: Options$dApplicative$dTypes.Intersperse,
      infoProgDesc: Options$dApplicative$dHelp$dChunk.paragraph("Start the dev server")
    });
    const $1 = Options$dApplicative$dBuilder.command("build")({
      infoFailureCode: ExitCodes.Error,
      infoFooter: Data$dMaybe.Nothing,
      infoFullDesc: true,
      infoHeader: Data$dMaybe.Nothing,
      infoParser: Options$dApplicative$dTypes.parserFunctor.map(Build)(buildParser),
      infoPolicy: Options$dApplicative$dTypes.Intersperse,
      infoProgDesc: Options$dApplicative$dHelp$dChunk.paragraph("Production build")
    });
    return Options$dApplicative$dBuilder$dInternal.$Mod(
      x => $1._1($0._1(x)),
      Options$dApplicative$dBuilder$dInternal.$DefaultProp($1._2._1.tag === "Nothing" ? $0._2._1 : $1._2._1, $1._2._2.tag === "Nothing" ? $0._2._2 : $1._2._2),
      x => $1._3($0._3(x))
    );
  })()),
  Options$dApplicative$dTypes.parserFunctor.map(Serve)(serveParser)
))();
const cliParser = {
  infoFailureCode: ExitCodes.Error,
  infoFooter: Data$dMaybe.Nothing,
  infoFullDesc: true,
  infoHeader: /* #__PURE__ */ Options$dApplicative$dHelp$dChunk.paragraph("yoga-stories - PureScript component storybook"),
  infoParser: /* #__PURE__ */ Options$dApplicative$dInternal$dUtils.apApplyFlipped(Options$dApplicative$dTypes.parserApply)(commandParser)(Options$dApplicative$dExtra.helper),
  infoPolicy: Options$dApplicative$dTypes.Intersperse,
  infoProgDesc: Data$dMaybe.Nothing
};
const main = () => {
  const a$p = Options$dApplicative$dExtra.getArgs();
  const cmd = Options$dApplicative$dExtra.handleParseResult(Options$dApplicative$dExtra.execParserPure(Options$dApplicative$dBuilder.defaultPrefs)(cliParser)(a$p))();
  if (cmd.tag === "Serve") {
    return startDevServerImpl({
      ...cmd._1,
      outputDir: (() => {
        if (cmd._1.outputDir.tag === "Nothing") { return Data$dNullable.null; }
        if (cmd._1.outputDir.tag === "Just") { return Data$dNullable.notNull(cmd._1.outputDir._1); }
        $runtime.fail();
      })()
    })();
  }
  if (cmd.tag === "Build") {
    return buildProductionImpl({
      ...cmd._1,
      outputDir: (() => {
        if (cmd._1.outputDir.tag === "Nothing") { return Data$dNullable.null; }
        if (cmd._1.outputDir.tag === "Just") { return Data$dNullable.notNull(cmd._1.outputDir._1); }
        $runtime.fail();
      })()
    })();
  }
  $runtime.fail();
};
export {$Command, Build, Serve, buildParser, cliParser, commandParser, main, outputDirOption, serveParser};
export * from "./foreign.js";
