module DaisyUI.MockupBrowser.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.MockupBrowser as MB
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, input)
import YogaStories.Story (story) as S

mkMockupBrowser :: {} -> JSX
mkMockupBrowser = component "MockupBrowserStory" \_ -> React.do
  pure $ MB.mockupBrowser
    [ MB.mockupBrowserToolbar
        [ input { type: "text", className: "input", value: "https://daisyui.com", readonly: true } ]
    , div { className: "bg-base-200 flex justify-center px-4 py-16" }
        "Hello!"
    ]

default :: JSX
default = S.story "default" mkMockupBrowser {}
