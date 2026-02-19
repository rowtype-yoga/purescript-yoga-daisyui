module DaisyUI.Mask.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Mask as M
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, img)
import YogaStories.Story (story) as S

mkMask :: {} -> JSX
mkMask = component "MaskStory" \_ -> React.do
  let demoImg = "https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
  pure $ div { className: "flex flex-wrap gap-4" }
    [ img { src: demoImg, className: M.maskCls M.squircle <> " w-20", alt: "Squircle" }
    , img { src: demoImg, className: M.maskCls M.heart <> " w-20", alt: "Heart" }
    , img { src: demoImg, className: M.maskCls M.hexagon <> " w-20", alt: "Hexagon" }
    , img { src: demoImg, className: M.maskCls M.hexagon2 <> " w-20", alt: "Hexagon2" }
    , img { src: demoImg, className: M.maskCls M.decagon <> " w-20", alt: "Decagon" }
    , img { src: demoImg, className: M.maskCls M.pentagon <> " w-20", alt: "Pentagon" }
    , img { src: demoImg, className: M.maskCls M.diamond <> " w-20", alt: "Diamond" }
    , img { src: demoImg, className: M.maskCls M.circle <> " w-20", alt: "Circle" }
    , img { src: demoImg, className: M.maskCls M.star <> " w-20", alt: "Star" }
    , img { src: demoImg, className: M.maskCls M.triangle <> " w-20", alt: "Triangle" }
    ]

default :: JSX
default = S.story "default" mkMask {}
