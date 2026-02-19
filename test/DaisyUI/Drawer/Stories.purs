module DaisyUI.Drawer.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Drawer as D
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, input, label, ul, li, a)
import YogaStories.Story (story) as S

mkDrawer :: {} -> JSX
mkDrawer = component "DrawerStory" \_ -> React.do
  pure $ div { className: "h-64" }
    [ D.drawer
        [ input { type: "checkbox", id: "my-drawer", className: D.drawerToggle }
        , D.drawerContent
            [ label { htmlFor: "my-drawer", className: "btn btn-primary" } "Open drawer" ]
        , D.drawerSide
            [ label { htmlFor: "my-drawer", className: D.drawerOverlay, "aria-label": "close sidebar" } ([] :: Array JSX)
            , ul { className: "menu bg-base-200 text-base-content min-h-full w-60 p-4" }
                [ li {} [ a {} "Sidebar Item 1" ]
                , li {} [ a {} "Sidebar Item 2" ]
                ]
            ]
        ]
    ]

default :: JSX
default = S.story "default" mkDrawer {}
