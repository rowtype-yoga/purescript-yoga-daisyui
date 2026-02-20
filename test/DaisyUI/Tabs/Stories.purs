module DaisyUI.Tabs.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Tabs as Tabs
import Yoga.React (component)
import YogaStories.Controls (select)
import YogaStories.Story (story) as S

mkTabs :: { variant :: String } -> JSX
mkTabs = component "TabsStory" \props -> React.do
  let variantCls = case props.variant of
        "bordered" -> Tabs.bordered
        "lifted" -> Tabs.lifted
        "boxed" -> Tabs.boxed
        _ -> ""
  pure $ Tabs.tabs variantCls
    [ Tabs.tab "Tab 1"
    , Tabs.tabActive "Tab 2"
    , Tabs.tab "Tab 3"
    ]

default :: JSX
default = S.story "default" mkTabs
  { variant: select "bordered" [ "bordered", "lifted", "boxed" ] }
