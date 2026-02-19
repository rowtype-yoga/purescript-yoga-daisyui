module DaisyUI.Input.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Input as I
import DaisyUI.Label as L
import DaisyUI.FormControl as FC
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, input, label)
import YogaStories.Story (story) as S

mkInput :: {} -> JSX
mkInput = component "InputStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4 w-full max-w-xs" }
    [ FC.fieldset
        [ FC.fieldsetLegend "What is your name?"
        , input { type: "text", className: I.inputCls "" "", placeholder: "Type here" }
        , label { className: "label" } "Optional"
        ]
    , L.floatingLabel
        [ input { type: "email", className: I.inputCls I.bordered "", placeholder: "alex@example.com" }
        , L.labelSpan "Email"
        ]
    , div { className: "flex flex-wrap gap-2" }
        [ input { type: "text", className: I.inputCls I.primary "", placeholder: "Primary" }
        , input { type: "text", className: I.inputCls I.secondary "", placeholder: "Secondary" }
        , input { type: "text", className: I.inputCls I.accent "", placeholder: "Accent" }
        ]
    , div { className: "flex flex-wrap gap-2 items-center" }
        [ input { type: "text", className: I.inputCls "" I.lg, placeholder: "Large" }
        , input { type: "text", className: I.inputCls "" "", placeholder: "Normal" }
        , input { type: "text", className: I.inputCls "" I.sm, placeholder: "Small" }
        , input { type: "text", className: I.inputCls "" I.xs, placeholder: "Tiny" }
        ]
    , input { type: "text", className: I.inputCls "" "" <> " w-full", disabled: true, placeholder: "Disabled" }
    ]

default :: JSX
default = S.story "default" mkInput {}
