module DaisyUI.MockupCode where

import React.Basic (JSX)
import Yoga.React.DOM.HTML (div, pre, code)
import Yoga.React.DOM.Internal (class IsJSX)

mockupCode :: forall kids. IsJSX kids => kids -> JSX
mockupCode = div { className: "mockup-code" }

codeLine :: String -> forall kids. IsJSX kids => kids -> JSX
codeLine prefix kids = pre { "data-prefix": prefix }
  [ code {} kids ]
