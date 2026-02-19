module DaisyUI.Steps where

import Prelude
import React.Basic (JSX)
import Yoga.React.DOM.HTML (ul, li)
import Yoga.React.DOM.Internal (class IsJSX)

steps :: String -> forall kids. IsJSX kids => kids -> JSX
steps direction = ul { className: "steps" <> " " <> direction }

step :: String -> forall kids. IsJSX kids => kids -> JSX
step color = li { className: "step" <> " " <> color }

-- Directions
horizontal :: String
horizontal = "steps-horizontal"

vertical :: String
vertical = "steps-vertical"

-- Colors
primary :: String
primary = "step-primary"

secondary :: String
secondary = "step-secondary"

accent :: String
accent = "step-accent"

info :: String
info = "step-info"

success :: String
success = "step-success"

warning :: String
warning = "step-warning"

error :: String
error = "step-error"

neutral :: String
neutral = "step-neutral"
