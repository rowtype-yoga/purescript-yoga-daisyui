module DaisyUI.Chat.Stories (default) where

import Prelude hiding (div)

import Data.Generic.Rep (class Generic)
import React.Basic (JSX)
import DaisyUI.Chat as Chat
import Yoga.React (component)
import Yoga.React.DOM.HTML (div)
import Yoga.React.DOM.Internal (text)
import YogaStories.Controls (enum)
import YogaStories.Story (story) as S

data BubbleColor = None | Primary | Secondary | Accent | Info | Success | Warning | Error

derive instance Generic BubbleColor _

colorClass :: BubbleColor -> String
colorClass = case _ of
  None -> ""
  Primary -> Chat.primary
  Secondary -> Chat.secondary
  Accent -> Chat.accent
  Info -> Chat.info
  Success -> Chat.success
  Warning -> Chat.warning
  Error -> Chat.error

mkChat :: { color :: BubbleColor } -> JSX
mkChat = component "ChatStory" \props -> React.do
  pure $ div { className: "flex flex-col gap-4" }
    [ Chat.chatStart
        [ Chat.chatHeader (text "Alice")
        , Chat.chatBubble (colorClass props.color) (text "Hey, what's up?")
        , Chat.chatFooter (text "Seen at 12:46")
        ]
    , Chat.chatEnd
        [ Chat.chatHeader (text "Bob")
        , Chat.chatBubble (colorClass props.color) (text "Not much, you?")
        , Chat.chatFooter (text "Delivered")
        ]
    ]

default :: JSX
default = S.story "default" mkChat
  { color: enum Primary }
