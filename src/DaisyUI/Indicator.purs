module DaisyUI.Indicator where

import Prelude
import React.Basic (JSX)
import Yoga.React.DOM.HTML (div, span)
import Yoga.React.DOM.Internal (class IsJSX)

indicator :: forall kids. IsJSX kids => kids -> JSX
indicator = div { className: "indicator" }

indicatorItem :: String -> forall kids. IsJSX kids => kids -> JSX
indicatorItem position = span { className: "indicator-item" <> " " <> position }

-- Positions
indicatorTop :: String
indicatorTop = "indicator-top"

indicatorBottom :: String
indicatorBottom = "indicator-bottom"

indicatorStart :: String
indicatorStart = "indicator-start"

indicatorEnd :: String
indicatorEnd = "indicator-end"

indicatorCenter :: String
indicatorCenter = "indicator-center"
