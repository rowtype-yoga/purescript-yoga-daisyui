module DaisyUI.Range where

import Prelude

rangeCls :: String -> String -> String
rangeCls color size = "range" <> " " <> color <> " " <> size

-- Colors
primary :: String
primary = "range-primary"

secondary :: String
secondary = "range-secondary"

accent :: String
accent = "range-accent"

info :: String
info = "range-info"

success :: String
success = "range-success"

warning :: String
warning = "range-warning"

error :: String
error = "range-error"

-- Sizes
xs :: String
xs = "range-xs"

sm :: String
sm = "range-sm"

md :: String
md = "range-md"

lg :: String
lg = "range-lg"
