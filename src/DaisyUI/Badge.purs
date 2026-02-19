module DaisyUI.Badge where

import Prelude
import React.Basic (JSX)
import Yoga.React.DOM.HTML (span)
import Yoga.React.DOM.Internal (class IsJSX)

badge :: String -> String -> forall kids. IsJSX kids => kids -> JSX
badge color size = span { className: "badge" <> " " <> color <> " " <> size }

-- Colors
neutral :: String
neutral = "badge-neutral"

primary :: String
primary = "badge-primary"

secondary :: String
secondary = "badge-secondary"

accent :: String
accent = "badge-accent"

info :: String
info = "badge-info"

success :: String
success = "badge-success"

warning :: String
warning = "badge-warning"

error :: String
error = "badge-error"

ghost :: String
ghost = "badge-ghost"

-- Sizes
xs :: String
xs = "badge-xs"

sm :: String
sm = "badge-sm"

md :: String
md = "badge-md"

lg :: String
lg = "badge-lg"

-- Modifiers
outline :: String
outline = "badge-outline"

soft :: String
soft = "badge-soft"

dash :: String
dash = "badge-dash"
