module DaisyUI.Breadcrumbs where

import React.Basic (JSX)
import Yoga.React.DOM.HTML (div, ul, li)
import Yoga.React.DOM.Internal (class IsJSX)

breadcrumbs :: forall kids. IsJSX kids => kids -> JSX
breadcrumbs kids = div { className: "breadcrumbs text-sm" }
  [ ul {} kids ]

breadcrumbItem :: forall kids. IsJSX kids => kids -> JSX
breadcrumbItem = li {}
