module DaisyUI.Tabs.Stories (default) where

import Prelude hiding (div)

import Data.Generic.Rep (class Generic)
import React.Basic (JSX)
import DaisyUI.Tabs as Tabs
import Yoga.React (component)
import Yoga.React.DOM.HTML (div)
import Yoga.React.DOM.Internal (text)
import YogaStories.Controls (enum)
import YogaStories.Story (story) as S

data Variant = Boxed | Bordered | Lifted

derive instance Generic Variant _

variantClass :: Variant -> String
variantClass = case _ of
  Boxed -> Tabs.boxed
  Bordered -> Tabs.bordered
  Lifted -> Tabs.lifted

mkTabs :: { variant :: Variant } -> JSX
mkTabs = component "TabsStory" \props -> React.do
  pure $ div { className: "flex flex-col gap-4" }
    [ Tabs.tabs (variantClass props.variant)
        [ Tabs.tab (text "Tab 1")
        , Tabs.tabActive (text "Tab 2")
        , Tabs.tab (text "Tab 3")
        ]
    ]

default :: JSX
default = S.story "default" mkTabs
  { variant: enum Bordered }
