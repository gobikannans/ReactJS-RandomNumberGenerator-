import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  onRandomNumber = () => {
    this.setState({number: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {number} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="btn-style"
            type="button"
            onClick={this.onRandomNumber}
          >
            Generate
          </button>
          <p className="number-style">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
