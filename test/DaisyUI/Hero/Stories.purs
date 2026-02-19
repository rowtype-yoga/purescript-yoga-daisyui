module DaisyUI.Hero.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Hero as Hero
import DaisyUI.Button as Btn
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, h1, p)
import YogaStories.Story (story) as S

mkHero :: {} -> JSX
mkHero = component "HeroStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4" }
    [ Hero.hero
        [ Hero.heroContent
            [ div { className: "max-w-md" }
                [ h1 { className: "text-5xl font-bold" } "Hello there"
                , p { className: "py-6" } "Provident cupiditate voluptatem et in."
                , Btn.btn Btn.primary Btn.md "Get Started"
                ]
            ]
        ]
    ]

default :: JSX
default = S.story "default" mkHero {}
