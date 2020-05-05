import React, { Component } from 'react';
import './calcForm.css'

class CalcForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            inputBill: 0,
            partySize: 0,
            inputTip: 0,
        }
    }

    handleBill() {
        const { inputBill, partySize, inputTip } = this.state
        let bill = parseFloat(inputBill)
        let tipPercent = parseInt(inputTip)
        let people = parseInt(partySize)

        let tip = bill * tipPercent/100
        let total = bill + tip
        let partySplitBill = total/people

        return(
            <div className="output">
                <div>
                    Tip: ${ tip }
                </div>
                <div>
                    Bill Total w/ Tip: ${ total }
                </div>
                <div>
                    Bill Per Person: ${ partySplitBill }
                </div>
            </div>
        )

    }

    render() {
        return (
          <form className='calc-form'>
            <h1>Tip Calculator</h1>
            <div className="input">
            Input the Bill:
                <input
                    className="input-container"
                    type="number"
                    value={this.state.inputBill}
                    onChange={(e) => this.setState({inputBill: e.target.value})}
                />
                Input the Tip Amount:
                <input
                    className="input-container"
                    type="number"
                    value={this.state.inputTip}
                    onChange={(e) => this.setState({inputTip: e.target.value})}
                />
                Number of People:
                <input
                    className="input-container"
                    type="number"
                    value={this.state.partySize}
                    onChange={(e) => this.setState({partySize: e.target.value})}
                />
            </div>
            { this.handleBill() }
          </form>
      )
    }
}

export default CalcForm