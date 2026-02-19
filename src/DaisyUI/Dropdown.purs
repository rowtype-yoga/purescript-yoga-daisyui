module DaisyUI.Dropdown where

import Prelude
import React.Basic (JSX)
import Yoga.React.DOM.HTML (div, ul)
import Yoga.React.DOM.Internal (class IsJSX)

dropdown :: String -> forall kids. IsJSX kids => kids -> JSX
dropdown position = div { className: "dropdown" <> " " <> position }

dropdownContent :: forall kids. IsJSX kids => kids -> JSX
dropdownContent = ul { className: "dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm", tabIndex: 0 }

-- Positions
top :: String
top = "dropdown-top"

bottom :: String
bottom = "dropdown-bottom"

left :: String
left = "dropdown-left"

right :: String
right = "dropdown-right"

end :: String
end = "dropdown-end"

-- Modifiers
hover :: String
hover = "dropdown-hover"

open :: String
open = "dropdown-open"
