import React, { StrictMode} from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Test from './test.jsx'
// import React from 'react'

function Test1()
{
    return(
        <h1>This is the test preview</h1>
    )
}
const name = " devansh"

const anothermethod = React.createElement(
  'a',//here we define the tag
  {href: 'https://www.google.com',target: "_blank"}, //these are attributes, if the tag has no attributes then leave the curly braces empty
  'click here to go to google',   // it is children(text inside the a element)
  name  // it is called evaluated expression, it is a variable
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
// Test1()
     anothermethod
  // </StrictMode>,
)
