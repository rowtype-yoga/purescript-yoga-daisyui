module DaisyUI.Avatar where

import React.Basic (JSX)
import Yoga.React.DOM.HTML (div)
import Yoga.React.DOM.Internal (class IsJSX)

avatar :: forall kids. IsJSX kids => kids -> JSX
avatar = div { className: "avatar" }

avatarOnline :: forall kids. IsJSX kids => kids -> JSX
avatarOnline = div { className: "avatar online" }

avatarOffline :: forall kids. IsJSX kids => kids -> JSX
avatarOffline = div { className: "avatar offline" }

avatarPlaceholder :: forall kids. IsJSX kids => kids -> JSX
avatarPlaceholder = div { className: "avatar placeholder" }

avatarGroup :: forall kids. IsJSX kids => kids -> JSX
avatarGroup = div { className: "avatar-group -space-x-6" }
