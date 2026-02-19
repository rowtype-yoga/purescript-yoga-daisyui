module DaisyUI.Alert.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Alert as Alert
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, span)
import YogaStories.Story (story) as S

mkAlert :: {} -> JSX
mkAlert = component "AlertStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4 w-full max-w-lg" }
    [ Alert.alert (Alert.info <> " " <> Alert.soft)
        [ span {} "12 unread messages. Tap to see." ]
    , Alert.alert (Alert.success <> " " <> Alert.soft)
        [ span {} "Your purchase has been confirmed!" ]
    , Alert.alert (Alert.warning <> " " <> Alert.soft)
        [ span {} "Warning: Invalid email address!" ]
    , Alert.alert (Alert.error <> " " <> Alert.soft)
        [ span {} "Error! Task failed successfully." ]
    ]

default :: JSX
default = S.story "default" mkAlert {}
