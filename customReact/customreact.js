/*
function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  container.appendChild(domElement);
}

const reactElement = {
  type: "h1",
  children: "Hello Custom React "
};

const root = document.getElementById("root");
customRender(reactElement, root);
*/

function customRender(reactElement, container){
    /*
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.SetAttribute('href', reactElement.props
        .href)
        domElement.SetAttribute('target', reactElement.props.target)
        container.AppendChild(domElement)
        */
      const domElement= document.createElement(reactElement.type)
      domElement.innerHTML = reactElement.children
      for (const prop in reactElement.props) {
       if(prop === 'children') continue;
       domElement.setAttribute(prop,reactElement.props[prop])
        
        
      }
      container.appendChild(domElement)
    }
const reactElement ={
    type:'a',
    props: {
        href:'https://google.com',
        target: '_blank'
    },
    children:'Click me to visit to the site'
}



const mainContainer =document.querySelector('#root')
customRender(reactElement,mainContainer)
