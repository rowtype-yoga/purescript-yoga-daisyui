module DaisyUI.Radio where

import Prelude

radioCls :: String -> String -> String
radioCls color size = "radio" <> " " <> color <> " " <> size

-- Colors
primary :: String
primary = "radio-primary"

secondary :: String
secondary = "radio-secondary"

accent :: String
accent = "radio-accent"

info :: String
info = "radio-info"

success :: String
success = "radio-success"

warning :: String
warning = "radio-warning"

error :: String
error = "radio-error"

-- Sizes
xs :: String
xs = "radio-xs"

sm :: String
sm = "radio-sm"

md :: String
md = "radio-md"

lg :: String
lg = "radio-lg"
