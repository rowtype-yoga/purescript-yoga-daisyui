module DaisyUI.Stat.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Stat as S
import Yoga.React (component)
import Yoga.React.DOM.HTML (div)
import YogaStories.Story (story) as Story

mkStat :: {} -> JSX
mkStat = component "StatStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4" }
    [ S.stats
        [ S.stat
            [ S.statTitle "Total Page Views"
            , S.statValue "89,400"
            , S.statDesc "21% more than last month"
            ]
        , S.stat
            [ S.statTitle "Total Users"
            , S.statValue "4,200"
            , S.statDesc "400 (22%)"
            ]
        , S.stat
            [ S.statTitle "New Registers"
            , S.statValue "1,200"
            , S.statDesc "90 (14%)"
            ]
        ]
    ]

default :: JSX
default = Story.story "default" mkStat {}
