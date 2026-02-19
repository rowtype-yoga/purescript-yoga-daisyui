module DaisyUI.Carousel.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Carousel as C
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, img)
import YogaStories.Story (story) as S

mkCarousel :: {} -> JSX
mkCarousel = component "CarouselStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4" }
    [ C.carousel C.center
        [ C.carouselItem
            [ img { src: "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp", alt: "Burger" } ]
        , C.carouselItem
            [ img { src: "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp", alt: "Burger" } ]
        , C.carouselItem
            [ img { src: "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp", alt: "Burger" } ]
        , C.carouselItem
            [ img { src: "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp", alt: "Burger" } ]
        ]
    ]

default :: JSX
default = S.story "default" mkCarousel {}
