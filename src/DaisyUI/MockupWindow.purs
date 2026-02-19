module DaisyUI.MockupWindow where

import React.Basic (JSX)
import Yoga.React.DOM.HTML (div)
import Yoga.React.DOM.Internal (class IsJSX)

mockupWindow :: forall kids. IsJSX kids => kids -> JSX
mockupWindow = div { className: "mockup-window border-base-300 border" }
