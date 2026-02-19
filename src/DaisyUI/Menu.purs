module DaisyUI.Menu where

import Prelude
import React.Basic (JSX)
import Yoga.React.DOM.HTML (ul, li, span, details, summary)
import Yoga.React.DOM.Internal (class IsJSX)

menu :: String -> forall kids. IsJSX kids => kids -> JSX
menu size = ul { className: "menu" <> " " <> size }

menuHorizontal :: String -> forall kids. IsJSX kids => kids -> JSX
menuHorizontal size = ul { className: "menu menu-horizontal" <> " " <> size }

menuItem :: forall kids. IsJSX kids => kids -> JSX
menuItem = li {}

menuTitle :: forall kids. IsJSX kids => kids -> JSX
menuTitle = li { className: "menu-title" }

menuDisabled :: forall kids. IsJSX kids => kids -> JSX
menuDisabled = li { className: "disabled" }

menuActive :: forall kids. IsJSX kids => kids -> JSX
menuActive = li { className: "active" }  -- Wrapping `<a>` gets the `active` style via DaisyUI

menuSub :: forall kids. IsJSX kids => String -> kids -> JSX
menuSub title kids = li {}
  [ details {}
      [ summary {} (span {} title)
      , ul {} kids
      ]
  ]

-- Sizes
xs :: String
xs = "menu-xs"

sm :: String
sm = "menu-sm"

md :: String
md = "menu-md"

lg :: String
lg = "menu-lg"
