module DaisyUI.Diff.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Diff as D
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, img)
import YogaStories.Story (story) as S

mkDiff :: {} -> JSX
mkDiff = component "DiffStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4" }
    [ D.diff
        [ D.diffItem1
            [ img { src: "https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp", alt: "Daisy" } ]
        , D.diffItem2
            [ img { src: "https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp", alt: "Daisy" } ]
        , D.diffResizer
        ]
    ]

default :: JSX
default = S.story "default" mkDiff {}
