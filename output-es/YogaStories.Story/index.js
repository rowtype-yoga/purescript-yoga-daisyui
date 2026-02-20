import * as $runtime from "../runtime.js";
import * as Effect$dUnsafe from "../Effect.Unsafe/index.js";
import * as Foreign$dObject from "../Foreign.Object/index.js";
import * as React$dBasic from "../React.Basic/index.js";
import * as React$dBasic$dDOM$dGenerated from "../React.Basic.DOM.Generated/index.js";
import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
import * as Yoga$dJSON from "../Yoga.JSON/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dUI$dHash from "../YogaStories.UI.Hash/index.js";
const readJSON_ = /* #__PURE__ */ Yoga$dJSON.readJSON_(/* #__PURE__ */ Yoga$dJSON.readForeignObject(Yoga$dJSON.readForeignString));
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const div = /* #__PURE__ */ React$dBasic.element(React$dBasic$dDOM$dGenerated._div$p);
const story = () => dictInitialValues => dictRenderControls => dictToParams => dictFromParams => name => comp => schema => Effect$dUnsafe.unsafePerformEffect(React$dBasic$dHooks.component("StoryRenderer")(props => {
  const defaults = dictInitialValues.initialValues(Type$dProxy.Proxy)(props.schema)({});
  return () => {
    const a = YogaStories$dUI$dHash.readHashProps();
    const a$1 = React$dBasic$dHooks.useState$p((() => {
      if (a.tag === "Just") {
        const $0 = readJSON_(a._1);
        return dictFromParams.fromParams(Type$dProxy.Proxy)(props.schema)((() => {
          if ($0.tag === "Nothing") { return Foreign$dObject.empty; }
          if ($0.tag === "Just") { return $0._1; }
          $runtime.fail();
        })())(defaults);
      }
      return defaults;
    })())();
    return pure(React$dBasic$dDOM$dGenerated.div1({
      children: [
        div({className: "ys-preview", children: [props.component(a$1._1)]}),
        div({
          className: "ys-controls",
          children: [
            YogaStories$dControls.controlsPanel(dictRenderControls.renderControls(Type$dProxy.Proxy)(props.schema)(a$1._1)(newValues => {
              const $0 = a$1._2(newValues);
              return () => {
                $0();
                return YogaStories$dUI$dHash.writeHashProps(Yoga$dJSON._unsafeStringify(Foreign$dObject._mapWithKey(
                  dictToParams.toParams(Type$dProxy.Proxy)(props.schema)(newValues),
                  v => Unsafe$dCoerce.unsafeCoerce
                )))();
              };
            }))
          ]
        })
      ]
    }))();
  };
}))({name, component: comp, schema});
export {div, pure, readJSON_, story};
