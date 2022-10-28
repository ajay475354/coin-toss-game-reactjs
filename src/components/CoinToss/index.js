import {Component} from 'react'
import './index.css'

const headImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    head: 0,
    tail: 0,
    finalImage: headImage,
  }

  onclickButton = () => {
    const {head, tail} = this.state

    const tossResult = Math.floor(Math.random() * 2)

    let updateHeadCount = head
    let updateTailCount = tail
    let updateImage = ''

    if (tossResult === 0) {
      updateImage = headImage
      updateHeadCount += 1
    } else {
      updateImage = tailImage
      updateTailCount += 1
    }

    this.setState({
      head: updateHeadCount,
      tail: updateTailCount,
      finalImage: updateImage,
    })
  }

  render() {
    const {head, tail, finalImage} = this.state
    const toatalCount = head + tail

    return (
      <div className="app_container">
        <div className="content_container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={finalImage} alt="toss result" className="image" />
          <button type="button" className="button" onClick={this.onclickButton}>
            Toss Coin
          </button>
          <div className="counts_container">
            <p className="total">Total:{toatalCount}</p>
            <p className="total">Heads:{head}</p>
            <p className="total">Tails:{tail}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
