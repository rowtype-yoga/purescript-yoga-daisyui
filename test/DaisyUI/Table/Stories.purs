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
                [ T.tableHead ""
                , T.tableHead "Name"
                , T.tableHead "Job"
                , T.tableHead "Favorite Color"
                ]
            ]
        , T.tableBody
            [ T.tableRow
                [ T.tableHead "1"
                , T.tableCell "Cy Ganderton"
                , T.tableCell "Quality Control Specialist"
                , T.tableCell "Blue"
                ]
            , T.tableRowHover
                [ T.tableHead "2"
                , T.tableCell "Hart Hagerty"
                , T.tableCell "Desktop Support Technician"
                , T.tableCell "Purple"
                ]
            , T.tableRow
                [ T.tableHead "3"
                , T.tableCell "Brice Swyre"
                , T.tableCell "Tax Accountant"
                , T.tableCell "Red"
                ]
            ]
        ]
    , T.daisyTable T.zebra
        [ T.tableHeader
            [ T.tableRow
                [ T.tableHead ""
                , T.tableHead "Name"
                , T.tableHead "Job"
                , T.tableHead "Favorite Color"
                ]
            ]
        , T.tableBody
            [ T.tableRow
                [ T.tableHead "1"
                , T.tableCell "Cy Ganderton"
                , T.tableCell "Quality Control Specialist"
                , T.tableCell "Blue"
                ]
            , T.tableRow
                [ T.tableHead "2"
                , T.tableCell "Hart Hagerty"
                , T.tableCell "Desktop Support Technician"
                , T.tableCell "Purple"
                ]
            , T.tableRow
                [ T.tableHead "3"
                , T.tableCell "Brice Swyre"
                , T.tableCell "Tax Accountant"
                , T.tableCell "Red"
                ]
            ]
        ]
    ]

default :: JSX
default = S.story "default" mkTable {}
