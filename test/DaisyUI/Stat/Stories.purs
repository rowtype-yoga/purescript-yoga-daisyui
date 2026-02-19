module DaisyUI.Stat.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Stat as St
import DaisyUI.Button as Btn
import Yoga.React (component)
import Yoga.React.DOM.HTML (div)
import YogaStories.Story (story) as Story

mkStat :: {} -> JSX
mkStat = component "StatStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4" }
    [ St.stats
        [ St.stat
            [ St.statTitle "Total Page Views"
            , St.statValue "89,400"
            , St.statDesc "21% more than last month"
            ]
        , St.stat
            [ St.statTitle "New Users"
            , St.statValue "4,200"
            , St.statDesc "↗︎ 400 (22%)"
            ]
        , St.stat
            [ St.statTitle "New Registers"
            , St.statValue "1,200"
            , St.statDesc "↘︎ 90 (14%)"
            ]
        ]
    , St.stats
        [ St.stat
            [ St.statTitle "Account balance"
            , St.statValue "$89,400"
            , St.statActions [ Btn.btn (Btn.primary <> " btn-sm") "" "Add funds" ]
            ]
        , St.stat
            [ St.statTitle "Current balance"
            , St.statValue "$89,400"
            , St.statActions
                [ Btn.btn "btn-sm" "" "Withdrawal"
                , Btn.btn "btn-sm" "" "Deposit"
                ]
            ]
        ]
    ]

default :: JSX
default = Story.story "default" mkStat {}
