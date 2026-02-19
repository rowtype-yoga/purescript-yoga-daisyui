module DaisyUI.Card.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Card (card, cardBody, cardTitle, cardActions)
import DaisyUI.Button as Btn
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, p)
import Yoga.React.DOM.Internal (text)
import YogaStories.Story (story) as S

mkCard :: {} -> JSX
mkCard = component "CardStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4" }
    [ div { className: "max-w-sm" }
        [ card
            [ cardBody
                [ cardTitle (text "Card Title")
                , p {} (text "A card component with DaisyUI styling.")
                , cardActions
                    [ Btn.btn Btn.primary Btn.md (text "Action") ]
                ]
            ]
        ]
    ]

default :: JSX
default = S.story "default" mkCard {}
