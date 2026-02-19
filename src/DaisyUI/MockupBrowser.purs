module DaisyUI.MockupBrowser where

import React.Basic (JSX)
import Yoga.React.DOM.HTML (div)
import Yoga.React.DOM.Internal (class IsJSX)

mockupBrowser :: forall kids. IsJSX kids => kids -> JSX
mockupBrowser = div { className: "mockup-browser border-base-300 border" }

mockupBrowserToolbar :: forall kids. IsJSX kids => kids -> JSX
mockupBrowserToolbar = div { className: "mockup-browser-toolbar" }
