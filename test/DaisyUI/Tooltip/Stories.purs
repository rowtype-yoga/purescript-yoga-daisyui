module DaisyUI.Tooltip.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Tooltip as Tip
import DaisyUI.Button as Btn
import Yoga.React (component)
import Yoga.React.DOM.HTML (div)
import YogaStories.Story (story) as S

mkTooltip :: {} -> JSX
mkTooltip = component "TooltipStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-8 items-center p-16" }
    [ Tip.tooltip "hello" ""
        [ Btn.btn "" "" "Hover me" ]
    , div { className: "flex gap-4" }
        [ Tip.tooltip "top" Tip.top [ Btn.btn "" "" "top" ]
        , Tip.tooltip "bottom" Tip.bottom [ Btn.btn "" "" "bottom" ]
        , Tip.tooltip "left" Tip.left [ Btn.btn "" "" "left" ]
        , Tip.tooltip "right" Tip.right [ Btn.btn "" "" "right" ]
        ]
    , div { className: "flex gap-4" }
        [ Tip.tooltip "primary" Tip.primary [ Btn.btn Btn.primary "" "primary" ]
        , Tip.tooltip "secondary" Tip.secondary [ Btn.btn Btn.secondary "" "secondary" ]
        , Tip.tooltip "accent" Tip.accent [ Btn.btn Btn.accent "" "accent" ]
        ]
    ]

default :: JSX
default = S.story "default" mkTooltip {}
