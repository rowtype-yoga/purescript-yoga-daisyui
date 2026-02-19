module DaisyUI.Input where

import Prelude

inputCls :: String -> String -> String
inputCls color size = "input" <> " " <> color <> " " <> size

-- Colors
primary :: String
primary = "input-primary"

secondary :: String
secondary = "input-secondary"

accent :: String
accent = "input-accent"

info :: String
info = "input-info"

success :: String
success = "input-success"

warning :: String
warning = "input-warning"

error :: String
error = "input-error"

-- Sizes
xs :: String
xs = "input-xs"

sm :: String
sm = "input-sm"

md :: String
md = "input-md"

lg :: String
lg = "input-lg"

-- Modifiers
bordered :: String
bordered = "input-bordered"

ghost :: String
ghost = "input-ghost"
