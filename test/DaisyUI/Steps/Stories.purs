module DaisyUI.Steps.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, li, span, ul)
import YogaStories.Story (story) as S

mkSteps :: {} -> JSX
mkSteps = component "StepsStory" \_ -> React.do
  pure $ div { className: "w-full space-y-8" }
    [ div { className: "overflow-x-auto" }
        [ ul { className: "steps grid w-full" }
            [ li { className: "step step-primary" } "Register"
            , li { className: "step step-primary" } "Choose plan"
            , li { className: "step" } "Purchase"
            , li { className: "step" } "Receive product"
            ]
        ]
    , div { className: "overflow-x-auto" }
        [ ul { className: "steps grid w-full" }
            [ li { className: "step step-neutral" }
                [ span { className: "step-icon" } "😀", span {} "Step 1" ]
            , li { className: "step step-neutral" }
                [ span { className: "step-icon" } "😃", span {} "Step 2" ]
            , li { className: "step" }
                [ span { className: "step-icon" } "😍", span {} "Step 3" ]
            ]
        ]
    , ul { className: "steps steps-vertical" }
        [ li { className: "step step-primary" } "Register"
        , li { className: "step step-primary" } "Choose plan"
        , li { className: "step" } "Purchase"
        , li { className: "step" } "Receive product"
        ]
    ]

default :: JSX
default = S.story "default" mkSteps {}
