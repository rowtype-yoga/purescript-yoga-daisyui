module DaisyUI.Checkbox.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Checkbox as CB
import DaisyUI.FormControl as FC
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, input, label)
import YogaStories.Story (story) as S

mkCheckbox :: {} -> JSX
mkCheckbox = component "CheckboxStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4" }
    [ FC.fieldset
        [ FC.fieldsetLegend "Login options"
        , label { className: "label" }
            [ input { type: "checkbox", className: CB.checkboxCls "" "", checked: true }
            , span' "Remember me"
            ]
        ]
    , div { className: "flex flex-wrap gap-2" }
        [ input { type: "checkbox", className: CB.checkboxCls CB.primary "", checked: true }
        , input { type: "checkbox", className: CB.checkboxCls CB.secondary "", checked: true }
        , input { type: "checkbox", className: CB.checkboxCls CB.accent "", checked: true }
        , input { type: "checkbox", className: CB.checkboxCls CB.success "", checked: true }
        , input { type: "checkbox", className: CB.checkboxCls CB.warning "", checked: true }
        , input { type: "checkbox", className: CB.checkboxCls CB.error "", checked: true }
        ]
    , div { className: "flex flex-wrap gap-2 items-center" }
        [ input { type: "checkbox", className: CB.checkboxCls CB.primary CB.xs, checked: true }
        , input { type: "checkbox", className: CB.checkboxCls CB.primary CB.sm, checked: true }
        , input { type: "checkbox", className: CB.checkboxCls CB.primary CB.md, checked: true }
        , input { type: "checkbox", className: CB.checkboxCls CB.primary CB.lg, checked: true }
        ]
    ]
  where
  span' = div { className: "" }

default :: JSX
default = S.story "default" mkCheckbox {}
