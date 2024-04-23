import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
function MyApp(){
    return(
        <h1>Custom App</h1>
    )
}
// const ReactElement = {
//     type:'a',
//     props:{
//         href:"https://google.com",
//         target:"_blank"
//     },
//     children:"click me to visit Google"
// }

const AnotherElement = (
    <a href="http://google.com" target="_blank">Custom App</a>
)

const anotherUser = 'chai aur react'
const ReactElement = React.createElement(
    "a", 
    {href:"https://google.com", target:"_blank"},
    'click me to visit Google',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).
render(
    ReactElement
)
