module DaisyUI.Navbar.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Navbar as Nav
import DaisyUI.Button as Btn
import Yoga.React (component)
import Yoga.React.DOM.HTML (a, div)
import YogaStories.Story (story) as S

mkNavbar :: {} -> JSX
mkNavbar = component "NavbarStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4" }
    [ Nav.navbar
        [ Nav.navbarStart
            [ a { className: "btn btn-ghost text-xl" } "daisyUI" ]
        , Nav.navbarCenter ([] :: Array JSX)
        , Nav.navbarEnd
            [ Btn.btn Btn.ghost "" "Button" ]
        ]
    , Nav.navbar
        [ Nav.navbarStart
            [ a { className: "btn btn-ghost text-xl" } "daisyUI" ]
        , Nav.navbarCenter
            [ a { className: "btn btn-ghost" } "Home"
            , a { className: "btn btn-ghost" } "About"
            , a { className: "btn btn-ghost" } "Contact"
            ]
        , Nav.navbarEnd
            [ Btn.btn Btn.primary "" "Get Started" ]
        ]
    ]

default :: JSX
default = S.story "default" mkNavbar {}
