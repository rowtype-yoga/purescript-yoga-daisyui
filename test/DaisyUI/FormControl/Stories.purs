module DaisyUI.FormControl.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.FormControl as FC
import DaisyUI.Input as I
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, input)
import YogaStories.Story (story) as S

mkFormControl :: {} -> JSX
mkFormControl = component "FormControlStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4 w-full max-w-xs" }
    [ FC.fieldset
        [ FC.fieldsetLegend "Username"
        , input { type: "text", className: I.inputCls "" "", placeholder: "Type here" }
        , FC.labelTextAlt "Required field"
        ]
    , FC.fieldset
        [ FC.fieldsetLegend "Email"
        , input { type: "text", className: I.inputCls I.primary "", placeholder: "hello@example.com" }
        ]
    ]

default :: JSX
default = S.story "default" mkFormControl {}
