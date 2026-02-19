module DaisyUI.ThemeController.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.ThemeController as TC
import DaisyUI.FormControl as FC
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, input, label)
import YogaStories.Story (story) as S

mkThemeController :: {} -> JSX
mkThemeController = component "ThemeControllerStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-6" }
    [ input { type: "checkbox", value: "synthwave", className: "toggle " <> TC.themeControllerCls }
    , FC.fieldset
        [ FC.fieldsetLegend "Theme"
        , label { className: "flex gap-2 cursor-pointer items-center" }
            [ input { type: "radio", name: "theme-radios", className: "radio radio-sm " <> TC.themeControllerCls, value: "default" }
            , div {} "Default"
            ]
        , label { className: "flex gap-2 cursor-pointer items-center" }
            [ input { type: "radio", name: "theme-radios", className: "radio radio-sm " <> TC.themeControllerCls, value: "retro" }
            , div {} "Retro"
            ]
        , label { className: "flex gap-2 cursor-pointer items-center" }
            [ input { type: "radio", name: "theme-radios", className: "radio radio-sm " <> TC.themeControllerCls, value: "cyberpunk" }
            , div {} "Cyberpunk"
            ]
        , label { className: "flex gap-2 cursor-pointer items-center" }
            [ input { type: "radio", name: "theme-radios", className: "radio radio-sm " <> TC.themeControllerCls, value: "valentine" }
            , div {} "Valentine"
            ]
        , label { className: "flex gap-2 cursor-pointer items-center" }
            [ input { type: "radio", name: "theme-radios", className: "radio radio-sm " <> TC.themeControllerCls, value: "aqua" }
            , div {} "Aqua"
            ]
        ]
    ]

default :: JSX
default = S.story "default" mkThemeController {}
