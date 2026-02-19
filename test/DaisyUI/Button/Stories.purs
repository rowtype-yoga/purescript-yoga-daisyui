module DaisyUI.Button.Stories (default) where

import Prelude hiding (div)

import Data.Generic.Rep (class Generic)
import React.Basic (JSX)
import DaisyUI.Button as Btn
import Yoga.React (component)
import Yoga.React.DOM.HTML (div)
import YogaStories.Controls (enum)
import YogaStories.Story (story) as S

data Color = Neutral | Primary | Secondary | Accent | Info | Success | Warning | Error | Ghost | Link

derive instance Generic Color _

data Size = ExtraSmall | Small | Medium | Large

derive instance Generic Size _

data Modifier = None | Outline | Soft | Dash

derive instance Generic Modifier _

colorClass :: Color -> String
colorClass = case _ of
  Neutral -> Btn.neutral
  Primary -> Btn.primary
  Secondary -> Btn.secondary
  Accent -> Btn.accent
  Info -> Btn.info
  Success -> Btn.success
  Warning -> Btn.warning
  Error -> Btn.error
  Ghost -> Btn.ghost
  Link -> Btn.link

sizeClass :: Size -> String
sizeClass = case _ of
  ExtraSmall -> Btn.xs
  Small -> Btn.sm
  Medium -> Btn.md
  Large -> Btn.lg

modifierClass :: Modifier -> String
modifierClass = case _ of
  None -> ""
  Outline -> Btn.outline
  Soft -> Btn.soft
  Dash -> Btn.dash

mkButton :: { label :: String, color :: Color, size :: Size, modifier :: Modifier } -> JSX
mkButton = component "ButtonStory" \props -> React.do
  pure $ div { className: "flex flex-col gap-4" }
    [ Btn.btn (colorClass props.color <> " " <> modifierClass props.modifier) (sizeClass props.size) props.label
    ]

default :: JSX
default = S.story "default" mkButton
  { label: "Button"
  , color: enum Primary
  , size: enum Medium
  , modifier: enum None
  }
