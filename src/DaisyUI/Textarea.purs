module DaisyUI.Textarea where

import Prelude

textareaCls :: String -> String -> String
textareaCls color size = "textarea" <> " " <> color <> " " <> size

-- Colors
primary :: String
primary = "textarea-primary"

secondary :: String
secondary = "textarea-secondary"

accent :: String
accent = "textarea-accent"

info :: String
info = "textarea-info"

success :: String
success = "textarea-success"

warning :: String
warning = "textarea-warning"

error :: String
error = "textarea-error"

-- Sizes
xs :: String
xs = "textarea-xs"

sm :: String
sm = "textarea-sm"

md :: String
md = "textarea-md"

lg :: String
lg = "textarea-lg"

-- Modifiers
bordered :: String
bordered = "textarea-bordered"

ghost :: String
ghost = "textarea-ghost"
