module DaisyUI.ThemeController.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.ThemeController as TC
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, input, label, span)
import YogaStories.Story (story) as S

mkThemeController :: {} -> JSX
mkThemeController = component "ThemeControllerStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4" }
    [ div {} "The theme-controller class goes on checkbox/radio inputs with a value= of the theme name."
    , div { className: "flex flex-col gap-2" }
        [ label { className: "flex gap-2 cursor-pointer items-center" }
            [ input { type: "radio", name: "theme-radios", className: "radio radio-sm " <> TC.themeControllerCls, value: "default" }
            , span {} "Default"
            ]
        , label { className: "flex gap-2 cursor-pointer items-center" }
            [ input { type: "radio", name: "theme-radios", className: "radio radio-sm " <> TC.themeControllerCls, value: "retro" }
            , span {} "Retro"
            ]
        , label { className: "flex gap-2 cursor-pointer items-center" }
            [ input { type: "radio", name: "theme-radios", className: "radio radio-sm " <> TC.themeControllerCls, value: "cyberpunk" }
            , span {} "Cyberpunk"
            ]
        ]
    ]

default :: JSX
default = S.story "default" mkThemeController {}
