module DaisyUI.Stack.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Stack as St
import Yoga.React (component)
import Yoga.React.DOM.HTML (div)
import YogaStories.Story (story) as S

mkStack :: {} -> JSX
mkStack = component "StackStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4 items-center" }
    [ St.stack
        [ div { className: "bg-primary text-primary-content grid w-32 h-20 rounded-box place-items-center" } "1"
        , div { className: "bg-accent text-accent-content grid w-32 h-20 rounded-box place-items-center" } "2"
        , div { className: "bg-secondary text-secondary-content grid w-32 h-20 rounded-box place-items-center" } "3"
        ]
    ]

default :: JSX
default = S.story "default" mkStack {}
