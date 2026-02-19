module DaisyUI.Table.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Table as T
import Yoga.React (component)
import Yoga.React.DOM.HTML (div)
import YogaStories.Story (story) as S

mkTable :: {} -> JSX
mkTable = component "TableStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4" }
    [ T.daisyTable ""
        [ T.tableHeader
            [ T.tableRow
                [ T.tableHead "#"
                , T.tableHead "Name"
                , T.tableHead "Job"
                ]
            ]
        , T.tableBody
            [ T.tableRowHover
                [ T.tableCell "1"
                , T.tableCell "Alice"
                , T.tableCell "Engineer"
                ]
            , T.tableRowHover
                [ T.tableCell "2"
                , T.tableCell "Bob"
                , T.tableCell "Designer"
                ]
            , T.tableRowHover
                [ T.tableCell "3"
                , T.tableCell "Charlie"
                , T.tableCell "Manager"
                ]
            ]
        ]
    ]

default :: JSX
default = S.story "default" mkTable {}
