module DaisyUI.Diff where

import React.Basic (JSX)
import Yoga.React.DOM.HTML (div)
import Yoga.React.DOM.Internal (class IsJSX)

diff :: forall kids. IsJSX kids => kids -> JSX
diff = div { className: "diff aspect-[16/9]" }

diffItem1 :: forall kids. IsJSX kids => kids -> JSX
diffItem1 = div { className: "diff-item-1" }

diffItem2 :: forall kids. IsJSX kids => kids -> JSX
diffItem2 = div { className: "diff-item-2" }

diffResizer :: JSX
diffResizer = div { className: "diff-resizer" } ([] :: Array JSX)
