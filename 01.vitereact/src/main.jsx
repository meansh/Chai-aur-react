import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

function MyApp() {
    return (
        <div>
        <h1>hello</h1>
        </div>
    )
}

//Calling
const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)

const user = "chai aur react"
const reactElement = React.createElement(
    'a',
    {href: "https://www.google.com", target: '_blank'},
    'click me to visit google',
    user
)
ReactDOM.createRoot(document.getElementById('root')).render(

    reactElement
 
)
