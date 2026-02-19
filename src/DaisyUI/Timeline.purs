module DaisyUI.Timeline where

import React.Basic (JSX)
import Yoga.React.DOM.HTML (ul, li, div, hr)
import Yoga.React.DOM.Internal (class IsJSX)

timeline :: forall kids. IsJSX kids => kids -> JSX
timeline = ul { className: "timeline" }

timelineVertical :: forall kids. IsJSX kids => kids -> JSX
timelineVertical = ul { className: "timeline timeline-vertical" }

timelineItem :: forall kids. IsJSX kids => kids -> JSX
timelineItem = li {}

timelineStart :: forall kids. IsJSX kids => kids -> JSX
timelineStart = div { className: "timeline-start" }

timelineMiddle :: forall kids. IsJSX kids => kids -> JSX
timelineMiddle = div { className: "timeline-middle" }

timelineEnd :: forall kids. IsJSX kids => kids -> JSX
timelineEnd = div { className: "timeline-end" }

timelineLine :: JSX
timelineLine = hr {}
