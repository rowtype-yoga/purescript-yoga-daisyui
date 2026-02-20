module DaisyUI.Modal.Stories (default) where

import Prelude hiding (div)

import Data.Tuple.Nested ((/\))
import React.Basic (JSX)
import React.Basic.Events (handler_)
import React.Basic.Hooks as React
import DaisyUI.Modal as M
import Yoga.React (component)
import Yoga.React.DOM.HTML (button, dialog, div, h3, p)
import YogaStories.Story (story) as S

mkModal :: {} -> JSX
mkModal = component "ModalStory" \_ -> React.do
  isOpen /\ setIsOpen <- React.useState' false
  let modalCls = "modal" <> if isOpen then " modal-open" else ""
  pure $ div { className: "flex flex-col gap-4 items-center p-8" }
    [ button { className: "btn btn-primary", onClick: handler_ (setIsOpen true) } "Open Modal"
    , dialog { className: modalCls }
        [ M.modalBox
            [ h3 { className: "text-lg font-bold" } "Hello!"
            , p { className: "py-4" } "Press ESC key or click the button below to close"
            , M.modalAction
                [ button { className: "btn", onClick: handler_ (setIsOpen false) } "Close" ]
            ]
        ]
    ]

default :: JSX
default = S.story "default" mkModal {}
