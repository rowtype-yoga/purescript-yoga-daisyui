module DaisyUI.List.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.List as L
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, p)
import YogaStories.Story (story) as S

mkList :: {} -> JSX
mkList = component "ListStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4 w-96" }
    [ L.list
        [ L.listRow
            [ div { className: "text-lg font-bold" } "Item One"
            , p { className: "text-sm opacity-60" } "Description for item one"
            ]
        , L.listRow
            [ div { className: "text-lg font-bold" } "Item Two"
            , p { className: "text-sm opacity-60" } "Description for item two"
            ]
        , L.listRow
            [ div { className: "text-lg font-bold" } "Item Three"
            , p { className: "text-sm opacity-60" } "Description for item three"
            ]
        ]
    ]

default :: JSX
default = S.story "default" mkList {}
