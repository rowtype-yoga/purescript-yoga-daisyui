module DaisyUI.Range.Stories (default) where

import Prelude hiding (div)

import Data.Generic.Rep (class Generic)
import React.Basic (JSX)
import DaisyUI.Range as Rng
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, input)
import YogaStories.Controls (enum)
import YogaStories.Story (story) as S

data Color = None | Primary | Secondary | Accent

derive instance Generic Color _

colorClass :: Color -> String
colorClass = case _ of
  None -> ""
  Primary -> Rng.primary
  Secondary -> Rng.secondary
  Accent -> Rng.accent

mkRange :: { color :: Color } -> JSX
mkRange = component "RangeStory" \props -> React.do
  pure $ div { className: "flex flex-col gap-4 w-64" }
    [ input { type: "range", className: Rng.rangeCls (colorClass props.color) "" }
    , input { type: "range", className: Rng.rangeCls (colorClass props.color) Rng.sm }
    ]

default :: JSX
default = S.story "default" mkRange
  { color: enum Primary }
