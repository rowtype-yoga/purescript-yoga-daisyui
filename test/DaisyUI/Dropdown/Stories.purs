module DaisyUI.Dropdown.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Dropdown as DD
import DaisyUI.Button as Btn
import Yoga.React (component)
import Yoga.React.DOM.HTML (a, div, li)
import YogaStories.Controls (select)
import YogaStories.Story (story) as S

mkDropdown :: { open :: Boolean, position :: String } -> JSX
mkDropdown = component "DropdownStory" \props -> React.do
  let positionCls = if props.position == "" then "" else "dropdown-" <> props.position
  let openCls = if props.open then DD.open else ""
  pure $ div { className: "flex items-center justify-center p-32" }
    [ DD.dropdown (positionCls <> " " <> openCls)
        [ Btn.btn "" "" "Click"
        , DD.dropdownContent
            [ li {} [ a {} "Item 1" ]
            , li {} [ a {} "Item 2" ]
            ]
        ]
    ]

default :: JSX
default = S.story "default" mkDropdown
  { open: false
  , position: select "" [ "", "top", "bottom", "left", "right", "end" ]
  }
