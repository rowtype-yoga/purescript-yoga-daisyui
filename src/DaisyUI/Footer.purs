module DaisyUI.Footer where

import React.Basic (JSX)
import Yoga.React.DOM.HTML (div, nav, span)
import Yoga.React.DOM.Internal (class IsJSX)

footer :: forall kids. IsJSX kids => kids -> JSX
footer = div { className: "footer bg-base-200 text-base-content p-10" }

footerCenter :: forall kids. IsJSX kids => kids -> JSX
footerCenter = div { className: "footer footer-center bg-base-200 text-base-content p-10" }

footerTitle :: forall kids. IsJSX kids => kids -> JSX
footerTitle = span { className: "footer-title" }

footerNav :: forall kids. IsJSX kids => kids -> JSX
footerNav = nav {}
