module DaisyUI.Pagination where

import React.Basic (JSX)
import Yoga.React.DOM.HTML (div)
import Yoga.React.DOM.Internal (class IsJSX)

join :: forall kids. IsJSX kids => kids -> JSX
join = div { className: "join" }

joinVertical :: forall kids. IsJSX kids => kids -> JSX
joinVertical = div { className: "join join-vertical" }

joinItem :: String
joinItem = "join-item"
