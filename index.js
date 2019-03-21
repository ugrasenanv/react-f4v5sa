import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

 render() {
    return (
      <div>
      <h1>Welcome Shankar</h1>
         <p>I like playing chess</p>
         <ul><h2>Top Three Vacation spots</h2>
         <li><strong>Kodaikanel</strong></li>
         <li class="one">Ooty</li>
         <li id="two">Munnar</li>
         </ul>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
