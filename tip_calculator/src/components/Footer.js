import React from "react";
import { Component } from "react";

const style = {
  button: {
    marginLeft: '500px',
    width: '200px',
    backgroundColor: 'red',
    color: 'white',
    height: '30px'
  },
  table: {
    marginLeft: '0px',
    border: '2px solid green',
    width: '100%',
    marginBottom: '7px'
  },
  th: {
    borderBottom: '1px solid black',
    borderRight: '2px solid black'
  },
  td: {
    textAlign: 'center',
    borderRight: '2px solid black'
  },
  foot: {
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '20px'
  }

}

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flag: false
    }
  }
  Click() {
    this.setState({ flag: true })
  }

  render() {
    return (
      <div>
        <div>
          <button style={{ ...style.button }} onClick={() => this.Click()} >Calculate Tip & Customer</button>
        </div>
        <div>
          {this.state.flag && <table style={{ ...style.table }}>
            <thead>
              <tr>
                <th style={{ ...style.th }}>Total Customers</th>
                <th style={{ ...style.th }}>Total Tip</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ ...style.td }}>{this.props.totalCustomer}</td>
                <td style={{ ...style.td }}>{this.props.totalTip}</td>
              </tr>
            </tbody>
          </table>}
        </div>
        <div style={{ ...style.foot }}>@2020 Tip Calculator</div>
      </div>
    )
  }
}
export default Footer;