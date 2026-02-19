module DaisyUI.Tooltip.Stories (default) where

import Prelude hiding (div)

import Data.Generic.Rep (class Generic)
import React.Basic (JSX)
import DaisyUI.Tooltip as Tip
import DaisyUI.Button as Btn
import Yoga.React (component)
import Yoga.React.DOM.HTML (div)
import YogaStories.Controls (enum)
import YogaStories.Story (story) as S

data Position = Top | Bottom | Left | Right

derive instance Generic Position _

positionClass :: Position -> String
positionClass = case _ of
  Top -> Tip.top
  Bottom -> Tip.bottom
  Left -> Tip.left
  Right -> Tip.right

mkTooltip :: { position :: Position, tip :: String } -> JSX
mkTooltip = component "TooltipStory" \props -> React.do
  pure $ div { className: "flex items-center justify-center p-16" }
    [ Tip.tooltip props.tip (positionClass props.position)
        [ Btn.btn Btn.primary Btn.md "Hover me" ]
    ]

default :: JSX
default = S.story "default" mkTooltip
  { position: enum Top
  , tip: "Hello!"
  }
