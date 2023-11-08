import React from "react";
import { Component } from "react";
import Input from "./Input";


const style = {
  tip: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    color: 'white',
    margin: '0px 40px 15px 40px',
    fontFamily: 'Georgia, serif'
  }
}

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <div style={{ ...style.tip }}>
          <h1>Tip Calculator</h1>
        </div>
        <Input />
      </div>
    )
  }
}
export default Header;