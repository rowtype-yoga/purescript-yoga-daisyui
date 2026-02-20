import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Yoga$dReact$dDOM$dInternal from "../Yoga.React.DOM.Internal/index.js";
import * as YogaStories$dControls from "../YogaStories.Controls/index.js";
import * as YogaStories$dStory from "../YogaStories.Story/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const mkTable = /* #__PURE__ */ React$dBasic$dHooks.component("TableStory")(v => pure(Yoga$dReact$dDOM$dInternal.createElementImpl(
  "div",
  {className: "flex flex-col gap-4"},
  [
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "overflow-x-auto"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "table",
          {className: "table "},
          [
            Yoga$dReact$dDOM$dInternal.createElementImpl(
              "thead",
              {},
              [
                Yoga$dReact$dDOM$dInternal.createElementImpl(
                  "tr",
                  {},
                  [
                    Yoga$dReact$dDOM$dInternal.createElementImpl("th", {}, ""),
                    Yoga$dReact$dDOM$dInternal.createElementImpl("th", {}, "Name"),
                    Yoga$dReact$dDOM$dInternal.createElementImpl("th", {}, "Job"),
                    Yoga$dReact$dDOM$dInternal.createElementImpl("th", {}, "Favorite Color")
                  ]
                )
              ]
            ),
            Yoga$dReact$dDOM$dInternal.createElementImpl(
              "tbody",
              {},
              [
                Yoga$dReact$dDOM$dInternal.createElementImpl(
                  "tr",
                  {},
                  [
                    Yoga$dReact$dDOM$dInternal.createElementImpl("th", {}, "1"),
                    Yoga$dReact$dDOM$dInternal.createElementImpl("td", {}, "Cy Ganderton"),
                    Yoga$dReact$dDOM$dInternal.createElementImpl("td", {}, "Quality Control Specialist"),
                    Yoga$dReact$dDOM$dInternal.createElementImpl("td", {}, "Blue")
                  ]
                ),
                Yoga$dReact$dDOM$dInternal.createElementImpl(
                  "tr",
                  {className: "hover"},
                  [
                    Yoga$dReact$dDOM$dInternal.createElementImpl("th", {}, "2"),
                    Yoga$dReact$dDOM$dInternal.createElementImpl("td", {}, "Hart Hagerty"),
                    Yoga$dReact$dDOM$dInternal.createElementImpl("td", {}, "Desktop Support Technician"),
                    Yoga$dReact$dDOM$dInternal.createElementImpl("td", {}, "Purple")
                  ]
                ),
                Yoga$dReact$dDOM$dInternal.createElementImpl(
                  "tr",
                  {},
                  [
                    Yoga$dReact$dDOM$dInternal.createElementImpl("th", {}, "3"),
                    Yoga$dReact$dDOM$dInternal.createElementImpl("td", {}, "Brice Swyre"),
                    Yoga$dReact$dDOM$dInternal.createElementImpl("td", {}, "Tax Accountant"),
                    Yoga$dReact$dDOM$dInternal.createElementImpl("td", {}, "Red")
                  ]
                )
              ]
            )
          ]
        )
      ]
    ),
    Yoga$dReact$dDOM$dInternal.createElementImpl(
      "div",
      {className: "overflow-x-auto"},
      [
        Yoga$dReact$dDOM$dInternal.createElementImpl(
          "table",
          {className: "table table-zebra"},
          [
            Yoga$dReact$dDOM$dInternal.createElementImpl(
              "thead",
              {},
              [
                Yoga$dReact$dDOM$dInternal.createElementImpl(
                  "tr",
                  {},
                  [
                    Yoga$dReact$dDOM$dInternal.createElementImpl("th", {}, ""),
                    Yoga$dReact$dDOM$dInternal.createElementImpl("th", {}, "Name"),
                    Yoga$dReact$dDOM$dInternal.createElementImpl("th", {}, "Job"),
                    Yoga$dReact$dDOM$dInternal.createElementImpl("th", {}, "Favorite Color")
                  ]
                )
              ]
            ),
            Yoga$dReact$dDOM$dInternal.createElementImpl(
              "tbody",
              {},
              [
                Yoga$dReact$dDOM$dInternal.createElementImpl(
                  "tr",
                  {},
                  [
                    Yoga$dReact$dDOM$dInternal.createElementImpl("th", {}, "1"),
                    Yoga$dReact$dDOM$dInternal.createElementImpl("td", {}, "Cy Ganderton"),
                    Yoga$dReact$dDOM$dInternal.createElementImpl("td", {}, "Quality Control Specialist"),
                    Yoga$dReact$dDOM$dInternal.createElementImpl("td", {}, "Blue")
                  ]
                ),
                Yoga$dReact$dDOM$dInternal.createElementImpl(
                  "tr",
                  {},
                  [
                    Yoga$dReact$dDOM$dInternal.createElementImpl("th", {}, "2"),
                    Yoga$dReact$dDOM$dInternal.createElementImpl("td", {}, "Hart Hagerty"),
                    Yoga$dReact$dDOM$dInternal.createElementImpl("td", {}, "Desktop Support Technician"),
                    Yoga$dReact$dDOM$dInternal.createElementImpl("td", {}, "Purple")
                  ]
                ),
                Yoga$dReact$dDOM$dInternal.createElementImpl(
                  "tr",
                  {},
                  [
                    Yoga$dReact$dDOM$dInternal.createElementImpl("th", {}, "3"),
                    Yoga$dReact$dDOM$dInternal.createElementImpl("td", {}, "Brice Swyre"),
                    Yoga$dReact$dDOM$dInternal.createElementImpl("td", {}, "Tax Accountant"),
                    Yoga$dReact$dDOM$dInternal.createElementImpl("td", {}, "Red")
                  ]
                )
              ]
            )
          ]
        )
      ]
    )
  ]
)))();
const $$default = /* #__PURE__ */ YogaStories$dStory.story()(YogaStories$dControls.initialValuesNilRowRow)(YogaStories$dControls.renderControlsNil)(YogaStories$dControls.toParamsNil)(YogaStories$dControls.fromParamsNil)("default")(mkTable)({});
export {$$default as default, mkTable, pure};
