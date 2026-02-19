module DaisyUI.MockupBrowser.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.MockupBrowser as MB
import Yoga.React (component)
import Yoga.React.DOM.HTML (div)
import YogaStories.Story (story) as S

mkMockupBrowser :: {} -> JSX
mkMockupBrowser = component "MockupBrowserStory" \_ -> React.do
  pure $ MB.mockupBrowser
    [ MB.mockupBrowserToolbar
        [ div { className: "input" } "https://daisyui.com" ]
    , div { className: "grid place-content-center border-t border-base-300 h-80" }
        "Hello!"
    ]

default :: JSX
default = S.story "default" mkMockupBrowser {}
