module DaisyUI.Status where

import Prelude
import React.Basic (JSX)
import Yoga.React.DOM.HTML (span)

status :: String -> String -> JSX
status color size = span { className: "status" <> " " <> color <> " " <> size } ([] :: Array JSX)

-- Colors
neutral :: String
neutral = "status-neutral"

primary :: String
primary = "status-primary"

secondary :: String
secondary = "status-secondary"

accent :: String
accent = "status-accent"

info :: String
info = "status-info"

success :: String
success = "status-success"

warning :: String
warning = "status-warning"

error :: String
error = "status-error"

-- Sizes
xs :: String
xs = "status-xs"

sm :: String
sm = "status-sm"

md :: String
md = "status-md"

lg :: String
lg = "status-lg"

xl :: String
xl = "status-xl"
