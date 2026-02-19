module DaisyUI.Label where

import React.Basic (JSX)
import Yoga.React.DOM.HTML (span, label)
import Yoga.React.DOM.Internal (class IsJSX)

labelCls :: String
labelCls = "label"

floatingLabel :: forall kids. IsJSX kids => kids -> JSX
floatingLabel = label { className: "floating-label" }

labelSpan :: forall kids. IsJSX kids => kids -> JSX
labelSpan = span { className: "label" }
