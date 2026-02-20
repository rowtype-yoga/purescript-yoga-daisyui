import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as YogaStories$dConfig from "../YogaStories.Config/index.js";
import * as YogaStories$dDiscovery from "../YogaStories.Discovery/index.js";
import * as YogaStories$dModuleInfo from "../YogaStories.ModuleInfo/index.js";
const traverse = /* #__PURE__ */ (() => Data$dTraversable.traversableArray.traverse(Effect$dAff.applicativeAff))();
const discoverStories = config => Effect$dAff._bind(YogaStories$dDiscovery.listOutputModules(config.outputDir))(allModules => traverse(YogaStories$dModuleInfo.readModuleInfo(config.outputDir))(YogaStories$dDiscovery.filterModules(config)(allModules)));
const discoverStoriesFromFile = configPath => Effect$dAff._bind(YogaStories$dConfig.readConfig(configPath))(config => discoverStories(config));
export {discoverStories, discoverStoriesFromFile, traverse};
