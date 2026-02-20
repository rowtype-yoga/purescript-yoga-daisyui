module DaisyUI.Progress.Stories (default) where

import Prelude hiding (div)

import Data.Int (floor)
import React.Basic (JSX)
import DaisyUI.Progress as P
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, progress)
import YogaStories.Controls (slider, select)
import YogaStories.Story (story) as S

mkProgress :: { value :: Number, color :: String } -> JSX
mkProgress = component "ProgressStory" \props -> React.do
  let colorCls = if props.color == "" then "" else "progress-" <> props.color
  pure $ div { className: "flex flex-col gap-4 w-56" }
    [ progress { className: P.progressCls colorCls, value: show (floor props.value), max: "100" } "" ]

default :: JSX
default = S.story "default" mkProgress
  { value: slider { value: 56.0, min: 0.0, max: 100.0, step: 1.0 }
  , color: select "" [ "", "primary", "secondary", "accent", "info", "success", "warning", "error" ]
  }
