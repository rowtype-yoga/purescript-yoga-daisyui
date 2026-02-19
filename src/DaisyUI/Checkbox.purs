module DaisyUI.Checkbox where

import Prelude

checkboxCls :: String -> String -> String
checkboxCls color size = "checkbox" <> " " <> color <> " " <> size

-- Colors
primary :: String
primary = "checkbox-primary"

secondary :: String
secondary = "checkbox-secondary"

accent :: String
accent = "checkbox-accent"

info :: String
info = "checkbox-info"

success :: String
success = "checkbox-success"

warning :: String
warning = "checkbox-warning"

error :: String
error = "checkbox-error"

-- Sizes
xs :: String
xs = "checkbox-xs"

sm :: String
sm = "checkbox-sm"

md :: String
md = "checkbox-md"

lg :: String
lg = "checkbox-lg"
