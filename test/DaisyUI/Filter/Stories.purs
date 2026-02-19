module DaisyUI.Filter.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Filter as F
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, input)
import YogaStories.Story (story) as S

mkFilter :: {} -> JSX
mkFilter = component "FilterStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4" }
    [ F.filter
        [ input { type: "radio", name: "frameworks", className: "btn " <> F.filterReset, "aria-label": "All" }
        , input { type: "radio", name: "frameworks", className: "btn", "aria-label": "Svelte" }
        , input { type: "radio", name: "frameworks", className: "btn", "aria-label": "Vue" }
        , input { type: "radio", name: "frameworks", className: "btn", "aria-label": "React" }
        ]
    ]

default :: JSX
default = S.story "default" mkFilter {}
