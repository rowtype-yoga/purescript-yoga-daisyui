module DaisyUI.Status.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Status as St
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, span)
import YogaStories.Story (story) as S

mkStatus :: {} -> JSX
mkStatus = component "StatusStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-6" }
    [ div { className: "flex gap-6" }
        [ St.status St.primary ""
        , St.status St.secondary ""
        , St.status St.accent ""
        , St.status St.neutral ""
        , St.status St.info ""
        , St.status St.success ""
        , St.status St.warning ""
        , St.status St.error ""
        ]
    , div { className: "flex gap-6 items-center" }
        [ div { className: "flex items-center gap-2" } [ St.status St.success "", span {} "Online" ]
        , div { className: "flex items-center gap-2" } [ St.status St.warning "", span {} "Away" ]
        , div { className: "flex items-center gap-2" } [ St.status St.error "", span {} "Offline" ]
        ]
    , div { className: "flex gap-4 items-center" }
        [ St.status "" St.xs
        , St.status "" St.sm
        , St.status "" St.md
        , St.status "" St.lg
        , St.status "" St.xl
        ]
    ]

default :: JSX
default = S.story "default" mkStatus {}
