module DaisyUI.Carousel where

import Prelude
import React.Basic (JSX)
import Yoga.React.DOM.HTML (div)
import Yoga.React.DOM.Internal (class IsJSX)

carousel :: String -> forall kids. IsJSX kids => kids -> JSX
carousel modifier = div { className: "carousel" <> " " <> modifier }

carouselItem :: forall kids. IsJSX kids => kids -> JSX
carouselItem = div { className: "carousel-item" }

-- Modifiers
center :: String
center = "carousel-center"

end :: String
end = "carousel-end"

vertical :: String
vertical = "carousel-vertical"
