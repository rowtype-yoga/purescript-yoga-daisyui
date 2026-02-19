module DaisyUI.Hero.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Hero as H
import DaisyUI.Button as Btn
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, h1, p)
import YogaStories.Story (story) as S

mkHero :: {} -> JSX
mkHero = component "HeroStory" \_ -> React.do
  pure $ H.hero
    [ H.heroContent
        [ div { className: "max-w-md" }
            [ h1 { className: "text-5xl font-bold" } "Hello there"
            , p { className: "py-6" } "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."
            , Btn.btn Btn.primary "" "Get Started"
            ]
        ]
    ]

default :: JSX
default = S.story "default" mkHero {}
