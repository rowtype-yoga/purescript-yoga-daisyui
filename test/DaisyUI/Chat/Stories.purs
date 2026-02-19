module DaisyUI.Chat.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Chat as Chat
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, img, span, time)
import YogaStories.Story (story) as S

mkChat :: {} -> JSX
mkChat = component "ChatStory" \_ -> React.do
  let avatarUrl = "https://img.daisyui.com/images/profile/demo/2@94.webp"
  pure $ div { className: "flex flex-col gap-0 w-full max-w-lg" }
    [ Chat.chatStart
        [ Chat.chatImage
            [ div { className: "w-10 rounded-full" }
                [ img { src: avatarUrl, alt: "Avatar" } ]
            ]
        , Chat.chatHeader
            [ span {} "Obi-Wan Kenobi "
            , time { className: "text-xs opacity-50" } "12:45"
            ]
        , Chat.chatBubble "" "You were the Chosen One!"
        , Chat.chatFooter "Delivered"
        ]
    , Chat.chatStart
        [ Chat.chatImage
            [ div { className: "w-10 rounded-full" }
                [ img { src: avatarUrl, alt: "Avatar" } ]
            ]
        , Chat.chatHeader "Obi-Wan Kenobi"
        , Chat.chatBubble "" "I loved you."
        , Chat.chatFooter "Seen at 12:46"
        ]
    , Chat.chatEnd
        [ Chat.chatImage
            [ div { className: "w-10 rounded-full" }
                [ img { src: avatarUrl, alt: "Avatar" } ]
            ]
        , Chat.chatHeader "Anakin"
        , Chat.chatBubble "" "I HATE YOU!"
        , Chat.chatFooter "Seen at 12:46"
        ]
    ]

default :: JSX
default = S.story "default" mkChat {}
