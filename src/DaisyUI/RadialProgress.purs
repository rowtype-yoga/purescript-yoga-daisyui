module DaisyUI.RadialProgress where

import React.Basic (JSX)
import Yoga.React.DOM.HTML (div)
import Yoga.React.DOM.Internal (class IsJSX, css)

radialProgress :: Int -> forall kids. IsJSX kids => kids -> JSX
radialProgress value = div
  { className: "radial-progress"
  , style: css { "--value": value }
  , role: "progressbar"
  }
