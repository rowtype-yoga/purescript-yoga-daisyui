module DaisyUI.Timeline.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Timeline as TL
import Yoga.React (component)
import Yoga.React.DOM.HTML (div)
import YogaStories.Story (story) as S

mkTimeline :: {} -> JSX
mkTimeline = component "TimelineStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4" }
    [ TL.timeline
        [ TL.timelineItem
            [ TL.timelineLine
            , TL.timelineStart "1984"
            , TL.timelineMiddle ([] :: Array JSX)
            , TL.timelineEnd "First computer"
            , TL.timelineLine
            ]
        , TL.timelineItem
            [ TL.timelineLine
            , TL.timelineStart "1998"
            , TL.timelineMiddle ([] :: Array JSX)
            , TL.timelineEnd "First website"
            , TL.timelineLine
            ]
        , TL.timelineItem
            [ TL.timelineLine
            , TL.timelineStart "2024"
            , TL.timelineMiddle ([] :: Array JSX)
            , TL.timelineEnd "PureScript + DaisyUI"
            ]
        ]
    ]

default :: JSX
default = S.story "default" mkTimeline {}
