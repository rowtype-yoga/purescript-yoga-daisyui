module DaisyUI.Card where

import React.Basic (JSX)
import Yoga.React.DOM.HTML (div, h2)
import Yoga.React.DOM.Internal (class IsJSX)

card :: forall kids. IsJSX kids => kids -> JSX
card = div { className: "card bg-base-100 shadow-sm" }

cardCompact :: forall kids. IsJSX kids => kids -> JSX
cardCompact = div { className: "card card-compact bg-base-100 shadow-sm" }

cardSide :: forall kids. IsJSX kids => kids -> JSX
cardSide = div { className: "card card-side bg-base-100 shadow-sm" }

cardBordered :: forall kids. IsJSX kids => kids -> JSX
cardBordered = div { className: "card card-border bg-base-100 shadow-sm" }

cardDash :: forall kids. IsJSX kids => kids -> JSX
cardDash = div { className: "card card-dash bg-base-100 shadow-sm" }

cardBody :: forall kids. IsJSX kids => kids -> JSX
cardBody = div { className: "card-body" }

cardTitle :: forall kids. IsJSX kids => kids -> JSX
cardTitle = h2 { className: "card-title" }

cardActions :: forall kids. IsJSX kids => kids -> JSX
cardActions = div { className: "card-actions justify-end" }
