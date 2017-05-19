import React, { Component } from 'react';
import './ISOscanner.css';

class ISOscanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
        alerts: [{dir: "bullish", ticker: "AMZN", size: "$10million"},
            {dir: "bullish", ticker: "FB", size: "$15million"},
            {dir: "bearish", ticker: "AMZN", size: "$7million"}]
    };
  }

  addRow() {

  }

  AddAlert(d) {
        var dir = document.createElement("SPAN").appendChild(document.createTextNode("bullish bear"));
        //dir.setAttribute("className","table")
        var ticker = document.createElement("SPAN").appendChild(document.createTextNode("tiky"));
        var size = document.createElement("SPAN").appendChild(document.createTextNode("$999bn"));
        document.getElementById('alertsTable').appendChild(dir);
        document.getElementById('alertsTable').appendChild(ticker);
        document.getElementById('alertsTable').appendChild(size);
        console.log(this.state)
  }

  DelAlert(index) {
  let newState = this.state;
  this.setState(newState);
  console.log(this.state);
  }

  render() {
    let alertLength = this.state.alerts.length


    return (
      <div>
        <div>
          <h2>isoscanner</h2>
          <div className='table'>
            <div className='table'>
              <span className="table-cell">row #</span>
              <span className="table-cell">ticker</span>
              <span className="table-cell">direction</span>
            </div>
            <div className='table'>
              <span id="table-cell">add row {alertLength}<button onClick={this.AddAlert.bind(this)}></button></span>
            </div>
            <div className='table'>
              <span className="table-cell">row #</span>
              <span className="table-cell">ticker{this.state.alerts[0].ticker}</span>
              <span className="table-cell">direction</span>
              </div>
              <div id='alertsTable'>
                <span className="table-cell">aadf</span>
                <span className="table-cell">ticker{this.state.alerts[0].ticker}</span>
                <span className="table-cell">direction</span>
                </div>
          </div>
        </div>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default ISOscanner;
