module DaisyUI.FormControl where

import React.Basic (JSX)
import Yoga.React.DOM.HTML (div, label, span)
import Yoga.React.DOM.Internal (class IsJSX)

formControl :: forall kids. IsJSX kids => kids -> JSX
formControl = div { className: "form-control w-full" }

fieldset :: forall kids. IsJSX kids => kids -> JSX
fieldset = div { className: "fieldset" }

fieldsetLegend :: forall kids. IsJSX kids => kids -> JSX
fieldsetLegend = div { className: "fieldset-legend" }

labelText :: forall kids. IsJSX kids => kids -> JSX
labelText kids = label { className: "label" }
  [ span { className: "label-text" } kids ]

labelTextAlt :: forall kids. IsJSX kids => kids -> JSX
labelTextAlt kids = label { className: "label" }
  [ span { className: "label-text-alt" } kids ]
