module DaisyUI.FileInput where

import Prelude

fileInputCls :: String -> String -> String
fileInputCls color size = "file-input" <> " " <> color <> " " <> size

-- Colors
primary :: String
primary = "file-input-primary"

secondary :: String
secondary = "file-input-secondary"

accent :: String
accent = "file-input-accent"

info :: String
info = "file-input-info"

success :: String
success = "file-input-success"

warning :: String
warning = "file-input-warning"

error :: String
error = "file-input-error"

-- Sizes
xs :: String
xs = "file-input-xs"

sm :: String
sm = "file-input-sm"

md :: String
md = "file-input-md"

lg :: String
lg = "file-input-lg"

-- Modifiers
bordered :: String
bordered = "file-input-bordered"

ghost :: String
ghost = "file-input-ghost"
