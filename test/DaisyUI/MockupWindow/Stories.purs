module DaisyUI.MockupWindow.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.MockupWindow as MW
import Yoga.React (component)
import Yoga.React.DOM.HTML (div)
import YogaStories.Story (story) as S

mkMockupWindow :: {} -> JSX
mkMockupWindow = component "MockupWindowStory" \_ -> React.do
  pure $ MW.mockupWindow
    [ div { className: "bg-base-200 flex justify-center px-4 py-16" }
        "Hello!"
    ]

default :: JSX
default = S.story "default" mkMockupWindow {}
