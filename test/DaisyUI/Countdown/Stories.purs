module DaisyUI.Countdown.Stories (default) where

import Prelude hiding (div)

import Data.Int (floor)
import React.Basic (JSX)
import DaisyUI.Countdown as CD
import Yoga.React (component)
import Yoga.React.DOM.HTML (div)
import YogaStories.Controls (slider)
import YogaStories.Story (story) as S

mkCountdown :: { value :: Number } -> JSX
mkCountdown = component "CountdownStory" \props -> React.do
  pure $ div { className: "flex flex-col gap-4 text-4xl" }
    [ CD.countdown (floor props.value) ]

default :: JSX
default = S.story "default" mkCountdown
  { value: slider { value: 42.0, min: 0.0, max: 99.0, step: 1.0 } }
