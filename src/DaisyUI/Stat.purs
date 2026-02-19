module DaisyUI.Stat where

import React.Basic (JSX)
import Yoga.React.DOM.HTML (div)
import Yoga.React.DOM.Internal (class IsJSX)

stats :: forall kids. IsJSX kids => kids -> JSX
stats = div { className: "stats shadow-sm" }

statsVertical :: forall kids. IsJSX kids => kids -> JSX
statsVertical = div { className: "stats stats-vertical shadow-sm" }

stat :: forall kids. IsJSX kids => kids -> JSX
stat = div { className: "stat" }

statTitle :: forall kids. IsJSX kids => kids -> JSX
statTitle = div { className: "stat-title" }

statValue :: forall kids. IsJSX kids => kids -> JSX
statValue = div { className: "stat-value" }

statDesc :: forall kids. IsJSX kids => kids -> JSX
statDesc = div { className: "stat-desc" }

statFigure :: forall kids. IsJSX kids => kids -> JSX
statFigure = div { className: "stat-figure text-primary" }

statActions :: forall kids. IsJSX kids => kids -> JSX
statActions = div { className: "stat-actions" }
