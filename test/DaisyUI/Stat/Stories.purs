module DaisyUI.Stat.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Stat as S
import Yoga.React (component)
import Yoga.React.DOM.HTML (div)
import Yoga.React.DOM.Internal (text)
import YogaStories.Story (story) as Story

mkStat :: {} -> JSX
mkStat = component "StatStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4" }
    [ S.stats
        [ S.stat
            [ S.statTitle (text "Total Page Views")
            , S.statValue (text "89,400")
            , S.statDesc (text "21% more than last month")
            ]
        , S.stat
            [ S.statTitle (text "Total Users")
            , S.statValue (text "4,200")
            , S.statDesc (text "↗︎ 400 (22%)")
            ]
        , S.stat
            [ S.statTitle (text "New Registers")
            , S.statValue (text "1,200")
            , S.statDesc (text "↘︎ 90 (14%)")
            ]
        ]
    ]

default :: JSX
default = Story.story "default" mkStat {}
