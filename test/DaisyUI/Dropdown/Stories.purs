module DaisyUI.Dropdown.Stories (default) where

import Prelude hiding (div)

import Data.Generic.Rep (class Generic)
import React.Basic (JSX)
import DaisyUI.Dropdown as DD
import DaisyUI.Button as Btn
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, li, a)
import YogaStories.Controls (enum)
import YogaStories.Story (story) as S

data Position = Bottom | Top | Left | Right | End

derive instance Generic Position _

positionClass :: Position -> String
positionClass = case _ of
  Bottom -> DD.bottom
  Top -> DD.top
  Left -> DD.left
  Right -> DD.right
  End -> DD.end

mkDropdown :: { position :: Position } -> JSX
mkDropdown = component "DropdownStory" \props -> React.do
  pure $ div { className: "flex items-center justify-center p-32" }
    [ DD.dropdown (positionClass props.position)
        [ Btn.btn Btn.primary Btn.md "Click me"
        , DD.dropdownContent
            [ li {} [ a {} "Item 1" ]
            , li {} [ a {} "Item 2" ]
            , li {} [ a {} "Item 3" ]
            ]
        ]
    ]

default :: JSX
default = S.story "default" mkDropdown
  { position: enum Bottom }
