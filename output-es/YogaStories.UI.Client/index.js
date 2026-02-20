import * as $runtime from "../runtime.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNullable from "../Data.Nullable/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dUncurried from "../Effect.Uncurried/index.js";
import * as Promise$dAff from "../Promise.Aff/index.js";
import * as React$dBasic from "../React.Basic/index.js";
import * as React$dBasic$dDOM$dClient from "../React.Basic.DOM.Client/index.js";
import * as React$dBasic$dDOM$dGenerated from "../React.Basic.DOM.Generated/index.js";
import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dUI$dHash from "../YogaStories.UI.Hash/index.js";
import * as YogaStories$dUI$dStyles from "../YogaStories.UI.Styles/index.js";
import {
  codeViewerComponent,
  detailsElImpl,
  dynamicImportImpl,
  fetchStoryDataImpl,
  getElementByIdImpl,
  onModuleUpdateImpl,
  onStoriesUpdateImpl,
  summaryElImpl,
  unsafeGetPropertyImpl
} from "./foreign.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const div = /* #__PURE__ */ React$dBasic.element(React$dBasic$dDOM$dGenerated._div$p);
const useEffect = /* #__PURE__ */ React$dBasic$dHooks.useEffect({
  eq: ra => rb => (ra.mod.tag === "Nothing" ? rb.mod.tag === "Nothing" : ra.mod.tag === "Just" && rb.mod.tag === "Just" && ra.mod._1 === rb.mod._1) && ra.ver === rb.ver
});
const input = /* #__PURE__ */ React$dBasic.element(React$dBasic$dDOM$dGenerated._input$p);
const unsafeGetProperty = /* #__PURE__ */ Effect$dUncurried.runEffectFn2(unsafeGetPropertyImpl);
const summaryEl = summaryElImpl;
const storyView = /* #__PURE__ */ React$dBasic$dHooks.component("StoryView")(props => {
  const $0 = unsafeGetProperty(props.exportName)(props.mod);
  return () => {
    const a = $0();
    return pure(div({className: props.layoutClass + " " + props.stageClass, children: [a]}))();
  };
})();
const sourceView = v => {
  if (v.tag === "Nothing") { return React$dBasic.empty; }
  if (v.tag === "Just") {
    const $0 = Data$dString$dCodeUnits.stripSuffix(".Stories")(v._1.moduleName);
    const label = (() => {
      if ($0.tag === "Nothing") { return v._1.moduleName; }
      if ($0.tag === "Just") { return $0._1; }
      $runtime.fail();
    })();
    return React$dBasic$dDOM$dGenerated.div1({
      children: [
        (() => {
          const v1 = Data$dNullable.nullable(v._1.componentSourceCode, Data$dMaybe.Nothing, Data$dMaybe.Just);
          if (v1.tag === "Nothing") { return React$dBasic.empty; }
          if (v1.tag === "Just") {
            return Yoga$dReact$dDOM$dInternal.createElementImpl(
              "details",
              {style: YogaStories$dUI$dStyles.sourceToggle},
              [
                Yoga$dReact$dDOM$dInternal.createElementImpl("summary", {style: YogaStories$dUI$dStyles.sourceSummary}, "Component: " + label),
                Yoga$dReact$dDOM$dInternal.createElementImpl("div", {style: YogaStories$dUI$dStyles.sourceCode}, [React$dBasic.element(codeViewerComponent)({code: v1._1})])
              ]
            );
          }
          $runtime.fail();
        })(),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "details",
          {style: YogaStories$dUI$dStyles.sourceToggle},
          [
            Yoga$dReact$dDOM$dInternal.createElementImpl("summary", {style: YogaStories$dUI$dStyles.sourceSummary}, "Story: " + v._1.sourcePath),
            Yoga$dReact$dDOM$dInternal.createElementImpl("div", {style: YogaStories$dUI$dStyles.sourceCode}, [React$dBasic.element(codeViewerComponent)({code: v._1.sourceCode})])
          ]
        )
      ]
    });
  }
  $runtime.fail();
};
const mainPanel = /* #__PURE__ */ React$dBasic$dHooks.component("MainPanel")(props => () => {
  const a = React$dBasic$dHooks.useState_(($0, $1) => Data$dTuple.$Tuple($0, $1), Data$dMaybe.Nothing);
  const a$1 = React$dBasic$dHooks.useState$p(true)();
  const a$2 = React$dBasic$dHooks.useState_(($0, $1) => Data$dTuple.$Tuple($0, $1), 0);
  const $0 = onModuleUpdateImpl(v3 => a$2._2(v4 => v4 + 1 | 0));
  React$dBasic$dHooks.useEffect_(
    (v, v1) => true,
    undefined,
    () => {
      $0();
      return () => {};
    }
  );
  useEffect({mod: props.selected.moduleName, ver: a$2._1})((() => {
    if (props.selected.moduleName.tag === "Nothing") { return () => () => {}; }
    if (props.selected.moduleName.tag === "Just") {
      const $1 = props.selected.moduleName._1;
      const $2 = Effect$dAff._makeFiber(
        Effect$dAff.ffiUtil,
        Effect$dAff._bind(Effect$dAff._bind(Effect$dAff._liftEffect(dynamicImportImpl("/output/" + $1 + "/index.js")))(Promise$dAff.toAff$p(Promise$dAff.coerce)))(mod => Effect$dAff._liftEffect(a._2(v3 => Data$dMaybe.$Maybe(
          "Just",
          {name: $1, mod}
        ))))
      );
      return () => {
        const fiber = $2();
        fiber.run();
        return () => {};
      };
    }
    $runtime.fail();
  })())();
  const a$3 = React$dBasic$dHooks.useState$p(true)();
  const layoutClass = a$3._1 ? "ys-layout-right" : "ys-layout-bottom";
  const stageClass = a$1._1 ? "ys-stage-dark" : "ys-stage-light";
  const stageLabel = a$1._1 ? "☀" : "☾";
  const toggleLabel = a$3._1 ? "↓" : "→";
  return pure((() => {
    if (props.selected.moduleName.tag === "Just" && props.selected.exportName.tag === "Just") {
      const $1 = props.selected.moduleName._1;
      const $2 = Data$dString$dCodeUnits.stripSuffix(".Stories")($1);
      const label = (() => {
        if ($2.tag === "Nothing") { return $1; }
        if ($2.tag === "Just") { return $2._1; }
        $runtime.fail();
      })();
      const key = props.selected.exportName._1 === "default" ? label : label + " / " + props.selected.exportName._1;
      const info = Data$dArray.find(s => s.moduleName === $1)(props.stories);
      if (a._1.tag === "Nothing") {
        return Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {style: Yoga$dReact$dDOM$dInternal.mergeStyles([YogaStories$dUI$dStyles.muted, YogaStories$dUI$dStyles.panel])},
          "Loading..."
        );
      }
      if (a._1.tag === "Just") {
        return Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {style: YogaStories$dUI$dStyles.panel},
          [
            Yoga$dReact$dDOM$dInternal.createElementImpl(
              "div",
              {style: YogaStories$dUI$dStyles.storyHeader},
              [
                Yoga$dReact$dDOM$dInternal.createElementImpl("h3", {style: YogaStories$dUI$dStyles.storyTitle}, key),
                Yoga$dReact$dDOM$dInternal.createElementImpl(
                  "div",
                  {style: YogaStories$dUI$dStyles.toolbarButtons},
                  [
                    Yoga$dReact$dDOM$dInternal.createElementImpl(
                      "button",
                      {
                        style: YogaStories$dUI$dStyles.layoutToggle,
                        onClick: (() => {
                          const $3 = a$1._2(!a$1._1);
                          return v => $3();
                        })()
                      },
                      stageLabel
                    ),
                    Yoga$dReact$dDOM$dInternal.createElementImpl(
                      "button",
                      {
                        style: YogaStories$dUI$dStyles.layoutToggle,
                        onClick: (() => {
                          const $3 = a$3._2(!a$3._1);
                          return v => $3();
                        })()
                      },
                      toggleLabel
                    )
                  ]
                )
              ]
            ),
            storyView({mod: a._1._1.mod, exportName: props.selected.exportName._1, layoutClass, stageClass}),
            sourceView(info)
          ]
        );
      }
      $runtime.fail();
    }
    return Yoga$dReact$dDOM$dInternal.createElementImpl("div", {style: YogaStories$dUI$dStyles.panelPlaceholder}, "Select a story");
  })())();
})();
const detailsEl = detailsElImpl;
const sidebar = /* #__PURE__ */ React$dBasic$dHooks.component("Sidebar")(props => {
  const $0 = React$dBasic$dHooks.useState$p("");
  return () => {
    const a = $0();
    const needle = Data$dString$dCommon.toLower(a._1);
    return pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
      "nav",
      {style: YogaStories$dUI$dStyles.sidebarNav},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {style: YogaStories$dUI$dStyles.searchBox},
          [
            input({
              type: "text",
              placeholder: "Search...",
              value: a._1,
              onChange: x => {
                const $1 = Data$dNullable.nullable(x.target.value, Data$dMaybe.Nothing, Data$dMaybe.Just);
                if ($1.tag === "Just") { return a._2($1._1)(); }
              },
              style: {
                width: "100%",
                padding: "6px 10px",
                fontSize: "13px",
                border: "1px solid #334155",
                borderRadius: "4px",
                background: "#1e293b",
                color: "#e2e8f0",
                outline: "none",
                fontFamily: "inherit"
              }
            })
          ]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "div",
          {style: YogaStories$dUI$dStyles.sidebarContent},
          [
            Yoga$dReact$dDOM$dInternal.createElementImpl(
              "div",
              {},
              Data$dFunctor.arrayMap(s => {
                const $1 = Data$dString$dCodeUnits.stripSuffix(".Stories")(s.moduleName);
                const label = (() => {
                  if ($1.tag === "Nothing") { return s.moduleName; }
                  if ($1.tag === "Just") { return $1._1; }
                  $runtime.fail();
                })();
                const isSelected = props.selected.moduleName.tag === "Nothing" ? false : props.selected.moduleName.tag === "Just" && props.selected.moduleName._1 === s.moduleName;
                if (s.exports.length === 1 && s.exports[0] === "default") {
                  return Yoga$dReact$dDOM$dInternal.createElementImpl(
                    "button",
                    {
                      style: {
                        display: "block",
                        width: "100%",
                        textAlign: "left",
                        padding: "6px 24px",
                        fontSize: "12px",
                        border: "none",
                        cursor: "pointer",
                        fontFamily: "inherit",
                        color: isSelected ? "#ffffff" : "#94a3b8",
                        backgroundColor: isSelected ? "#1e293b" : "transparent"
                      },
                      onClick: (() => {
                        const $2 = props.onSelect(s.moduleName)("default");
                        return v => $2();
                      })()
                    },
                    label
                  );
                }
                return detailsElImpl(isSelected)([
                  summaryElImpl(label),
                  Yoga$dReact$dDOM$dInternal.createElementImpl(
                    "div",
                    {},
                    Data$dFunctor.arrayMap((() => {
                      const $2 = s.moduleName;
                      return expName => Yoga$dReact$dDOM$dInternal.createElementImpl(
                        "button",
                        {
                          style: (() => {
                            const $3 = (props.selected.moduleName.tag === "Nothing" ? false : props.selected.moduleName.tag === "Just" && props.selected.moduleName._1 === $2) && (props.selected.exportName.tag === "Nothing"
                              ? false
                              : props.selected.exportName.tag === "Just" && props.selected.exportName._1 === expName);
                            return {
                              display: "block",
                              width: "100%",
                              textAlign: "left",
                              padding: "6px 24px",
                              fontSize: "12px",
                              border: "none",
                              cursor: "pointer",
                              fontFamily: "inherit",
                              color: $3 ? "#ffffff" : "#94a3b8",
                              backgroundColor: $3 ? "#1e293b" : "transparent"
                            };
                          })(),
                          onClick: (() => {
                            const $3 = props.onSelect($2)(expName);
                            return v => $3();
                          })()
                        },
                        expName
                      );
                    })())(s.exports)
                  )
                ]);
              })(Data$dArray.filterImpl(
                s => {
                  const $1 = Data$dString$dCodeUnits.contains(needle);
                  return Data$dString$dCodeUnits.contains(needle)(Data$dString$dCommon.toLower(s.moduleName)) || Data$dArray.anyImpl(
                    x => $1(Data$dString$dCommon.toLower(x)),
                    s.exports
                  );
                },
                props.stories
              ))
            )
          ]
        ),
        Yoga$dReact$dDOM$dInternal.createElementImpl("div", {style: YogaStories$dUI$dStyles.sidebarBranding}, "yoga-stories")
      ]
    ))();
  };
})();
const autoSelect = stories => sel => {
  const firstStory = ss => {
    if (0 < ss.length) {
      return {
        moduleName: Data$dMaybe.$Maybe("Just", ss[0].moduleName),
        exportName: (() => {
          const v = Data$dArray.find(v1 => v1 === "default")(ss[0].exports);
          if (v.tag === "Just") { return Data$dMaybe.$Maybe("Just", v._1); }
          if (v.tag === "Nothing") {
            if (0 < ss[0].exports.length) { return Data$dMaybe.$Maybe("Just", ss[0].exports[0]); }
            return Data$dMaybe.Nothing;
          }
          $runtime.fail();
        })()
      };
    }
    return sel;
  };
  if (sel.exportName.tag === "Nothing") {
    if (sel.moduleName.tag === "Nothing") { return firstStory(stories); }
    if (sel.moduleName.tag === "Just") {
      const $0 = sel.moduleName._1;
      const v = Data$dArray.find(s => s.moduleName === $0)(stories);
      if (v.tag === "Just") {
        return {
          moduleName: Data$dMaybe.$Maybe("Just", $0),
          exportName: (() => {
            const v$1 = Data$dArray.find(v1 => v1 === "default")(v._1.exports);
            if (v$1.tag === "Just") { return Data$dMaybe.$Maybe("Just", v$1._1); }
            if (v$1.tag === "Nothing") {
              if (0 < v._1.exports.length) { return Data$dMaybe.$Maybe("Just", v._1.exports[0]); }
              return Data$dMaybe.Nothing;
            }
            $runtime.fail();
          })()
        };
      }
      if (v.tag === "Nothing") { return firstStory(stories); }
      $runtime.fail();
    }
  }
  return sel;
};
const app = /* #__PURE__ */ React$dBasic$dHooks.component("App")(initialStories => () => {
  const a = YogaStories$dUI$dHash.useHashRoute();
  const a$1 = React$dBasic$dHooks.useState$p(initialStories)();
  const $0 = onStoriesUpdateImpl((() => {
    const $0 = Effect$dAff._makeFiber(
      Effect$dAff.ffiUtil,
      Effect$dAff._bind(Effect$dAff._bind(Effect$dAff._liftEffect(fetchStoryDataImpl))(Promise$dAff.toAff$p(Promise$dAff.coerce)))(fresh => Effect$dAff._liftEffect(a$1._2(fresh)))
    );
    return () => {
      const fiber = $0();
      fiber.run();
    };
  })());
  React$dBasic$dHooks.useEffect_(
    (v, v1) => true,
    undefined,
    () => {
      $0();
      return () => {};
    }
  );
  const selected = autoSelect(a$1._1)(a._1);
  return pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
    "div",
    {style: YogaStories$dUI$dStyles.root},
    [
      Yoga$dReact$dDOM$dInternal.createElementImpl(
        "div",
        {style: YogaStories$dUI$dStyles.row},
        [sidebar({stories: a$1._1, selected, onSelect: a._2}), mainPanel({selected, stories: a$1._1})]
      )
    ]
  ))();
})();
const clientMain = /* #__PURE__ */ (() => {
  const $0 = Effect$dAff._makeFiber(
    Effect$dAff.ffiUtil,
    Effect$dAff._bind(Effect$dAff._bind(Effect$dAff._liftEffect(fetchStoryDataImpl))(Promise$dAff.toAff$p(Promise$dAff.coerce)))(stories => Effect$dAff._liftEffect((() => {
      const $0 = getElementByIdImpl("app");
      return () => {
        const el = $0();
        const root = React$dBasic$dDOM$dClient.createRoot(el)();
        return React$dBasic$dDOM$dClient.renderRoot(root)(app(stories))();
      };
    })()))
  );
  return () => {
    const fiber = $0();
    fiber.run();
  };
})();
export {app, autoSelect, clientMain, detailsEl, div, input, mainPanel, pure, sidebar, sourceView, storyView, summaryEl, unsafeGetProperty, useEffect};
export * from "./foreign.js";
