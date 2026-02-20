module DaisyUI.MockupCode where

import React.Basic (JSX)
import Yoga.React.DOM.HTML (div, pre, code)
import Yoga.React.DOM.Internal (class IsJSX)

mockupCode :: forall kids. IsJSX kids => kids -> JSX
mockupCode = div { className: "mockup-code w-full px-4 pb-4" }

codeLine :: String -> forall kids. IsJSX kids => kids -> JSX
codeLine prefix kids = pre { "data-prefix": prefix }
  [ code {} kids ]
