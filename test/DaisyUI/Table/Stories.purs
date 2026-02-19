module DaisyUI.Table.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Table as T
import Yoga.React (component)
import Yoga.React.DOM.HTML (div)
import Yoga.React.DOM.Internal (text)
import YogaStories.Story (story) as S

mkTable :: {} -> JSX
mkTable = component "TableStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4" }
    [ T.daisyTable ""
        [ T.tableHeader
            [ T.tableRow
                [ T.tableHead (text "#")
                , T.tableHead (text "Name")
                , T.tableHead (text "Job")
                ]
            ]
        , T.tableBody
            [ T.tableRowHover
                [ T.tableCell (text "1")
                , T.tableCell (text "Alice")
                , T.tableCell (text "Engineer")
                ]
            , T.tableRowHover
                [ T.tableCell (text "2")
                , T.tableCell (text "Bob")
                , T.tableCell (text "Designer")
                ]
            , T.tableRowHover
                [ T.tableCell (text "3")
                , T.tableCell (text "Charlie")
                , T.tableCell (text "Manager")
                ]
            ]
        ]
    ]

default :: JSX
default = S.story "default" mkTable {}
