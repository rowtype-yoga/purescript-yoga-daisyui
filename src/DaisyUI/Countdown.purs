module DaisyUI.Countdown where

import React.Basic (JSX)
import Yoga.React.DOM.HTML (span)
import Yoga.React.DOM.Internal (css)

countdown :: Int -> JSX
countdown value = span { className: "countdown" }
  [ span { style: css { "--value": value } } ([] :: Array JSX) ]
