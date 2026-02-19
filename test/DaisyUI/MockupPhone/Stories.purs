module DaisyUI.MockupPhone.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.MockupPhone as MP
import Yoga.React (component)
import Yoga.React.DOM.HTML (div)
import YogaStories.Story (story) as S

mkMockupPhone :: {} -> JSX
mkMockupPhone = component "MockupPhoneStory" \_ -> React.do
  pure $ MP.mockupPhone
    [ div { className: "flex items-center justify-center bg-base-200 text-center p-8" }
        "Hi."
    ]

default :: JSX
default = S.story "default" mkMockupPhone {}
