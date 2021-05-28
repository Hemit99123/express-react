import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Reasons extends Component {

  render() { 
    return ( 
      <div>
        <h2>Reasons why I like to use react</h2>
        <ul>
          <li>Fast Learning Curve. React is very a simple and lightweight library that only deals with the view layer</li>
          <li>Reusable Components. React provides a component based structure (fun fact this whole list is in a component)</li>
          <li>Fast render with Virtual DOM</li>
          <li>Clean Abstraction</li>
          <li>Flux and Redux</li>
          <li>Great Developer Tools</li>
          <li>React Native</li>
        </ul>
      </div>
     );
  }
}


export default Reasons;


class Hello extends React.Component {  
  render(props) {  
      return(
      <div>
    <html>
      <head><title>Hemit's first react app</title></head>
      <body>
      <h1>Welcome to Hemit's first react website</h1>
      < Reasons />
      <Button href="/about">Click link to go learn about me</Button>
      
      </body>
    </html>
      </div>
      ) 
  }  
}

module.exports = Hello;