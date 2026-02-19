module DaisyUI.Validator where

import React.Basic (JSX)
import Yoga.React.DOM.HTML (div)
import Yoga.React.DOM.Internal (class IsJSX)

validatorCls :: String
validatorCls = "validator"

validatorHint :: forall kids. IsJSX kids => kids -> JSX
validatorHint = div { className: "validator-hint" }
