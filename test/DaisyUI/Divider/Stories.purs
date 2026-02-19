module DaisyUI.Divider.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Divider as D
import Yoga.React (component)
import Yoga.React.DOM.HTML (div)
import YogaStories.Story (story) as S

mkDivider :: {} -> JSX
mkDivider = component "DividerStory" \_ -> React.do
  pure $ div { className: "flex flex-col w-full" }
    [ div { className: "card bg-base-300 rounded-box grid h-20 place-items-center" } "Content"
    , D.divider "OR"
    , div { className: "card bg-base-300 rounded-box grid h-20 place-items-center" } "Content"
    , D.dividerPrimary "Primary"
    , D.dividerSecondary "Secondary"
    , D.dividerAccent "Accent"
    , D.dividerNeutral "Neutral"
    ]

default :: JSX
default = S.story "default" mkDivider {}
