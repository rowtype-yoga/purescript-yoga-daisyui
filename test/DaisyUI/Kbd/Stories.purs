module DaisyUI.Kbd.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Kbd as K
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, span)
import YogaStories.Story (story) as S

mkKbd :: {} -> JSX
mkKbd = component "KbdStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-6 items-center" }
    [ div { className: "flex gap-1" }
        [ K.kbdKey K.lg "Ctrl"
        , span {} "+"
        , K.kbdKey K.lg "Shift"
        , span {} "+"
        , K.kbdKey K.lg "Del"
        ]
    , div { className: "flex gap-1" }
        [ K.kbdKey "" "⌘"
        , K.kbdKey "" "⌥"
        , K.kbdKey "" "⇧"
        , K.kbdKey "" "⌃"
        ]
    , div { className: "flex gap-1 items-center" }
        [ K.kbdKey K.lg "large"
        , K.kbdKey "" "normal"
        , K.kbdKey K.sm "small"
        , K.kbdKey K.xs "tiny"
        ]
    ]

default :: JSX
default = S.story "default" mkKbd {}
