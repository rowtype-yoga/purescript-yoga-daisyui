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
    [ div { className: "grid place-content-center bg-neutral-900 text-white h-80" }
        "Hi."
    ]

default :: JSX
default = S.story "default" mkMockupPhone {}
