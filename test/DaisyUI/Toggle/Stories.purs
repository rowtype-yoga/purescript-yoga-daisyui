module DaisyUI.Toggle.Stories (default) where

import Prelude hiding (div)

import Data.Generic.Rep (class Generic)
import React.Basic (JSX)
import DaisyUI.Toggle as T
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, input, label, span)
import YogaStories.Controls (enum)
import YogaStories.Story (story) as S

data Color = None | Primary | Secondary | Accent | Success

derive instance Generic Color _

colorClass :: Color -> String
colorClass = case _ of
  None -> ""
  Primary -> T.primary
  Secondary -> T.secondary
  Accent -> T.accent
  Success -> T.success

mkToggle :: { color :: Color } -> JSX
mkToggle = component "ToggleStory" \props -> React.do
  pure $ div { className: "flex flex-col gap-4" }
    [ label { className: "flex items-center gap-2 cursor-pointer" }
        [ input { type: "checkbox", className: T.toggleCls (colorClass props.color) "", checked: true }
        , span {} "Toggle me"
        ]
    ]

default :: JSX
default = S.story "default" mkToggle
  { color: enum Primary }
