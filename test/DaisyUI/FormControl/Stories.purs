module DaisyUI.FormControl.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.FormControl as FC
import DaisyUI.Input as I
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, input, label)
import YogaStories.Story (story) as S

mkFormControl :: {} -> JSX
mkFormControl = component "FormControlStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4 w-full max-w-xs" }
    [ FC.fieldset
        [ FC.fieldsetLegend "User details"
        , label { className: "label" } "Name"
        , input { type: "text", className: I.inputCls "" "", placeholder: "Name" }
        , label { className: "label" } "Email"
        , input { type: "email", className: I.inputCls "" "", placeholder: "Email" }
        , label { className: "label" } "Optional"
        ]
    ]

default :: JSX
default = S.story "default" mkFormControl {}
