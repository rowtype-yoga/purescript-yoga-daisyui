module DaisyUI.Divider.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Divider as D
import Yoga.React (component)
import Yoga.React.DOM.HTML (div)
import YogaStories.Story (story) as S

mkDivider :: {} -> JSX
mkDivider = component "DividerStory" \_ -> React.do
  pure $ div { className: "flex flex-col w-full gap-2" }
    [ div {} "Content above"
    , D.divider "OR"
    , div {} "Content below"
    , D.dividerPrimary "Primary"
    , div {} "More content"
    ]

default :: JSX
default = S.story "default" mkDivider {}
