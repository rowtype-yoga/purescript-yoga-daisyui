module DaisyUI.RadialProgress.Stories (default) where

import Prelude hiding (div)

import Data.Int (floor)
import React.Basic (JSX)
import DaisyUI.RadialProgress as RP
import Yoga.React (component)
import Yoga.React.DOM.HTML (div)
import YogaStories.Controls (slider)
import YogaStories.Story (story) as S

mkRadialProgress :: { value :: Number } -> JSX
mkRadialProgress = component "RadialProgressStory" \props -> React.do
  let val = floor props.value
  pure $ div { className: "flex gap-4" }
    [ RP.radialProgress val (show val <> "%") ]

default :: JSX
default = S.story "default" mkRadialProgress
  { value: slider { value: 70.0, min: 0.0, max: 100.0, step: 1.0 } }
