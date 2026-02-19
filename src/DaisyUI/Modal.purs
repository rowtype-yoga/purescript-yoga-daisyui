module DaisyUI.Modal where

import Prelude
import Effect (Effect)
import Effect.Uncurried (EffectFn1, runEffectFn1)
import React.Basic (JSX)
import Yoga.React.DOM.HTML (div)
import Yoga.React.DOM.Internal (class IsJSX)
import Web.HTML.HTMLDialogElement (HTMLDialogElement)

foreign import showModalImpl :: EffectFn1 HTMLDialogElement Unit
foreign import closeImpl :: EffectFn1 HTMLDialogElement Unit

showModal :: HTMLDialogElement -> Effect Unit
showModal = runEffectFn1 showModalImpl

closeModal :: HTMLDialogElement -> Effect Unit
closeModal = runEffectFn1 closeImpl

modalBox :: forall kids. IsJSX kids => kids -> JSX
modalBox = div { className: "modal-box" }

modalAction :: forall kids. IsJSX kids => kids -> JSX
modalAction = div { className: "modal-action" }

modalTop :: forall kids. IsJSX kids => kids -> JSX
modalTop = div { className: "modal-top" }

modalMiddle :: forall kids. IsJSX kids => kids -> JSX
modalMiddle = div { className: "modal-middle" }

modalBottom :: forall kids. IsJSX kids => kids -> JSX
modalBottom = div { className: "modal-bottom" }

modalBackdrop :: String
modalBackdrop = "modal-backdrop"
