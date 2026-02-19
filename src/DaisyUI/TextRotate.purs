module DaisyUI.TextRotate where

import React.Basic (JSX)
import Yoga.React.DOM.HTML (span)
import Yoga.React.DOM.Internal (class IsJSX)

textRotate :: forall kids. IsJSX kids => kids -> JSX
textRotate = span { className: "text-rotate" }

textRotateItem :: forall kids. IsJSX kids => kids -> JSX
textRotateItem = span {}
