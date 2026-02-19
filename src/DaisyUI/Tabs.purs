module DaisyUI.Tabs where

import Prelude
import React.Basic (JSX)
import Yoga.React.DOM.HTML (div)
import Yoga.React.DOM.Internal (class IsJSX)

tabs :: String -> forall kids. IsJSX kids => kids -> JSX
tabs variant = div { className: "tabs" <> " " <> variant, role: "tablist" }

tab :: forall kids. IsJSX kids => kids -> JSX
tab = div { className: "tab", role: "tab" }

tabActive :: forall kids. IsJSX kids => kids -> JSX
tabActive = div { className: "tab tab-active", role: "tab" }

tabContent :: forall kids. IsJSX kids => kids -> JSX
tabContent = div { className: "tab-content p-4", role: "tabpanel" }

-- Variants
boxed :: String
boxed = "tabs-box"

bordered :: String
bordered = "tabs-border"

lifted :: String
lifted = "tabs-lift"

-- Sizes
xs :: String
xs = "tabs-xs"

sm :: String
sm = "tabs-sm"

md :: String
md = "tabs-md"

lg :: String
lg = "tabs-lg"
