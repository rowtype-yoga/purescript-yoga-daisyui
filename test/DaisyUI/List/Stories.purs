module DaisyUI.List.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.List as L
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, img, p)
import YogaStories.Story (story) as S

mkList :: {} -> JSX
mkList = component "ListStory" \_ -> React.do
  pure $ div { className: "w-full max-w-md" }
    [ L.list
        [ L.listRow
            [ div { className: "text-4xl font-thin opacity-30 tabular-nums" } "01"
            , div {}
                [ img { className: "size-10 rounded-box", src: "https://img.daisyui.com/images/profile/demo/1@94.webp", alt: "Song" } ]
            , L.listColGrow
                [ div {} "Dio"
                , div { className: "text-xs uppercase font-semibold opacity-60" } "Ronnie James Dio"
                ]
            , p { className: "font-mono opacity-60" } "3:46"
            ]
        , L.listRow
            [ div { className: "text-4xl font-thin opacity-30 tabular-nums" } "02"
            , div {}
                [ img { className: "size-10 rounded-box", src: "https://img.daisyui.com/images/profile/demo/2@94.webp", alt: "Song" } ]
            , L.listColGrow
                [ div {} "Move to the city"
                , div { className: "text-xs uppercase font-semibold opacity-60" } "Slightly Stoopid"
                ]
            , p { className: "font-mono opacity-60" } "4:02"
            ]
        , L.listRow
            [ div { className: "text-4xl font-thin opacity-30 tabular-nums" } "03"
            , div {}
                [ img { className: "size-10 rounded-box", src: "https://img.daisyui.com/images/profile/demo/3@94.webp", alt: "Song" } ]
            , L.listColGrow
                [ div {} "Galvanize"
                , div { className: "text-xs uppercase font-semibold opacity-60" } "Chemical Brothers"
                ]
            , p { className: "font-mono opacity-60" } "4:38"
            ]
        ]
    ]

default :: JSX
default = S.story "default" mkList {}
