module DaisyUI.Indicator.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Indicator as Ind
import DaisyUI.Badge as B
import DaisyUI.Button as Btn
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, input)
import YogaStories.Story (story) as S

mkIndicator :: {} -> JSX
mkIndicator = component "IndicatorStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-8 items-center" }
    [ Ind.indicator
        [ Ind.indicatorItem "" [ B.badge B.secondary "" "99+" ]
        , Btn.btn "" "" "inbox"
        ]
    , Ind.indicator
        [ Ind.indicatorItem "" [ B.badge B.primary "" "new" ]
        , input { type: "text", placeholder: "Search...", className: "input input-bordered" }
        ]
    , Ind.indicator
        [ Ind.indicatorItem Ind.indicatorBottom
            [ B.badge B.secondary "" "new" ]
        , div { className: "bg-base-300 grid h-32 w-32 place-items-center rounded-box" } "content"
        ]
    ]

default :: JSX
default = S.story "default" mkIndicator {}
