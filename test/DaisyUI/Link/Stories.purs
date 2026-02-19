module DaisyUI.Link.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Link as L
import Yoga.React (component)
import Yoga.React.DOM.HTML (a, div)
import YogaStories.Story (story) as S

mkLink :: {} -> JSX
mkLink = component "LinkStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-2" }
    [ a { className: L.linkCls L.primary } "Primary link"
    , a { className: L.linkCls L.secondary } "Secondary link"
    , a { className: L.linkCls L.accent } "Accent link"
    , a { className: L.linkCls L.hover } "Hover link"
    ]

default :: JSX
default = S.story "default" mkLink {}
