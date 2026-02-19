module DaisyUI.Progress.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Progress as P
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, progress)
import YogaStories.Story (story) as S

mkProgress :: {} -> JSX
mkProgress = component "ProgressStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-4 w-56" }
    [ progress { className: P.progressCls "", value: "0", max: "100" } ""
    , progress { className: P.progressCls "", value: "10", max: "100" } ""
    , progress { className: P.progressCls "", value: "40", max: "100" } ""
    , progress { className: P.progressCls "", value: "70", max: "100" } ""
    , progress { className: P.progressCls "", value: "100", max: "100" } ""
    , progress { className: P.progressCls P.primary, value: "56", max: "100" } ""
    , progress { className: P.progressCls P.secondary, value: "56", max: "100" } ""
    , progress { className: P.progressCls P.accent, value: "56", max: "100" } ""
    , progress { className: P.progressCls P.info, value: "56", max: "100" } ""
    , progress { className: P.progressCls P.success, value: "56", max: "100" } ""
    , progress { className: P.progressCls P.warning, value: "56", max: "100" } ""
    , progress { className: P.progressCls P.error, value: "56", max: "100" } ""
    ]

default :: JSX
default = S.story "default" mkProgress {}
