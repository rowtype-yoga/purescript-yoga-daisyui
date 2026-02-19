module DaisyUI.Badge.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Badge as Badge
import DaisyUI.Button as Btn
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, span)
import YogaStories.Story (story) as S

mkBadge :: {} -> JSX
mkBadge = component "BadgeStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-6" }
    [ div { className: "flex flex-wrap gap-2" }
        [ Badge.badge Badge.neutral "" "neutral"
        , Badge.badge Badge.primary "" "primary"
        , Badge.badge Badge.secondary "" "secondary"
        , Badge.badge Badge.accent "" "accent"
        , Badge.badge Badge.ghost "" "ghost"
        ]
    , div { className: "flex flex-wrap gap-2" }
        [ Badge.badge (Badge.primary <> " " <> Badge.outline) "" "outline"
        , Badge.badge (Badge.primary <> " " <> Badge.soft) "" "soft"
        , Badge.badge (Badge.primary <> " " <> Badge.dash) "" "dash"
        ]
    , div { className: "flex flex-wrap gap-2" }
        [ Badge.badge Badge.primary Badge.lg "large"
        , Badge.badge Badge.primary Badge.md "medium"
        , Badge.badge Badge.primary Badge.sm "small"
        , Badge.badge Badge.primary Badge.xs "tiny"
        ]
    , div { className: "flex gap-2" }
        [ Btn.btn "" "" [ span {} "Inbox ", Badge.badge Badge.secondary Badge.sm "+99" ] ]
    ]

default :: JSX
default = S.story "default" mkBadge {}
