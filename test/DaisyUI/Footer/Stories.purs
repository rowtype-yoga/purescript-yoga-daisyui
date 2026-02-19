module DaisyUI.Footer.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Footer as F
import Yoga.React (component)
import Yoga.React.DOM.HTML (a, div)
import YogaStories.Story (story) as S

mkFooter :: {} -> JSX
mkFooter = component "FooterStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4" }
    [ F.footer
        [ F.footerNav
            [ F.footerTitle "Services"
            , a { className: "link link-hover" } "Branding"
            , a { className: "link link-hover" } "Design"
            ]
        , F.footerNav
            [ F.footerTitle "Company"
            , a { className: "link link-hover" } "About us"
            , a { className: "link link-hover" } "Contact"
            ]
        , F.footerNav
            [ F.footerTitle "Legal"
            , a { className: "link link-hover" } "Terms"
            , a { className: "link link-hover" } "Privacy"
            ]
        ]
    ]

default :: JSX
default = S.story "default" mkFooter {}
