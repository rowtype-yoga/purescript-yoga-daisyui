module DaisyUI.Textarea.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Textarea as TA
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, textarea)
import YogaStories.Story (story) as S

mkTextarea :: {} -> JSX
mkTextarea = component "TextareaStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4 w-full max-w-xs" }
    [ textarea { className: TA.textareaCls TA.bordered "", placeholder: "Type here...", rows: 4 }
    , textarea { className: TA.textareaCls TA.primary "", placeholder: "Primary textarea", rows: 3 }
    ]

default :: JSX
default = S.story "default" mkTextarea {}
