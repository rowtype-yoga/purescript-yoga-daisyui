module DaisyUI.Dock.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Dock as D
import Yoga.React (component)
import Yoga.React.DOM.HTML (div)
import YogaStories.Story (story) as S

mkDock :: {} -> JSX
mkDock = component "DockStory" \_ -> React.do
  pure $ div { className: "relative h-48" }
    [ D.dock ""
        [ D.dockItem
            [ D.dockLabel "Home" ]
        , D.dockItemActive
            [ D.dockLabel "Inbox" ]
        , D.dockItem
            [ D.dockLabel "Settings" ]
        ]
    ]

default :: JSX
default = S.story "default" mkDock {}
