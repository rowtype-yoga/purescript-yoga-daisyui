module DaisyUI.Input.Stories (default) where

import Prelude hiding (div)

import Data.Generic.Rep (class Generic)
import React.Basic (JSX)
import DaisyUI.Input as I
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, input)
import YogaStories.Controls (enum)
import YogaStories.Story (story) as S

data Color = None | Primary | Secondary | Accent | Info | Success | Warning | Error

derive instance Generic Color _

colorClass :: Color -> String
colorClass = case _ of
  None -> ""
  Primary -> I.primary
  Secondary -> I.secondary
  Accent -> I.accent
  Info -> I.info
  Success -> I.success
  Warning -> I.warning
  Error -> I.error

mkInput :: { color :: Color } -> JSX
mkInput = component "InputStory" \props -> React.do
  pure $ div { className: "flex flex-col gap-4 w-full max-w-xs" }
    [ input { type: "text", className: I.inputCls (colorClass props.color) "", placeholder: "Type here..." }
    , input { type: "text", className: I.inputCls (colorClass props.color) I.sm, placeholder: "Small" }
    , input { type: "text", className: I.inputCls (colorClass props.color) I.lg, placeholder: "Large" }
    ]

default :: JSX
default = S.story "default" mkInput
  { color: enum None }
