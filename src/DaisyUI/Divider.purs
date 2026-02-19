module DaisyUI.Divider where

import Prelude
import React.Basic (JSX)
import Yoga.React.DOM.HTML (div)
import Yoga.React.DOM.Internal (class IsJSX)

divider :: forall kids. IsJSX kids => kids -> JSX
divider = div { className: "divider" }

dividerHorizontal :: forall kids. IsJSX kids => kids -> JSX
dividerHorizontal = div { className: "divider divider-horizontal" }

dividerPrimary :: forall kids. IsJSX kids => kids -> JSX
dividerPrimary = div { className: "divider divider-primary" }

dividerSecondary :: forall kids. IsJSX kids => kids -> JSX
dividerSecondary = div { className: "divider divider-secondary" }

dividerAccent :: forall kids. IsJSX kids => kids -> JSX
dividerAccent = div { className: "divider divider-accent" }

dividerNeutral :: forall kids. IsJSX kids => kids -> JSX
dividerNeutral = div { className: "divider divider-neutral" }

dividerSuccess :: forall kids. IsJSX kids => kids -> JSX
dividerSuccess = div { className: "divider divider-success" }

dividerWarning :: forall kids. IsJSX kids => kids -> JSX
dividerWarning = div { className: "divider divider-warning" }

dividerError :: forall kids. IsJSX kids => kids -> JSX
dividerError = div { className: "divider divider-error" }

dividerInfo :: forall kids. IsJSX kids => kids -> JSX
dividerInfo = div { className: "divider divider-info" }

dividerStart :: forall kids. IsJSX kids => kids -> JSX
dividerStart = div { className: "divider divider-start" }

dividerEnd :: forall kids. IsJSX kids => kids -> JSX
dividerEnd = div { className: "divider divider-end" }
