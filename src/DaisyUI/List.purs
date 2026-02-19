module DaisyUI.List where

import React.Basic (JSX)
import Yoga.React.DOM.HTML (ul, li, div)
import Yoga.React.DOM.Internal (class IsJSX)

list :: forall kids. IsJSX kids => kids -> JSX
list = ul { className: "list bg-base-100 rounded-box shadow-md" }

listRow :: forall kids. IsJSX kids => kids -> JSX
listRow = li { className: "list-row" }

listColWrap :: forall kids. IsJSX kids => kids -> JSX
listColWrap = div { className: "list-col-wrap" }

listColGrow :: forall kids. IsJSX kids => kids -> JSX
listColGrow = div { className: "list-col-grow" }
