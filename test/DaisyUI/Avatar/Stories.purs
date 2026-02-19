module DaisyUI.Avatar.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Avatar as Av
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, img, span)
import YogaStories.Story (story) as S

mkAvatar :: {} -> JSX
mkAvatar = component "AvatarStory" \_ -> React.do
  let imgUrl = "https://img.daisyui.com/images/profile/demo/2@94.webp"
  pure $ div { className: "flex flex-col gap-8" }
    [ div { className: "flex gap-4 items-end" }
        [ Av.avatar
            [ div { className: "w-24 rounded" }
                [ img { src: imgUrl, alt: "Avatar" } ]
            ]
        , Av.avatar
            [ div { className: "w-16 rounded" }
                [ img { src: imgUrl, alt: "Avatar" } ]
            ]
        , Av.avatar
            [ div { className: "w-12 rounded" }
                [ img { src: imgUrl, alt: "Avatar" } ]
            ]
        ]
    , div { className: "flex gap-4 items-end" }
        [ Av.avatar
            [ div { className: "w-24 rounded-full" }
                [ img { src: imgUrl, alt: "Avatar" } ]
            ]
        , Av.avatar
            [ div { className: "ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2" }
                [ img { src: imgUrl, alt: "Avatar" } ]
            ]
        ]
    , div { className: "flex gap-4 items-center" }
        [ Av.avatarOnline
            [ div { className: "w-12 rounded-full" }
                [ img { src: imgUrl, alt: "Avatar" } ]
            ]
        , Av.avatarOffline
            [ div { className: "w-12 rounded-full" }
                [ img { src: imgUrl, alt: "Avatar" } ]
            ]
        ]
    , div { className: "flex gap-4 items-center" }
        [ Av.avatarPlaceholder
            [ div { className: "bg-neutral text-neutral-content w-24 rounded-full" }
                [ span { className: "text-3xl" } "D" ]
            ]
        , Av.avatarPlaceholder
            [ div { className: "bg-neutral text-neutral-content w-12 rounded-full" }
                [ span {} "D" ]
            ]
        ]
    ]

default :: JSX
default = S.story "default" mkAvatar {}
