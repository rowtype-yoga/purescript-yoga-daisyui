module DaisyUI.Pagination.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Pagination as P
import Yoga.React (component)
import Yoga.React.DOM.HTML (button, div)
import YogaStories.Story (story) as S

mkPagination :: {} -> JSX
mkPagination = component "PaginationStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4" }
    [ P.join
        [ button { className: "btn " <> P.joinItem } "1"
        , button { className: "btn btn-active " <> P.joinItem } "2"
        , button { className: "btn " <> P.joinItem } "3"
        , button { className: "btn " <> P.joinItem } "4"
        ]
    , P.join
        [ button { className: "btn " <> P.joinItem } "«"
        , button { className: "btn " <> P.joinItem } "Page 22"
        , button { className: "btn " <> P.joinItem } "»"
        ]
    ]

default :: JSX
default = S.story "default" mkPagination {}
