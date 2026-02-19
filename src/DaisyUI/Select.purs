module DaisyUI.Select where

import Prelude

selectCls :: String -> String -> String
selectCls color size = "select" <> " " <> color <> " " <> size

-- Colors
primary :: String
primary = "select-primary"

secondary :: String
secondary = "select-secondary"

accent :: String
accent = "select-accent"

info :: String
info = "select-info"

success :: String
success = "select-success"

warning :: String
warning = "select-warning"

error :: String
error = "select-error"

-- Sizes
xs :: String
xs = "select-xs"

sm :: String
sm = "select-sm"

md :: String
md = "select-md"

lg :: String
lg = "select-lg"

-- Modifiers
bordered :: String
bordered = "select-bordered"

ghost :: String
ghost = "select-ghost"
