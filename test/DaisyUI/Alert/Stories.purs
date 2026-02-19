module DaisyUI.Alert.Stories (default) where

import Prelude hiding (div)

import Data.Generic.Rep (class Generic)
import React.Basic (JSX)
import DaisyUI.Alert as Alert
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, span)
import YogaStories.Controls (enum)
import YogaStories.Story (story) as S

data Color = Info | Success | Warning | Error

derive instance Generic Color _

colorClass :: Color -> String
colorClass = case _ of
  Info -> Alert.info
  Success -> Alert.success
  Warning -> Alert.warning
  Error -> Alert.error

mkAlert :: { color :: Color } -> JSX
mkAlert = component "AlertStory" \props -> React.do
  pure $ div { className: "flex flex-col gap-4" }
    [ Alert.alert (colorClass props.color)
        [ span {} "This is an alert message." ]
    ]

default :: JSX
default = S.story "default" mkAlert
  { color: enum Info }
