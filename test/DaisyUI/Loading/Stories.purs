module DaisyUI.Loading.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Loading as L
import Yoga.React (component)
import Yoga.React.DOM.HTML (div)
import YogaStories.Story (story) as S

mkLoading :: {} -> JSX
mkLoading = component "LoadingStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-6 items-center" }
    [ div { className: "flex gap-4" }
        [ L.loading L.spinner L.lg
        , L.loading L.dots L.lg
        , L.loading L.ring L.lg
        , L.loading L.ball L.lg
        , L.loading L.bars L.lg
        , L.loading L.infinity L.lg
        ]
    , div { className: "flex gap-4 items-center" }
        [ L.loading L.spinner L.xs
        , L.loading L.spinner L.sm
        , L.loading L.spinner L.md
        , L.loading L.spinner L.lg
        ]
    ]

default :: JSX
default = S.story "default" mkLoading {}
