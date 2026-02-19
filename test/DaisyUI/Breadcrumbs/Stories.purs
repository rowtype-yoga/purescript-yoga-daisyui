module DaisyUI.Breadcrumbs.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Breadcrumbs as BC
import Yoga.React (component)
import Yoga.React.DOM.HTML (a, div)
import YogaStories.Story (story) as S

mkBreadcrumbs :: {} -> JSX
mkBreadcrumbs = component "BreadcrumbsStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4" }
    [ BC.breadcrumbs
        [ BC.breadcrumbItem [ a {} "Home" ]
        , BC.breadcrumbItem [ a {} "Documents" ]
        , BC.breadcrumbItem "Current Page"
        ]
    ]

default :: JSX
default = S.story "default" mkBreadcrumbs {}
