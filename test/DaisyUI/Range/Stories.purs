module DaisyUI.Range.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Range as Rng
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, input)
import YogaStories.Controls (select)
import YogaStories.Story (story) as S

mkRange :: { color :: String, size :: String } -> JSX
mkRange = component "RangeStory" \props -> React.do
  let colorCls = if props.color == "" then "" else "range-" <> props.color
  let sizeCls = if props.size == "" then "" else "range-" <> props.size
  pure $ div { className: "flex flex-col gap-4 w-64" }
    [ input { type: "range", className: Rng.rangeCls colorCls sizeCls } ]

default :: JSX
default = S.story "default" mkRange
  { color: select "" [ "", "primary", "secondary", "accent" ]
  , size: select "" [ "", "lg", "sm", "xs" ]
  }
