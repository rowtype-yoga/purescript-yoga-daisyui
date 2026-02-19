module DaisyUI.Swap.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Swap as Sw
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, input)
import YogaStories.Story (story) as S

mkSwap :: {} -> JSX
mkSwap = component "SwapStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-6 items-center text-6xl" }
    [ Sw.swap
        [ input { type: "checkbox" }
        , Sw.swapOn "ON"
        , Sw.swapOff "OFF"
        ]
    , Sw.swapRotate
        [ input { type: "checkbox" }
        , Sw.swapOn "🌛"
        , Sw.swapOff "🌞"
        ]
    , Sw.swapFlip
        [ input { type: "checkbox" }
        , Sw.swapOn "😈"
        , Sw.swapOff "😇"
        ]
    ]

default :: JSX
default = S.story "default" mkSwap {}
