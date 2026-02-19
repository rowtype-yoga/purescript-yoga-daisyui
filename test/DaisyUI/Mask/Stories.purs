module DaisyUI.Mask.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Mask as M
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, img)
import YogaStories.Story (story) as S

mkMask :: {} -> JSX
mkMask = component "MaskStory" \_ -> React.do
  pure $ div { className: "flex gap-4 items-center" }
    [ img { className: M.maskCls M.squircle, src: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp", alt: "Squircle", width: "80" }
    , img { className: M.maskCls M.heart, src: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp", alt: "Heart", width: "80" }
    , img { className: M.maskCls M.hexagon, src: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp", alt: "Hexagon", width: "80" }
    , img { className: M.maskCls M.star, src: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp", alt: "Star", width: "80" }
    ]

default :: JSX
default = S.story "default" mkMask {}
