module DaisyUI.Loading.Stories (default) where

import Prelude hiding (div)

import Data.Generic.Rep (class Generic)
import React.Basic (JSX)
import DaisyUI.Loading as Loading
import Yoga.React (component)
import Yoga.React.DOM.HTML (div)
import YogaStories.Controls (enum)
import YogaStories.Story (story) as S

data Variant = Spinner | Dots | Ring | Ball | Bars | Infinity

derive instance Generic Variant _

data Size = ExtraSmall | Small | Medium | Large

derive instance Generic Size _

variantClass :: Variant -> String
variantClass = case _ of
  Spinner -> Loading.spinner
  Dots -> Loading.dots
  Ring -> Loading.ring
  Ball -> Loading.ball
  Bars -> Loading.bars
  Infinity -> Loading.infinity

sizeClass :: Size -> String
sizeClass = case _ of
  ExtraSmall -> Loading.xs
  Small -> Loading.sm
  Medium -> Loading.md
  Large -> Loading.lg

mkLoading :: { variant :: Variant, size :: Size } -> JSX
mkLoading = component "LoadingStory" \props -> React.do
  pure $ div { className: "flex flex-col gap-4" }
    [ Loading.loading (variantClass props.variant) (sizeClass props.size)
    ]

default :: JSX
default = S.story "default" mkLoading
  { variant: enum Spinner
  , size: enum Large
  }
