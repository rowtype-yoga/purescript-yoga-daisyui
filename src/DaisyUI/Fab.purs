module DaisyUI.Fab where

import React.Basic (JSX)
import Yoga.React.DOM.HTML (div, button)
import Yoga.React.DOM.Internal (class IsJSX)

fab :: forall kids. IsJSX kids => kids -> JSX
fab = div { className: "fab" }

fabFlower :: forall kids. IsJSX kids => kids -> JSX
fabFlower = div { className: "fab fab-flower" }

fabMainAction :: forall kids. IsJSX kids => kids -> JSX
fabMainAction = div { className: "fab-main-action", tabIndex: 0, role: "button" }

fabClose :: forall kids. IsJSX kids => kids -> JSX
fabClose = button { className: "fab-close btn btn-circle" }
