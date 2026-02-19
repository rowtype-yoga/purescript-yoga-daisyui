module DaisyUI.Progress where

import Prelude

progressCls :: String -> String
progressCls color = "progress" <> " " <> color

-- Colors
primary :: String
primary = "progress-primary"

secondary :: String
secondary = "progress-secondary"

accent :: String
accent = "progress-accent"

info :: String
info = "progress-info"

success :: String
success = "progress-success"

warning :: String
warning = "progress-warning"

error :: String
error = "progress-error"
