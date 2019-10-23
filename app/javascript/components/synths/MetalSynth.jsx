import _ from 'lodash'
import React from 'react'
import Tone from 'tone'

import PlaySwitch from '../controls/PlaySwitch'
import ToggleSwitch from '../controls/ToggleSwitch'
import Slider from '../controls/Slider'
import Knob from '../controls/Knob'
import ButtonSet from '../controls/ButtonSet'

export default class MetalSynth extends React.Component {
  constructor(props) {
    super(props)
    _.bindAll(this, 'handleValueChange')
  }

  handleValueChange(name, property, value) {
    const { changeSynthValue } = this.props
    changeSynthValue(name, property, value)
  }

  render() {
    const { synth, instrument, on, togglePlay } = this.props
    const { attack, decay, release } = instrument.envelope

    return (
      <div className="innerContainer">
        <div className="playButton">
          <ToggleSwitch value="&#9836;" current={on} handleClick={togglePlay} />
        </div>
        <div className="sliderAttack">
          <Slider
            name={synth}
            property="envelope.attack"
            min="0"
            max="1"
            value={attack}
            handleValueChange={this.handleValueChange}
          />
        </div>
        <div className="sliderDecay">
          <Slider
            name={synth}
            property="envelope.decay"
            min="0"
            max="1"
            value={decay}
            handleValueChange={this.handleValueChange}
          />
        </div>
      </div>
    )
  }
}
