import React from 'react'
import ReactHowler from 'react-howler'
import song from "../assest/Beautiful-Piano.mp3"
import mute from "../assest/icons8-mute-50.png"
import sound from "../assest/icons8-sound-50.png"
class OnlyPlayPausebutton extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      playing: false
    }
    this.handlePlay = this.handlePlay.bind(this)
    this.handlePause = this.handlePause.bind(this)
  }

  handlePlay () {
    this.setState({
      playing: true
    })
  }

  handlePause () {
    this.setState({
      playing: false
    })
  }

  render () {
    return (
      <div>
        <ReactHowler
          src={song}
          playing={this.state.playing}
        />
        <button onClick={this.handlePlay}><img width={16} src={sound} alt="" /></button>
        <button onClick={this.handlePause}><img width={16} src={mute} alt="" /></button>
      </div>
    )
  }
}

export default OnlyPlayPausebutton