module DaisyUI.Fab.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Fab as F
import Yoga.React (component)
import Yoga.React.DOM.HTML (button, div)
import YogaStories.Story (story) as S

mkFab :: {} -> JSX
mkFab = component "FabStory" \_ -> React.do
  pure $ div { className: "relative h-64 w-full [&_.fab]:static" }
    [ F.fab
        [ div { tabIndex: 0, role: "button", className: "btn btn-lg btn-circle btn-primary" } "F"
        , button { className: "btn btn-lg btn-circle" } "A"
        , button { className: "btn btn-lg btn-circle" } "B"
        , button { className: "btn btn-lg btn-circle" } "C"
        ]
    ]

default :: JSX
default = S.story "default" mkFab {}
