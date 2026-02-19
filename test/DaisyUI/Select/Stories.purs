module DaisyUI.Select.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Select as Sel
import DaisyUI.FormControl as FC
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, option, select)
import YogaStories.Story (story) as S

mkSelect :: {} -> JSX
mkSelect = component "SelectStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4 w-full max-w-xs" }
    [ FC.fieldset
        [ FC.fieldsetLegend "Framework"
        , select { className: Sel.selectCls "" "" }
            [ option {} "Pick a framework"
            , option {} "Svelte"
            , option {} "Vue"
            , option {} "React"
            ]
        ]
    , select { className: Sel.selectCls Sel.bordered "" }
        [ option {} "Who shot first?"
        , option {} "Han Solo"
        , option {} "Greedo"
        ]
    , div { className: "flex flex-wrap gap-2" }
        [ select { className: Sel.selectCls Sel.primary "" }
            [ option {} "Primary" ]
        , select { className: Sel.selectCls Sel.secondary "" }
            [ option {} "Secondary" ]
        , select { className: Sel.selectCls Sel.accent "" }
            [ option {} "Accent" ]
        ]
    , div { className: "flex flex-wrap gap-2 items-center" }
        [ select { className: Sel.selectCls "" Sel.lg }
            [ option {} "Large" ]
        , select { className: Sel.selectCls "" "" }
            [ option {} "Normal" ]
        , select { className: Sel.selectCls "" Sel.sm }
            [ option {} "Small" ]
        , select { className: Sel.selectCls "" Sel.xs }
            [ option {} "Tiny" ]
        ]
    ]

default :: JSX
default = S.story "default" mkSelect {}
