module DaisyUI.Tooltip.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Tooltip as Tip
import DaisyUI.Button as Btn
import Yoga.React (component)
import Yoga.React.DOM.HTML (div)
import YogaStories.Controls (select)
import YogaStories.Story (story) as S

mkTooltip :: { text :: String, position :: String, color :: String } -> JSX
mkTooltip = component "TooltipStory" \props -> React.do
  let positionCls = if props.position == "" then "" else "tooltip-" <> props.position
  let colorCls = if props.color == "" then "" else "tooltip-" <> props.color
  pure $ div { className: "flex items-center justify-center p-16" }
    [ Tip.tooltip props.text (positionCls <> " " <> colorCls)
        [ Btn.btn "" "" "Hover me" ]
    ]

default :: JSX
default = S.story "default" mkTooltip
  { text: "hello"
  , position: select "" [ "", "top", "bottom", "left", "right" ]
  , color: select "" [ "", "primary", "secondary", "accent", "info", "success", "warning", "error" ]
  }
