module DaisyUI.Fab.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Fab as F
import Yoga.React (component)
import Yoga.React.DOM.HTML (button, div)
import YogaStories.Story (story) as S

mkFab :: {} -> JSX
mkFab = component "FabStory" \_ -> React.do
  pure $ div { className: "relative h-64" }
    [ F.fab
        [ F.fabMainAction "+"
        , button { className: "btn btn-circle btn-sm btn-primary" } "A"
        , button { className: "btn btn-circle btn-sm btn-secondary" } "B"
        , button { className: "btn btn-circle btn-sm btn-accent" } "C"
        ]
    ]

default :: JSX
default = S.story "default" mkFab {}
