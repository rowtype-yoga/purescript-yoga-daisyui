module DaisyUI.Stack.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Stack as St
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, img)
import YogaStories.Story (story) as S

mkStack :: {} -> JSX
mkStack = component "StackStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-8 items-center" }
    [ St.stack
        [ div { className: "bg-primary text-primary-content grid w-32 h-20 rounded-box place-items-center" } "1"
        , div { className: "bg-accent text-accent-content grid w-32 h-20 rounded-box place-items-center" } "2"
        , div { className: "bg-secondary text-secondary-content grid w-32 h-20 rounded-box place-items-center" } "3"
        ]
    , St.stack
        [ img { src: "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp", alt: "Photo 1", className: "rounded-box" }
        , img { src: "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp", alt: "Photo 2", className: "rounded-box" }
        , img { src: "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp", alt: "Photo 3", className: "rounded-box" }
        ]
    ]

default :: JSX
default = S.story "default" mkStack {}
