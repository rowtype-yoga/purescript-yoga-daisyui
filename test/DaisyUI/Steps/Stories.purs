module DaisyUI.Steps.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Steps as Steps
import Yoga.React (component)
import Yoga.React.DOM.HTML (div)
import YogaStories.Story (story) as S

mkSteps :: {} -> JSX
mkSteps = component "StepsStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4" }
    [ Steps.steps ""
        [ Steps.step Steps.primary "Register"
        , Steps.step Steps.primary "Choose plan"
        , Steps.step "" "Purchase"
        , Steps.step "" "Receive product"
        ]
    ]

default :: JSX
default = S.story "default" mkSteps {}
