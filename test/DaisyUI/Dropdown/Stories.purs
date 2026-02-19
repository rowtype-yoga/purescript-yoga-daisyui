module DaisyUI.Dropdown.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Dropdown as DD
import DaisyUI.Button as Btn
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, li, a)
import YogaStories.Story (story) as S

mkDropdown :: {} -> JSX
mkDropdown = component "DropdownStory" \_ -> React.do
  pure $ div { className: "flex items-center justify-center p-32" }
    [ DD.dropdown ""
        [ Btn.btn "" "" "Click"
        , DD.dropdownContent
            [ li {} [ a {} "Item 1" ]
            , li {} [ a {} "Item 2" ]
            ]
        ]
    ]

default :: JSX
default = S.story "default" mkDropdown {}
