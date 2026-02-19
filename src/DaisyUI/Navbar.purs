module DaisyUI.Navbar where

import React.Basic (JSX)
import Yoga.React.DOM.HTML (div)
import Yoga.React.DOM.Internal (class IsJSX)

navbar :: forall kids. IsJSX kids => kids -> JSX
navbar = div { className: "navbar bg-base-100" }

navbarStart :: forall kids. IsJSX kids => kids -> JSX
navbarStart = div { className: "navbar-start" }

navbarCenter :: forall kids. IsJSX kids => kids -> JSX
navbarCenter = div { className: "navbar-center" }

navbarEnd :: forall kids. IsJSX kids => kids -> JSX
navbarEnd = div { className: "navbar-end" }
