module DaisyUI.Avatar.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Avatar as Av
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, img)
import Yoga.React.DOM.Internal (text)
import YogaStories.Story (story) as S

mkAvatar :: {} -> JSX
mkAvatar = component "AvatarStory" \_ -> React.do
  pure $ div { className: "flex gap-4 items-center" }
    [ Av.avatarOnline
        [ div { className: "w-12 rounded-full" }
            [ img { src: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp", alt: "Avatar" } ]
        ]
    , Av.avatarOffline
        [ div { className: "w-12 rounded-full" }
            [ img { src: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp", alt: "Avatar" } ]
        ]
    , Av.avatarPlaceholder
        [ div { className: "bg-neutral text-neutral-content w-12 rounded-full" }
            [ div {} (text "AB") ]
        ]
    ]

default :: JSX
default = S.story "default" mkAvatar {}
