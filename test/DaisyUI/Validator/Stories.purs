module DaisyUI.Validator.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Validator as V
import DaisyUI.Input as I
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, input)
import YogaStories.Story (story) as S

mkValidator :: {} -> JSX
mkValidator = component "ValidatorStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4 w-full max-w-xs" }
    [ input { type: "text", className: I.inputCls "" "" <> " " <> V.validatorCls, required: true, placeholder: "Email" }
    , V.validatorHint "Please enter a valid email address"
    ]

default :: JSX
default = S.story "default" mkValidator {}
