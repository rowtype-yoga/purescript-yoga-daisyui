module DaisyUI.Range.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Range as Rng
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, input)
import YogaStories.Story (story) as S

mkRange :: {} -> JSX
mkRange = component "RangeStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4 w-64" }
    [ input { type: "range", className: Rng.rangeCls "" "" }
    , input { type: "range", className: Rng.rangeCls Rng.primary "" }
    , input { type: "range", className: Rng.rangeCls Rng.secondary "" }
    , input { type: "range", className: Rng.rangeCls Rng.accent "" }
    , div { className: "flex flex-col gap-2 items-center" }
        [ input { type: "range", className: Rng.rangeCls "" Rng.lg }
        , input { type: "range", className: Rng.rangeCls "" "" }
        , input { type: "range", className: Rng.rangeCls "" Rng.sm }
        , input { type: "range", className: Rng.rangeCls "" Rng.xs }
        ]
    ]

default :: JSX
default = S.story "default" mkRange {}
