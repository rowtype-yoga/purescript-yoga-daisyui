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
    [ a { className: L.linkCls "" } "I'm a simple link"
    , a { className: L.linkCls L.primary } "I'm a simple link"
    , a { className: L.linkCls L.secondary } "I'm a simple link"
    , a { className: L.linkCls L.accent } "I'm a simple link"
    , a { className: L.linkCls L.neutral } "I'm a simple link"
    , a { className: L.linkCls L.success } "I'm a simple link"
    , a { className: L.linkCls L.info } "I'm a simple link"
    , a { className: L.linkCls L.warning } "I'm a simple link"
    , a { className: L.linkCls L.error } "I'm a simple link"
    , a { className: L.linkCls L.hover } "I'm a simple link"
    ]

default :: JSX
default = S.story "default" mkLink {}
