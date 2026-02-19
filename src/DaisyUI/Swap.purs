module DaisyUI.Swap where

import React.Basic (JSX)
import Yoga.React.DOM.HTML (div, label)
import Yoga.React.DOM.Internal (class IsJSX)

swap :: forall kids. IsJSX kids => kids -> JSX
swap = label { className: "swap" }

swapRotate :: forall kids. IsJSX kids => kids -> JSX
swapRotate = label { className: "swap swap-rotate" }

swapFlip :: forall kids. IsJSX kids => kids -> JSX
swapFlip = label { className: "swap swap-flip" }

swapOn :: forall kids. IsJSX kids => kids -> JSX
swapOn = div { className: "swap-on" }

swapOff :: forall kids. IsJSX kids => kids -> JSX
swapOff = div { className: "swap-off" }
