module DaisyUI.Table where

import Prelude
import React.Basic (JSX)
import Yoga.React.DOM.HTML (div, table, thead, tbody, tfoot, tr, th, td)
import Yoga.React.DOM.Internal (class IsJSX)

daisyTable :: String -> forall kids. IsJSX kids => kids -> JSX
daisyTable size kids = div { className: "overflow-x-auto" }
  [ table { className: "table" <> " " <> size } kids ]

tableHeader :: forall kids. IsJSX kids => kids -> JSX
tableHeader = thead {}

tableBody :: forall kids. IsJSX kids => kids -> JSX
tableBody = tbody {}

tableFooter :: forall kids. IsJSX kids => kids -> JSX
tableFooter = tfoot {}

tableRow :: forall kids. IsJSX kids => kids -> JSX
tableRow = tr {}

tableRowHover :: forall kids. IsJSX kids => kids -> JSX
tableRowHover = tr { className: "hover" }

tableRowActive :: forall kids. IsJSX kids => kids -> JSX
tableRowActive = tr { className: "active" }

tableHead :: forall kids. IsJSX kids => kids -> JSX
tableHead = th {}

tableCell :: forall kids. IsJSX kids => kids -> JSX
tableCell = td {}

-- Modifiers
zebra :: String
zebra = "table-zebra"

pinRows :: String
pinRows = "table-pin-rows"

pinCols :: String
pinCols = "table-pin-cols"

-- Sizes
xs :: String
xs = "table-xs"

sm :: String
sm = "table-sm"

md :: String
md = "table-md"

lg :: String
lg = "table-lg"
