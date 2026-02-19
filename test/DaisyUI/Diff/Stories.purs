module DaisyUI.Diff.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Diff as D
import Yoga.React (component)
import Yoga.React.DOM.HTML (div)
import YogaStories.Story (story) as S

mkDiff :: {} -> JSX
mkDiff = component "DiffStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4" }
    [ D.diff
        [ D.diffItem1 [ div { className: "bg-primary text-primary-content grid place-content-center text-6xl font-black rounded-box h-48 w-96" } "DAISY" ]
        , D.diffItem2 [ div { className: "bg-base-200 grid place-content-center text-6xl font-black rounded-box h-48 w-96" } "DAISY" ]
        , D.diffResizer
        ]
    ]

default :: JSX
default = S.story "default" mkDiff {}
