module DaisyUI.Card.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Card (card, cardBody, cardTitle, cardActions)
import DaisyUI.Button as Btn
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, figure, img, p)
import YogaStories.Story (story) as S

mkCard :: {} -> JSX
mkCard = component "CardStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4" }
    [ div { className: "w-96" }
        [ card
            [ figure {}
                [ img { src: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp", alt: "Shoes" } ]
            , cardBody
                [ cardTitle "Shoes!"
                , p {} "If a dog chews shoes whose shoes does he choose?"
                , cardActions
                    [ Btn.btn Btn.primary "" "Buy Now" ]
                ]
            ]
        ]
    ]

default :: JSX
default = S.story "default" mkCard {}
