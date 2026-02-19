module DaisyUI.Skeleton where

import Prelude hiding (div)
import React.Basic (JSX)
import Yoga.React.DOM.HTML (div)

skeleton :: String -> JSX
skeleton className = div { className: "skeleton " <> className } ([] :: Array JSX)
