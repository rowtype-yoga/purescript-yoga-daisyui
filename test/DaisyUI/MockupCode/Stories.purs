module DaisyUI.MockupCode.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.MockupCode as MC
import Yoga.React (component)
import Yoga.React.DOM.HTML (code, div, pre)
import YogaStories.Story (story) as S

mkMockupCode :: {} -> JSX
mkMockupCode = component "MockupCodeStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4" }
    [ MC.mockupCode
        [ MC.codeLine "$" "npm i daisyui" ]
    , MC.mockupCode
        [ pre {} [ code {} "npm i daisyui" ]
        , pre {} [ code {} "installing..." ]
        , pre {} [ code {} "Done!" ]
        ]
    , MC.mockupCode
        [ MC.codeLine "~" "Downloading..."
        , MC.codeLine "" (div { className: "text-warning" } "Error!")
        ]
    ]

default :: JSX
default = S.story "default" mkMockupCode {}
