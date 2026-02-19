module DaisyUI.TextRotate.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.TextRotate as TR
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, span)
import YogaStories.Story (story) as S

mkTextRotate :: {} -> JSX
mkTextRotate = component "TextRotateStory" \_ -> React.do
  pure $ div { className: "text-2xl" }
    [ span {} "I love "
    , TR.textRotate
        [ TR.textRotateItem "PureScript"
        , TR.textRotateItem "DaisyUI"
        , TR.textRotateItem "Tailwind"
        ]
    ]

default :: JSX
default = S.story "default" mkTextRotate {}
