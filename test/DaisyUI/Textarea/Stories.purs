module DaisyUI.Textarea.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Textarea as TA
import DaisyUI.FormControl as FC
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, textarea)
import YogaStories.Story (story) as S

mkTextarea :: {} -> JSX
mkTextarea = component "TextareaStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4 w-full max-w-xs" }
    [ FC.fieldset
        [ FC.fieldsetLegend "Your bio"
        , textarea { className: TA.textareaCls "" "", placeholder: "Bio" }
        , div { className: "label" } "Optional"
        ]
    , textarea { className: TA.textareaCls TA.bordered "", placeholder: "Bordered textarea" }
    , textarea { className: TA.textareaCls TA.ghost "", placeholder: "Ghost textarea" }
    , div { className: "flex flex-wrap gap-2" }
        [ textarea { className: TA.textareaCls TA.primary "", placeholder: "Primary" }
        , textarea { className: TA.textareaCls TA.secondary "", placeholder: "Secondary" }
        , textarea { className: TA.textareaCls TA.accent "", placeholder: "Accent" }
        ]
    ]

default :: JSX
default = S.story "default" mkTextarea {}
