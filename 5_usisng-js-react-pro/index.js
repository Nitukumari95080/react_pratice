//create h1 element using js
//let h1 =document.createElement(`h1`)
//h1.innerHTML=`pratice react using cdn file`
//add root file h1
//document.querySelector(`#root`).appendChild(h1)

//using react  create using react
let h1 = React.createElement('h1', null, 'create h2 using react');
ReactDOM.createRoot(document.querySelector('#root')).render(h1);
