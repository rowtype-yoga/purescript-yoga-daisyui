module DaisyUI.Filter where

import React.Basic (JSX)
import Yoga.React.DOM.HTML (div)
import Yoga.React.DOM.Internal (class IsJSX)

filter :: forall kids. IsJSX kids => kids -> JSX
filter = div { className: "filter" }

filterReset :: String
filterReset = "filter-reset"
