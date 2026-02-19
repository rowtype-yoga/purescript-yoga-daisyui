module DaisyUI.Menu.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Menu as Menu
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, a)
import YogaStories.Story (story) as S

mkMenu :: {} -> JSX
mkMenu = component "MenuStory" \_ -> React.do
  pure $ div { className: "flex flex-wrap gap-4" }
    [ div { className: "w-56" }
        [ Menu.menu "bg-base-200 rounded-box"
            [ Menu.menuItem [ a {} "Item 1" ]
            , Menu.menuItem [ a {} "Item 2" ]
            , Menu.menuSub "Parent"
                [ Menu.menuItem [ a {} "Submenu 1" ]
                , Menu.menuItem [ a {} "Submenu 2" ]
                ]
            , Menu.menuItem [ a {} "Item 3" ]
            ]
        ]
    , div { className: "w-56" }
        [ Menu.menu "bg-base-200 rounded-box"
            [ Menu.menuTitle "Title"
            , Menu.menuItem [ a {} "Item 1" ]
            , Menu.menuItem [ a { className: "active" } "Item 2" ]
            , Menu.menuItem [ a {} "Item 3" ]
            ]
        ]
    , Menu.menuHorizontal "bg-base-200 rounded-box"
        [ Menu.menuItem [ a {} "Item 1" ]
        , Menu.menuItem [ a {} "Item 2" ]
        , Menu.menuItem [ a {} "Item 3" ]
        ]
    ]

default :: JSX
default = S.story "default" mkMenu {}
