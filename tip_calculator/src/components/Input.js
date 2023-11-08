import React, { Component } from "react";
import Output from "./Output";
import Footer from "./Footer";



const style = {
  bill: {
    width: '80%',
    marginLeft: '150px',
  },
  service: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  page: {
    border: '3px solid green',
    height: '30vh',
    margin: '0px 40px 15px 40px',
    paddingTop: '17px',
    fontFamily: 'Georgia, serif'
  }
}



class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        bill: '',
        service: '',
        user: '',
        finalTip: 0,
        totalCustomer: 0,
        tip: ''
      },
      details: []
    }
  }


  Bill(e) {
    this.setState({ data: { ...this.state.data, bill: e.target.value } });
  }


  Service(e) {
    this.setState({ data: { ...this.state.data, service: e.target.value } });
  }


  Add(e) {
    this.setState({ data: { ...this.state.data, user: e.target.value } });
  }


  Tip() {
    if (this.state.data.bill === "" || this.state.data.user === "") {
      alert("Fill the details")
      return
    }
    const { bill, service } = this.state.data;
    const tip = parseFloat(bill) * parseFloat(service);
    const finalTip = this.state.data.finalTip + tip;
    this.setState({
      details: [...this.state.details, this.state.data], data: {
        ...this.state.data, user: "",
        finalTip: finalTip, totalCustomer: this.state.details.length + 1, tip: tip,
      },
    })

  }


  render() {
    return (
      <div style={{ ...style.page }}>
        <div>
          <center>Enter Your Bill Amount</center><br />
          <input type="number" value={this.state.data.bill} name="bill" onChange={(e) => this.Bill(e)} style={{ ...style.bill }} />
        </div><br /><br />
        <div style={{ ...style.service }}>
          How was the service: &nbsp;
          <select style={{ height: '30px' }} onChange={(e) => this.Service(e)}>
            <option value={this.state.data.service}>Select Service</option>
            <option value="0.2">Excellent-20%</option>
            <option value="0.1">Medium-10%</option>
            <option value="0.05">Bad-5%</option>
          </select> &nbsp;&nbsp;&nbsp;
          <input type="text" value={this.state.data.user} name="user" onChange={(e) => this.Add(e)} /> &nbsp;
          <button style={{ height: '30px', backgroundColor: 'blue', color: 'white' }} onClick={() => this.Tip()}>Add Customer</button>
        </div>
        <div>
          <Output details={this.state.details} />
          <Footer totalCustomer={this.state.data.totalCustomer} totalTip={this.state.data.finalTip} />
        </div>
      </div>
    )
  }
}



export default Input;