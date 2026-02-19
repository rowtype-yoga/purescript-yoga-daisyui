module DaisyUI.Rating where

import Prelude
import React.Basic (JSX)
import Yoga.React.DOM.HTML (div)
import Yoga.React.DOM.Internal (class IsJSX)

rating :: String -> forall kids. IsJSX kids => kids -> JSX
rating size = div { className: "rating" <> " " <> size }

ratingHalf :: String -> forall kids. IsJSX kids => kids -> JSX
ratingHalf size = div { className: "rating rating-half" <> " " <> size }

-- Sizes
xs :: String
xs = "rating-xs"

sm :: String
sm = "rating-sm"

md :: String
md = "rating-md"

lg :: String
lg = "rating-lg"
