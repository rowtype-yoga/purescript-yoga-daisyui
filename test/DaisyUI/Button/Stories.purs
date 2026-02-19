module DaisyUI.Button.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Button as Btn
import Yoga.React (component)
import Yoga.React.DOM.HTML (div)
import YogaStories.Story (story) as S

mkButton :: {} -> JSX
mkButton = component "ButtonStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-6" }
    [ div { className: "flex flex-wrap gap-2" }
        [ Btn.btn "" "" "Default"
        , Btn.btn Btn.neutral "" "Neutral"
        , Btn.btn Btn.primary "" "Primary"
        , Btn.btn Btn.secondary "" "Secondary"
        , Btn.btn Btn.accent "" "Accent"
        , Btn.btn Btn.ghost "" "Ghost"
        , Btn.btn Btn.link "" "Link"
        ]
    , div { className: "flex flex-wrap gap-2" }
        [ Btn.btn Btn.outline "" "Outline"
        , Btn.btn Btn.soft "" "Soft"
        , Btn.btn Btn.dash "" "Dash"
        ]
    , div { className: "flex flex-wrap gap-2 items-center" }
        [ Btn.btn "" Btn.lg "Large"
        , Btn.btn "" "" "Normal"
        , Btn.btn "" Btn.sm "Small"
        , Btn.btn "" Btn.xs "Tiny"
        ]
    , div { className: "flex flex-wrap gap-2" }
        [ Btn.btn (Btn.primary <> " " <> Btn.wide) "" "Wide"
        ]
    ]

default :: JSX
default = S.story "default" mkButton {}
