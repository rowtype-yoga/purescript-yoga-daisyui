module DaisyUI.Dock.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Dock as D
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, span)
import YogaStories.Story (story) as S

mkDock :: {} -> JSX
mkDock = component "DockStory" \_ -> React.do
  pure $ div { className: "relative h-48 w-full [&_.dock]:static [&_.dock]:w-full" }
    [ D.dock ""
        [ D.dockItem [ span {} "🏠", D.dockLabel "Home" ]
        , D.dockItemActive [ span {} "📥", D.dockLabel "Inbox" ]
        , D.dockItem [ span {} "⚙️", D.dockLabel "Settings" ]
        ]
    ]

default :: JSX
default = S.story "default" mkDock {}
