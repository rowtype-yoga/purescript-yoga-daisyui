module DaisyUI.Progress.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Progress as P
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, progress)
import YogaStories.Controls (slider)
import YogaStories.Story (story) as S

mkProgress :: { value :: Number } -> JSX
mkProgress = component "ProgressStory" \props -> React.do
  pure $ div { className: "flex flex-col gap-4 w-64" }
    [ progress { className: P.progressCls P.primary, value: show props.value, max: "100" } ""
    , progress { className: P.progressCls P.secondary, value: show props.value, max: "100" } ""
    , progress { className: P.progressCls P.accent, value: show props.value, max: "100" } ""
    ]

default :: JSX
default = S.story "default" mkProgress
  { value: slider { value: 40.0, min: 0.0, max: 100.0, step: 1.0 } }
