module DaisyUI.Radio.Stories (default) where

import Prelude hiding (div)

import Data.Generic.Rep (class Generic)
import React.Basic (JSX)
import DaisyUI.Radio as Rad
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, input, label, span)
import YogaStories.Controls (enum)
import YogaStories.Story (story) as S

data Color = None | Primary | Secondary | Accent | Success

derive instance Generic Color _

colorClass :: Color -> String
colorClass = case _ of
  None -> ""
  Primary -> Rad.primary
  Secondary -> Rad.secondary
  Accent -> Rad.accent
  Success -> Rad.success

mkRadio :: { color :: Color } -> JSX
mkRadio = component "RadioStory" \props -> React.do
  pure $ div { className: "flex flex-col gap-2" }
    [ label { className: "flex items-center gap-2 cursor-pointer" }
        [ input { type: "radio", name: "radio-story", className: Rad.radioCls (colorClass props.color) "", checked: true }
        , span {} "Option A"
        ]
    , label { className: "flex items-center gap-2 cursor-pointer" }
        [ input { type: "radio", name: "radio-story", className: Rad.radioCls (colorClass props.color) "" }
        , span {} "Option B"
        ]
    ]

default :: JSX
default = S.story "default" mkRadio
  { color: enum Primary }
