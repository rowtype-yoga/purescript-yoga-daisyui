module DaisyUI.MockupCode.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.MockupCode as MC
import Yoga.React (component)
import Yoga.React.DOM.HTML (div)
import Yoga.React.DOM.Internal (text)
import YogaStories.Story (story) as S

mkMockupCode :: {} -> JSX
mkMockupCode = component "MockupCodeStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4" }
    [ MC.mockupCode
        [ MC.codeLine "$" (text "npm i daisyui")
        , MC.codeLine ">" (text "installing...")
        , MC.codeLine ">" (text "Done!")
        ]
    ]

default :: JSX
default = S.story "default" mkMockupCode {}
