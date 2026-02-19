module DaisyUI.Menu.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Menu as Menu
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, a)
import YogaStories.Story (story) as S

mkMenu :: {} -> JSX
mkMenu = component "MenuStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4" }
    [ div { className: "w-56" }
        [ Menu.menu ""
            [ Menu.menuTitle "Menu Title"
            , Menu.menuItem [ a {} "Item 1" ]
            , Menu.menuActive [ a { className: "active" } "Item 2 (active)" ]
            , Menu.menuItem [ a {} "Item 3" ]
            , Menu.menuDisabled [ a {} "Disabled" ]
            ]
        ]
    ]

default :: JSX
default = S.story "default" mkMenu {}
