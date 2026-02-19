module DaisyUI.Steps.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Steps as Steps
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, li)
import YogaStories.Story (story) as S

mkSteps :: {} -> JSX
mkSteps = component "StepsStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-8" }
    [ Steps.steps ""
        [ li { className: "step step-primary", "data-content": "1" } "Register"
        , li { className: "step step-primary", "data-content": "2" } "Choose plan"
        , li { className: "step", "data-content": "3" } "Purchase"
        , li { className: "step", "data-content": "4" } "Receive product"
        ]
    , Steps.steps ""
        [ li { className: "step step-info", "data-content": "✓" } "Register"
        , li { className: "step step-info", "data-content": "✓" } "Choose plan"
        , li { className: "step step-info", "data-content": "✓" } "Purchase"
        , li { className: "step", "data-content": "?" } "Receive product"
        ]
    , Steps.steps Steps.vertical
        [ li { className: "step step-primary", "data-content": "1" } "Register"
        , li { className: "step step-primary", "data-content": "2" } "Choose plan"
        , li { className: "step", "data-content": "3" } "Purchase"
        , li { className: "step", "data-content": "4" } "Receive product"
        ]
    ]

default :: JSX
default = S.story "default" mkSteps {}
