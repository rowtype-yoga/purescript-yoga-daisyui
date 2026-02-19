module DaisyUI.Steps.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Steps as Steps
import Yoga.React (component)
import Yoga.React.DOM.HTML (div)
import Yoga.React.DOM.Internal (text)
import YogaStories.Story (story) as S

mkSteps :: {} -> JSX
mkSteps = component "StepsStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4" }
    [ Steps.steps ""
        [ Steps.step Steps.primary (text "Register")
        , Steps.step Steps.primary (text "Choose plan")
        , Steps.step "" (text "Purchase")
        , Steps.step "" (text "Receive product")
        ]
    ]

default :: JSX
default = S.story "default" mkSteps {}
