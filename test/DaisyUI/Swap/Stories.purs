module DaisyUI.Swap.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Swap as Sw
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, input)
import YogaStories.Story (story) as S

mkSwap :: {} -> JSX
mkSwap = component "SwapStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4 text-4xl" }
    [ Sw.swapRotate
        [ input { type: "checkbox" }
        , Sw.swapOn "ON"
        , Sw.swapOff "OFF"
        ]
    , Sw.swapFlip
        [ input { type: "checkbox" }
        , Sw.swapOn "YES"
        , Sw.swapOff "NO"
        ]
    ]

default :: JSX
default = S.story "default" mkSwap {}
