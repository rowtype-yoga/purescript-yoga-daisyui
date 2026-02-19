module DaisyUI.Alert where

import Prelude
import React.Basic (JSX)
import Yoga.React.DOM.HTML (div, span)
import Yoga.React.DOM.Internal (class IsJSX)

alert :: String -> forall kids. IsJSX kids => kids -> JSX
alert color = div { className: "alert" <> " " <> color, role: "alert" }

-- Colors
info :: String
info = "alert-info"

success :: String
success = "alert-success"

warning :: String
warning = "alert-warning"

error :: String
error = "alert-error"

-- Modifiers
soft :: String
soft = "alert-soft"

dash :: String
dash = "alert-dash"

outline :: String
outline = "alert-outline"

vertical :: String
vertical = "alert-vertical"
