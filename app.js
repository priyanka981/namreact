import React from "react";
import ReactDom from "react-dom";

const Title =() => (<h1>Welcome to learn React</h1>);


const Jsxheading = () => (
    <div id="container">
    <Title />
    <h1>hello world!!!React sk </h1>
    </div>);

const root= ReactDom.createRoot(document.getElementById("root"));
root.render(<Jsxheading/>);            
        
