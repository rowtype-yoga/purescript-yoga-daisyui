module DaisyUI.Accordion.Stories (default) where

import Prelude hiding (div)

import React.Basic (JSX)
import DaisyUI.Accordion as Acc
import Yoga.React (component)
import Yoga.React.DOM.HTML (div, input)
import YogaStories.Story (story) as S

mkAccordion :: {} -> JSX
mkAccordion = component "AccordionStory" \_ -> React.do
  pure $ div { className: "flex flex-col gap-0 w-full max-w-lg" }
    [ Acc.collapse (Acc.arrow <> " bg-base-100 border border-base-300")
        [ input { type: "radio", name: "my-accordion-1", checked: true }
        , Acc.collapseTitle "How do I create an account?"
        , Acc.collapseContent
            "Click the Sign Up button in the top right corner and follow the registration process."
        ]
    , Acc.collapse (Acc.arrow <> " bg-base-100 border border-base-300")
        [ input { type: "radio", name: "my-accordion-1" }
        , Acc.collapseTitle "I forgot my password. What should I do?"
        , Acc.collapseContent
            "Click on Forgot Password on the login page and follow the instructions sent to your email."
        ]
    , Acc.collapse (Acc.arrow <> " bg-base-100 border border-base-300")
        [ input { type: "radio", name: "my-accordion-1" }
        , Acc.collapseTitle "How can I contact support?"
        , Acc.collapseContent
            "You can reach our support team through the Contact Us page or by emailing support@example.com."
        ]
    ]

default :: JSX
default = S.story "default" mkAccordion {}
