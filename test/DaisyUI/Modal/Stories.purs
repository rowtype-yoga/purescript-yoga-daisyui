module DaisyUI.Modal.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Modal as M
import DaisyUI.Button as Btn
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, form, h3, p)
import YogaStories.Story (story) as S

mkModal :: {} -> JSX
mkModal = component "ModalStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4" }
    [ M.modalBox
        [ h3 { className: "text-lg font-bold" } "Hello!"
        , p { className: "py-4" } "Press ESC key or click the button below to close"
        , M.modalAction
            [ form { method: "dialog" }
                [ Btn.btn "" "" "Close" ]
            ]
        ]
    ]

default :: JSX
default = S.story "default" mkModal {}
