module DaisyUI.Tabs.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Tabs as Tabs
import Yoga.React (component)
import Yoga.React.DOM.HTML (div)
import YogaStories.Story (story) as S

mkTabs :: {} -> JSX
mkTabs = component "TabsStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-6" }
    [ Tabs.tabs Tabs.bordered
        [ Tabs.tab "Tab 1"
        , Tabs.tabActive "Tab 2"
        , Tabs.tab "Tab 3"
        ]
    , Tabs.tabs Tabs.lifted
        [ Tabs.tab "Tab 1"
        , Tabs.tabActive "Tab 2"
        , Tabs.tab "Tab 3"
        ]
    , Tabs.tabs Tabs.boxed
        [ Tabs.tab "Tab 1"
        , Tabs.tabActive "Tab 2"
        , Tabs.tab "Tab 3"
        ]
    , div { className: "flex gap-2 items-center" }
        [ Tabs.tabs (Tabs.bordered <> " " <> Tabs.xs)
            [ Tabs.tab "Tiny"
            , Tabs.tabActive "Tiny"
            , Tabs.tab "Tiny"
            ]
        , Tabs.tabs (Tabs.bordered <> " " <> Tabs.lg)
            [ Tabs.tab "Large"
            , Tabs.tabActive "Large"
            , Tabs.tab "Large"
            ]
        ]
    ]

default :: JSX
default = S.story "default" mkTabs {}
