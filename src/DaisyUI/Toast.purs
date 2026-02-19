module DaisyUI.Toast where

import Prelude
import React.Basic (JSX)
import Yoga.React.DOM.HTML (div)
import Yoga.React.DOM.Internal (class IsJSX)

toast :: String -> forall kids. IsJSX kids => kids -> JSX
toast position = div { className: "toast" <> " " <> position }

-- Positions
toastStart :: String
toastStart = "toast-start"

toastCenter :: String
toastCenter = "toast-center"

toastEnd :: String
toastEnd = "toast-end"

toastTop :: String
toastTop = "toast-top"

toastMiddle :: String
toastMiddle = "toast-middle"

toastBottom :: String
toastBottom = "toast-bottom"
