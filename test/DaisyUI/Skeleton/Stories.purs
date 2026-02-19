module DaisyUI.Skeleton.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Skeleton as Sk
import Yoga.React (component)
import Yoga.React.DOM.HTML (div)
import YogaStories.Story (story) as S

mkSkeleton :: {} -> JSX
mkSkeleton = component "SkeletonStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4 w-64" }
    [ div { className: "flex gap-4 items-center" }
        [ Sk.skeleton "h-16 w-16 shrink-0 rounded-full"
        , div { className: "flex flex-col gap-2 w-full" }
            [ Sk.skeleton "h-4 w-28"
            , Sk.skeleton "h-4 w-full"
            ]
        ]
    , Sk.skeleton "h-32 w-full"
    ]

default :: JSX
default = S.story "default" mkSkeleton {}
