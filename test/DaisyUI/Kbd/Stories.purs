module DaisyUI.Kbd.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Kbd as K
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, span)
import YogaStories.Story (story) as S

mkKbd :: {} -> JSX
mkKbd = component "KbdStory" \_ -> React.do
  pure $ div { className: "flex gap-2 items-center" }
    [ K.kbdKey K.lg "Ctrl"
    , span {} "+"
    , K.kbdKey K.lg "C"
    ]

default :: JSX
default = S.story "default" mkKbd {}
