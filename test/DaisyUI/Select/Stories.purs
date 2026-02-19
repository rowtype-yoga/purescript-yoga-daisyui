module DaisyUI.Select.Stories (default) where

import Prelude hiding (div)

import Data.Generic.Rep (class Generic)
import React.Basic (JSX)
import DaisyUI.Select as Sel
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, option, select)
import YogaStories.Controls (enum)
import YogaStories.Story (story) as S

data Color = None | Primary | Secondary | Accent

derive instance Generic Color _

colorClass :: Color -> String
colorClass = case _ of
  None -> ""
  Primary -> Sel.primary
  Secondary -> Sel.secondary
  Accent -> Sel.accent

mkSelect :: { color :: Color } -> JSX
mkSelect = component "SelectStory" \props -> React.do
  pure $ div { className: "flex flex-col gap-4 w-full max-w-xs" }
    [ select { className: Sel.selectCls (colorClass props.color) "" }
        [ option { value: "" } "Pick one"
        , option { value: "a" } "Option A"
        , option { value: "b" } "Option B"
        , option { value: "c" } "Option C"
        ]
    ]

default :: JSX
default = S.story "default" mkSelect
  { color: enum None }
