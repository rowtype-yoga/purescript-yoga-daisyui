module DaisyUI.Chat where

import Prelude
import React.Basic (JSX)
import Yoga.React.DOM.HTML (div)
import Yoga.React.DOM.Internal (class IsJSX)

chatStart :: forall kids. IsJSX kids => kids -> JSX
chatStart = div { className: "chat chat-start" }

chatEnd :: forall kids. IsJSX kids => kids -> JSX
chatEnd = div { className: "chat chat-end" }

chatImage :: forall kids. IsJSX kids => kids -> JSX
chatImage = div { className: "chat-image avatar" }

chatHeader :: forall kids. IsJSX kids => kids -> JSX
chatHeader = div { className: "chat-header" }

chatBubble :: String -> forall kids. IsJSX kids => kids -> JSX
chatBubble color = div { className: "chat-bubble" <> " " <> color }

chatFooter :: forall kids. IsJSX kids => kids -> JSX
chatFooter = div { className: "chat-footer opacity-50" }

-- Colors
primary :: String
primary = "chat-bubble-primary"

secondary :: String
secondary = "chat-bubble-secondary"

accent :: String
accent = "chat-bubble-accent"

info :: String
info = "chat-bubble-info"

success :: String
success = "chat-bubble-success"

warning :: String
warning = "chat-bubble-warning"

error :: String
error = "chat-bubble-error"
