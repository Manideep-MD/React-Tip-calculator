import React from "react";
import { Component } from "react";

const style = {
  customer: {
    width: '100%',
    margin: '50px 0px 0px 0px',
    border: '3px solid pink',
    height: '30vh'
  },
  customer1: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '0px'
  }
}

class Output extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div style={{ ...style.customer }}>
        <h2 style={{ ...style.customer1 }}>Customer List:</h2>
        <div>
          <ol>
            {this.props.details.map((item, index) => (
              <li key={index}>
                {item.user} offering a tip of {item.bill * item.service} rupees
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}
export default Output;