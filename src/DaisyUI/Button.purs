module DaisyUI.Button where

import Prelude
import React.Basic (JSX)
import Yoga.React.DOM.HTML (button)
import Yoga.React.DOM.Internal (class IsJSX)

btn :: String -> String -> forall kids. IsJSX kids => kids -> JSX
btn color size = button { className: "btn" <> " " <> color <> " " <> size }

-- Colors
neutral :: String
neutral = "btn-neutral"

primary :: String
primary = "btn-primary"

secondary :: String
secondary = "btn-secondary"

accent :: String
accent = "btn-accent"

info :: String
info = "btn-info"

success :: String
success = "btn-success"

warning :: String
warning = "btn-warning"

error :: String
error = "btn-error"

ghost :: String
ghost = "btn-ghost"

link :: String
link = "btn-link"

-- Sizes
xs :: String
xs = "btn-xs"

sm :: String
sm = "btn-sm"

md :: String
md = ""

lg :: String
lg = "btn-lg"

-- Modifiers
outline :: String
outline = "btn-outline"

wide :: String
wide = "btn-wide"

block :: String
block = "btn-block"

circle :: String
circle = "btn-circle"

square :: String
square = "btn-square"

noAnimation :: String
noAnimation = "no-animation"

glass :: String
glass = "glass"

active :: String
active = "btn-active"

disabled :: String
disabled = "btn-disabled"

soft :: String
soft = "btn-soft"

dash :: String
dash = "btn-dash"
