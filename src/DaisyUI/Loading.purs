module DaisyUI.Loading where

import Prelude
import React.Basic (JSX)
import Yoga.React.DOM.HTML (span)

loading :: String -> String -> JSX
loading variant size = span { className: "loading" <> " " <> variant <> " " <> size } ([] :: Array JSX)

-- Variants
spinner :: String
spinner = "loading-spinner"

dots :: String
dots = "loading-dots"

ring :: String
ring = "loading-ring"

ball :: String
ball = "loading-ball"

bars :: String
bars = "loading-bars"

infinity :: String
infinity = "loading-infinity"

-- Sizes
xs :: String
xs = "loading-xs"

sm :: String
sm = "loading-sm"

md :: String
md = "loading-md"

lg :: String
lg = "loading-lg"
