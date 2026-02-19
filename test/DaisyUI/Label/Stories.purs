module DaisyUI.Label.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Label as L
import DaisyUI.Input as I
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, input)
import YogaStories.Story (story) as S

mkLabel :: {} -> JSX
mkLabel = component "LabelStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4 w-full max-w-xs" }
    [ L.floatingLabel
        [ input { type: "text", className: I.inputCls "" "", placeholder: " " }
        , L.labelSpan "Name"
        ]
    , L.floatingLabel
        [ input { type: "email", className: I.inputCls I.bordered "", placeholder: " " }
        , L.labelSpan "Email"
        ]
    ]

default :: JSX
default = S.story "default" mkLabel {}
