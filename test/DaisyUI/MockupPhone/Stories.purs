module DaisyUI.MockupPhone.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.MockupPhone as MP
import Yoga.React (component)
import Yoga.React.DOM.HTML (div)
import YogaStories.Story (story) as S

mkMockupPhone :: {} -> JSX
mkMockupPhone = component "MockupPhoneStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4" }
    [ MP.mockupPhone
        [ div { className: "flex items-center justify-center h-full bg-base-200" } "Phone content" ]
    ]

default :: JSX
default = S.story "default" mkMockupPhone {}
