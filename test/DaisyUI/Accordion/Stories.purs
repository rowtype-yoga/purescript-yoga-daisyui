module DaisyUI.Accordion.Stories (default) where

import Prelude hiding (div)

import Data.Generic.Rep (class Generic)
import React.Basic (JSX)
import DaisyUI.Accordion as Acc
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, p)
import Yoga.React.DOM.Internal (text)
import YogaStories.Controls (enum)
import YogaStories.Story (story) as S

data Variant = Arrow | Plus

derive instance Generic Variant _

variantClass :: Variant -> String
variantClass = case _ of
  Arrow -> Acc.arrow
  Plus -> Acc.plus

mkAccordion :: { variant :: Variant } -> JSX
mkAccordion = component "AccordionStory" \props -> React.do
  pure $ div { className: "flex flex-col gap-2 w-96" }
    [ Acc.collapse (variantClass props.variant)
        [ Acc.collapseTitle (text "Click to open")
        , Acc.collapseContent
            [ p {} (text "This is the content of the accordion.") ]
        ]
    , Acc.collapse (variantClass props.variant)
        [ Acc.collapseTitle (text "Another item")
        , Acc.collapseContent
            [ p {} (text "More hidden content here.") ]
        ]
    ]

default :: JSX
default = S.story "default" mkAccordion
  { variant: enum Arrow }
