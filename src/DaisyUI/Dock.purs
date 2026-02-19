module DaisyUI.Dock where

import Prelude hiding (div)
import React.Basic (JSX)
import Yoga.React.DOM.HTML (div, button, span)
import Yoga.React.DOM.Internal (class IsJSX)

dock :: String -> forall kids. IsJSX kids => kids -> JSX
dock size = div { className: "dock" <> " " <> size }

dockItem :: forall kids. IsJSX kids => kids -> JSX
dockItem = button {}

dockItemActive :: forall kids. IsJSX kids => kids -> JSX
dockItemActive = button { className: "dock-active" }

dockLabel :: forall kids. IsJSX kids => kids -> JSX
dockLabel = span { className: "dock-label" }

-- Sizes
xs :: String
xs = "dock-xs"

sm :: String
sm = "dock-sm"

md :: String
md = "dock-md"

lg :: String
lg = "dock-lg"

xl :: String
xl = "dock-xl"
