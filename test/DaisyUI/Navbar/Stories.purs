module DaisyUI.Navbar.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Navbar as Nav
import DaisyUI.Button as Btn
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, a)
import Yoga.React.DOM.Internal (text)
import YogaStories.Story (story) as S

mkNavbar :: {} -> JSX
mkNavbar = component "NavbarStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4" }
    [ Nav.navbar
        [ Nav.navbarStart
            [ a { className: "btn btn-ghost text-xl" } (text "daisyUI") ]
        , Nav.navbarEnd
            [ Btn.btn Btn.ghost Btn.md (text "About")
            , Btn.btn Btn.primary Btn.md (text "Get Started")
            ]
        ]
    ]

default :: JSX
default = S.story "default" mkNavbar {}
