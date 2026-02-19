module DaisyUI.MockupPhone where

import React.Basic (JSX)
import Yoga.React.DOM.HTML (div)
import Yoga.React.DOM.Internal (class IsJSX)

mockupPhone :: forall kids. IsJSX kids => kids -> JSX
mockupPhone kids = div { className: "mockup-phone" }
  [ div { className: "mockup-phone-camera" } ([] :: Array JSX)
  , div { className: "mockup-phone-display" } kids
  ]
