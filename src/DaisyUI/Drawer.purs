module DaisyUI.Drawer where

import React.Basic (JSX)
import Yoga.React.DOM.HTML (div)
import Yoga.React.DOM.Internal (class IsJSX)

drawer :: forall kids. IsJSX kids => kids -> JSX
drawer = div { className: "drawer" }

drawerToggle :: String
drawerToggle = "drawer-toggle"

drawerContent :: forall kids. IsJSX kids => kids -> JSX
drawerContent = div { className: "drawer-content" }

drawerSide :: forall kids. IsJSX kids => kids -> JSX
drawerSide = div { className: "drawer-side" }

drawerOverlay :: String
drawerOverlay = "drawer-overlay"

drawerEnd :: forall kids. IsJSX kids => kids -> JSX
drawerEnd = div { className: "drawer drawer-end" }
