module DaisyUI.Rating.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Rating as Rt
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, input)
import YogaStories.Story (story) as S

mkRating :: {} -> JSX
mkRating = component "RatingStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4" }
    [ Rt.rating Rt.lg
        [ input { type: "radio", name: "rating-1", className: "mask mask-star-2 bg-orange-400", "aria-label": "1 star" }
        , input { type: "radio", name: "rating-1", className: "mask mask-star-2 bg-orange-400", "aria-label": "2 stars", checked: true }
        , input { type: "radio", name: "rating-1", className: "mask mask-star-2 bg-orange-400", "aria-label": "3 stars" }
        , input { type: "radio", name: "rating-1", className: "mask mask-star-2 bg-orange-400", "aria-label": "4 stars" }
        , input { type: "radio", name: "rating-1", className: "mask mask-star-2 bg-orange-400", "aria-label": "5 stars" }
        ]
    ]

default :: JSX
default = S.story "default" mkRating {}
