module DaisyUI.Radio.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Radio as Rad
import DaisyUI.FormControl as FC
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, input)
import YogaStories.Story (story) as S

mkRadio :: {} -> JSX
mkRadio = component "RadioStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4" }
    [ FC.fieldset
        [ FC.fieldsetLegend "Pick a framework"
        , div { className: "flex flex-col gap-2" }
            [ input { type: "radio", name: "radio-1", className: Rad.radioCls Rad.primary "", "aria-label": "Svelte", checked: true }
            , input { type: "radio", name: "radio-1", className: Rad.radioCls Rad.primary "", "aria-label": "Vue" }
            , input { type: "radio", name: "radio-1", className: Rad.radioCls Rad.primary "", "aria-label": "React" }
            ]
        ]
    , div { className: "flex gap-2" }
        [ input { type: "radio", name: "radio-colors", className: Rad.radioCls Rad.primary "" }
        , input { type: "radio", name: "radio-colors", className: Rad.radioCls Rad.secondary "", checked: true }
        , input { type: "radio", name: "radio-colors", className: Rad.radioCls Rad.accent "" }
        , input { type: "radio", name: "radio-colors", className: Rad.radioCls Rad.success "" }
        , input { type: "radio", name: "radio-colors", className: Rad.radioCls Rad.warning "" }
        , input { type: "radio", name: "radio-colors", className: Rad.radioCls Rad.info "" }
        , input { type: "radio", name: "radio-colors", className: Rad.radioCls Rad.error "" }
        ]
    ]

default :: JSX
default = S.story "default" mkRadio {}
