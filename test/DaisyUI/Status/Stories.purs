module DaisyUI.Status.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Status as St
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, span)
import YogaStories.Story (story) as S

mkStatus :: {} -> JSX
mkStatus = component "StatusStory" \_ -> React.do
  pure $ div { className: "flex gap-6 items-center" }
    [ div { className: "flex items-center gap-2" } [ St.status St.success St.md, span {} "Online" ]
    , div { className: "flex items-center gap-2" } [ St.status St.warning St.md, span {} "Away" ]
    , div { className: "flex items-center gap-2" } [ St.status St.error St.md, span {} "Offline" ]
    , div { className: "flex items-center gap-2" } [ St.status St.info St.md, span {} "Info" ]
    ]

default :: JSX
default = S.story "default" mkStatus {}
