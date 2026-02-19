module DaisyUI.Kbd where

import Prelude
import React.Basic (JSX)
import Yoga.React.DOM.HTML (kbd)
import Yoga.React.DOM.Internal (class IsJSX)

kbdKey :: String -> forall kids. IsJSX kids => kids -> JSX
kbdKey size = kbd { className: "kbd" <> " " <> size }

-- Sizes
xs :: String
xs = "kbd-xs"

sm :: String
sm = "kbd-sm"

md :: String
md = "kbd-md"

lg :: String
lg = "kbd-lg"
