
function createelement(reactel,container){
    const element = document.createElement(reactel.type)
    element.innerHTML = reactel.children
    element.setAttribute("href",reactel.attributes.href)
    element.setAttribute('target',reactel.attributes.target)

    container.appendChild(element)
}


const reactelement = {
    type:"a",
    attributes:{
        href:"https://www.example.com",
        target : "_blank"
    },
    children:"This is custom react"
}

const maincontainer = document.querySelector("#root")
createelement(reactelement,maincontainer)