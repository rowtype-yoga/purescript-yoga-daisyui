module DaisyUI.FileInput.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.FileInput as FI
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, input)
import YogaStories.Story (story) as S

mkFileInput :: {} -> JSX
mkFileInput = component "FileInputStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4 w-full max-w-xs" }
    [ input { type: "file", className: FI.fileInputCls FI.bordered "" }
    , input { type: "file", className: FI.fileInputCls FI.primary "" }
    , input { type: "file", className: FI.fileInputCls FI.ghost FI.sm }
    ]

default :: JSX
default = S.story "default" mkFileInput {}
