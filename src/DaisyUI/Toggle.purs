module DaisyUI.Toggle where

import Prelude

toggleCls :: String -> String -> String
toggleCls color size = "toggle" <> " " <> color <> " " <> size

-- Colors
primary :: String
primary = "toggle-primary"

secondary :: String
secondary = "toggle-secondary"

accent :: String
accent = "toggle-accent"

info :: String
info = "toggle-info"

success :: String
success = "toggle-success"

warning :: String
warning = "toggle-warning"

error :: String
error = "toggle-error"

-- Sizes
xs :: String
xs = "toggle-xs"

sm :: String
sm = "toggle-sm"

md :: String
md = "toggle-md"

lg :: String
lg = "toggle-lg"
