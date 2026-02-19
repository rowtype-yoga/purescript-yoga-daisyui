module DaisyUI.Accordion where

import Prelude
import React.Basic (JSX)
import Yoga.React.DOM.HTML (div)
import Yoga.React.DOM.Internal (class IsJSX)

collapse :: String -> forall kids. IsJSX kids => kids -> JSX
collapse variant = div { className: "collapse" <> " " <> variant, tabIndex: 0 }

collapseTitle :: forall kids. IsJSX kids => kids -> JSX
collapseTitle = div { className: "collapse-title font-semibold" }

collapseContent :: forall kids. IsJSX kids => kids -> JSX
collapseContent = div { className: "collapse-content" }

-- Variants
arrow :: String
arrow = "collapse-arrow"

plus :: String
plus = "collapse-plus"

open :: String
open = "collapse-open"

close :: String
close = "collapse-close"
