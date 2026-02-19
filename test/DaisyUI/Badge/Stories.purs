module DaisyUI.Badge.Stories (default) where

import Prelude hiding (div)

import Data.Generic.Rep (class Generic)
import React.Basic (JSX)
import DaisyUI.Badge as Badge
import Yoga.React (component)
import Yoga.React.DOM.HTML (div)
import YogaStories.Controls (enum)
import YogaStories.Story (story) as S

data Color = Neutral | Primary | Secondary | Accent | Info | Success | Warning | Error | Ghost

derive instance Generic Color _

data Size = ExtraSmall | Small | Medium | Large

derive instance Generic Size _

data Modifier = None | Outline | Soft | Dash

derive instance Generic Modifier _

colorClass :: Color -> String
colorClass = case _ of
  Neutral -> Badge.neutral
  Primary -> Badge.primary
  Secondary -> Badge.secondary
  Accent -> Badge.accent
  Info -> Badge.info
  Success -> Badge.success
  Warning -> Badge.warning
  Error -> Badge.error
  Ghost -> Badge.ghost

sizeClass :: Size -> String
sizeClass = case _ of
  ExtraSmall -> Badge.xs
  Small -> Badge.sm
  Medium -> Badge.md
  Large -> Badge.lg

modifierClass :: Modifier -> String
modifierClass = case _ of
  None -> ""
  Outline -> Badge.outline
  Soft -> Badge.soft
  Dash -> Badge.dash

mkBadge :: { label :: String, color :: Color, size :: Size, modifier :: Modifier } -> JSX
mkBadge = component "BadgeStory" \props -> React.do
  pure $ div { className: "flex flex-col gap-4" }
    [ Badge.badge (colorClass props.color <> " " <> modifierClass props.modifier) (sizeClass props.size) props.label
    ]

default :: JSX
default = S.story "default" mkBadge
  { label: "Badge"
  , color: enum Primary
  , size: enum Medium
  , modifier: enum None
  }
