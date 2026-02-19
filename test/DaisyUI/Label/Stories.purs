module DaisyUI.Label.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Label as L
import DaisyUI.Input as I
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, input, label)
import YogaStories.Story (story) as S

mkLabel :: {} -> JSX
mkLabel = component "LabelStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4 w-full max-w-xs" }
    [ label { className: I.inputCls "" "" }
        [ L.labelSpan "Name"
        , input { type: "text", placeholder: "Type here" }
        ]
    , L.floatingLabel
        [ input { type: "text", className: I.inputCls "" "", placeholder: " " }
        , L.labelSpan "Floating label"
        ]
    ]

default :: JSX
default = S.story "default" mkLabel {}
