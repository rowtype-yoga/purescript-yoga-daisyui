module DaisyUI.Tooltip where

import Prelude
import React.Basic (JSX)
import Yoga.React.DOM.HTML (div)
import Yoga.React.DOM.Internal (class IsJSX)

tooltip :: String -> String -> forall kids. IsJSX kids => kids -> JSX
tooltip tip position = div { className: "tooltip" <> " " <> position, "data-tip": tip }

-- Positions
top :: String
top = "tooltip-top"

bottom :: String
bottom = "tooltip-bottom"

left :: String
left = "tooltip-left"

right :: String
right = "tooltip-right"

-- Colors
primary :: String
primary = "tooltip-primary"

secondary :: String
secondary = "tooltip-secondary"

accent :: String
accent = "tooltip-accent"

info :: String
info = "tooltip-info"

success :: String
success = "tooltip-success"

warning :: String
warning = "tooltip-warning"

error :: String
error = "tooltip-error"
