module DaisyUI.Checkbox.Stories (default) where

import Prelude hiding (div)

import Data.Generic.Rep (class Generic)
import React.Basic (JSX)
import DaisyUI.Checkbox as CB
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, input, label, span)
import YogaStories.Controls (enum)
import YogaStories.Story (story) as S

data Color = None | Primary | Secondary | Accent | Success | Warning | Error

derive instance Generic Color _

colorClass :: Color -> String
colorClass = case _ of
  None -> ""
  Primary -> CB.primary
  Secondary -> CB.secondary
  Accent -> CB.accent
  Success -> CB.success
  Warning -> CB.warning
  Error -> CB.error

mkCheckbox :: { color :: Color } -> JSX
mkCheckbox = component "CheckboxStory" \props -> React.do
  pure $ div { className: "flex flex-col gap-4" }
    [ label { className: "flex items-center gap-2 cursor-pointer" }
        [ input { type: "checkbox", className: CB.checkboxCls (colorClass props.color) "", checked: true }
        , span {} "Remember me"
        ]
    ]

default :: JSX
default = S.story "default" mkCheckbox
  { color: enum Primary }
