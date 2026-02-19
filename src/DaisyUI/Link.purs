module DaisyUI.Link where

import Prelude

linkCls :: String -> String
linkCls color = "link" <> " " <> color

-- Colors
primary :: String
primary = "link-primary"

secondary :: String
secondary = "link-secondary"

accent :: String
accent = "link-accent"

neutral :: String
neutral = "link-neutral"

info :: String
info = "link-info"

success :: String
success = "link-success"

warning :: String
warning = "link-warning"

error :: String
error = "link-error"

-- Modifiers
hover :: String
hover = "link-hover"
