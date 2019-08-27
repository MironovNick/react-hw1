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

  /*render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }*/
}

const Topbar = () => (

  <div className="container">
    <div className="topbar">

        <div className = "row"><i></i><p>+ 1235 2355 98</p></div>
       <div className = "row"> <i></i><p>YOUREMAIL@EMAIL.COM</p></div>
        <div className = "row"><p>3-5 BUSINESS DAYS DELIVERY & FREE RETURNS</p></div>

    </div>
  </div>  

);

const Navig = () => (

  <div className="navbar">
    <p>vegefoods</p>
    <ul className="menu">
      <li>home</li>
      <li>shop</li>
      <li>about</li>
      <li>blog</li>
      <li>contact</li>
      <li>case</li>
    </ul>
  </div>

);

const Image = () => (

  <div className="main_img">
    <p></p>
    <h1></h1>
  </div>

);


const shop_layout = (

  <div>
    <header>
      <Topbar />
      <Navig />
    </header>
    <content>
      <Image />
    </content>
  </div>
);




render(shop_layout, document.getElementById('root'));
