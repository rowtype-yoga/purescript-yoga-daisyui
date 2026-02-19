module DaisyUI.RadialProgress.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.RadialProgress as RP
import Yoga.React (component)
import Yoga.React.DOM.HTML (div)
import YogaStories.Story (story) as S

mkRadialProgress :: {} -> JSX
mkRadialProgress = component "RadialProgressStory" \_ -> React.do
  pure $ div { className: "flex gap-4" }
    [ RP.radialProgress 0 "0%"
    , RP.radialProgress 25 "25%"
    , RP.radialProgress 50 "50%"
    , RP.radialProgress 75 "75%"
    , RP.radialProgress 100 "100%"
    ]

default :: JSX
default = S.story "default" mkRadialProgress {}
