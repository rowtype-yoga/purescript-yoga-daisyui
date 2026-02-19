module DaisyUI.Carousel.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Carousel as C
import Yoga.React (component)
import Yoga.React.DOM.HTML (div)
import YogaStories.Story (story) as S

mkCarousel :: {} -> JSX
mkCarousel = component "CarouselStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4" }
    [ C.carousel C.center
        [ C.carouselItem [ div { className: "bg-neutral text-neutral-content rounded-box flex h-40 w-60 items-center justify-center" } "Slide 1" ]
        , C.carouselItem [ div { className: "bg-primary text-primary-content rounded-box flex h-40 w-60 items-center justify-center" } "Slide 2" ]
        , C.carouselItem [ div { className: "bg-secondary text-secondary-content rounded-box flex h-40 w-60 items-center justify-center" } "Slide 3" ]
        , C.carouselItem [ div { className: "bg-accent text-accent-content rounded-box flex h-40 w-60 items-center justify-center" } "Slide 4" ]
        ]
    ]

default :: JSX
default = S.story "default" mkCarousel {}
