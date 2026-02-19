module DaisyUI.Toggle.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Toggle as T
import DaisyUI.FormControl as FC
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, input, label, span)
import YogaStories.Story (story) as S

mkToggle :: {} -> JSX
mkToggle = component "ToggleStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4" }
    [ FC.fieldset
        [ FC.fieldsetLegend "Notifications"
        , label { className: "flex items-center gap-2 cursor-pointer" }
            [ input { type: "checkbox", className: T.toggleCls "" "", checked: true }
            , span {} "Email"
            ]
        , label { className: "flex items-center gap-2 cursor-pointer" }
            [ input { type: "checkbox", className: T.toggleCls "" "" }
            , span {} "Push"
            ]
        ]
    , div { className: "flex gap-2" }
        [ input { type: "checkbox", className: T.toggleCls T.primary "", checked: true }
        , input { type: "checkbox", className: T.toggleCls T.secondary "", checked: true }
        , input { type: "checkbox", className: T.toggleCls T.accent "", checked: true }
        , input { type: "checkbox", className: T.toggleCls T.success "", checked: true }
        , input { type: "checkbox", className: T.toggleCls T.warning "", checked: true }
        , input { type: "checkbox", className: T.toggleCls T.info "", checked: true }
        , input { type: "checkbox", className: T.toggleCls T.error "", checked: true }
        ]
    , div { className: "flex gap-2 items-center" }
        [ input { type: "checkbox", className: T.toggleCls "" T.lg, checked: true }
        , input { type: "checkbox", className: T.toggleCls "" "", checked: true }
        , input { type: "checkbox", className: T.toggleCls "" T.sm, checked: true }
        , input { type: "checkbox", className: T.toggleCls "" T.xs, checked: true }
        ]
    ]

default :: JSX
default = S.story "default" mkToggle {}
