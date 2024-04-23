function customRender(reactElement, container){
    const DomElement = document.createElement(reactElement.type)
    DomElement.innerHTML = reactElement.children
    // DomElement.setAttribute('href', reactElement.props.href)
    // DomElement.setAttribute('target', reactElement.props.target)
    for (const prop in reactElement.props) {
        if(prop !== 'children'){
            DomElement.setAttribute(prop, reactElement.props[prop])
        }
    }
    container.appendChild(DomElement);
}
const reactElement = {
    type:'a',
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:"click me to visit Google"
}

const mainContainer = document.querySelector("#root")

customRender(reactElement, mainContainer)