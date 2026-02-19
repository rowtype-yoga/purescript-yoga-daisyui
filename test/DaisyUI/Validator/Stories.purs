module DaisyUI.Validator.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Validator as V
import DaisyUI.Input as I
import DaisyUI.FormControl as FC
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, input)
import YogaStories.Story (story) as S

mkValidator :: {} -> JSX
mkValidator = component "ValidatorStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4 w-full max-w-xs" }
    [ FC.fieldset
        [ FC.fieldsetLegend "Email"
        , div { className: V.validatorCls }
            [ input { type: "email", className: I.inputCls "" "", required: true, placeholder: "mail@site.com" }
            , V.validatorHint "Enter valid email address"
            ]
        ]
    , FC.fieldset
        [ FC.fieldsetLegend "Username"
        , div { className: V.validatorCls }
            [ input { type: "text", className: I.inputCls "" "", required: true, placeholder: "Username" }
            , V.validatorHint "Required"
            ]
        ]
    ]

default :: JSX
default = S.story "default" mkValidator {}
