module DaisyUI.Hero where

import React.Basic (JSX)
import Yoga.React.DOM.HTML (div)
import Yoga.React.DOM.Internal (class IsJSX)

hero :: forall kids. IsJSX kids => kids -> JSX
hero = div { className: "hero min-h-screen" }

heroContent :: forall kids. IsJSX kids => kids -> JSX
heroContent = div { className: "hero-content text-center" }

heroOverlay :: forall kids. IsJSX kids => kids -> JSX
heroOverlay = div { className: "hero-overlay bg-opacity-60" }
