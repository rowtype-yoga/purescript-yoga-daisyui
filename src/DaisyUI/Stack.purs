module DaisyUI.Stack where

import React.Basic (JSX)
import Yoga.React.DOM.HTML (div)
import Yoga.React.DOM.Internal (class IsJSX)

stack :: forall kids. IsJSX kids => kids -> JSX
stack = div { className: "stack" }
