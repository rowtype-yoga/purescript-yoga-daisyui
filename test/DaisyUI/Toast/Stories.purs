module DaisyUI.Toast.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Toast as T
import DaisyUI.Alert as A
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, span)
import YogaStories.Story (story) as S

mkToast :: {} -> JSX
mkToast = component "ToastStory" \_ -> React.do
  pure $ div { className: "relative h-64" }
    [ T.toast T.toastEnd
        [ A.alert A.info [ span {} "New mail arrived." ]
        , A.alert A.success [ span {} "Message sent successfully." ]
        ]
    ]

default :: JSX
default = S.story "default" mkToast {}
