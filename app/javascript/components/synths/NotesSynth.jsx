import _ from 'lodash'
import React from 'react'
import Tone from 'tone'

import PlaySwitch from '../controls/PlaySwitch'
import ToggleSwitch from '../controls/ToggleSwitch'
import Slider from '../controls/Slider'
import Knob from '../controls/Knob'
import ButtonSet from '../controls/ButtonSet'

export default class NotesSynth extends React.Component {
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

    const {
      type,
      count,
      spread,
      frequency,
      detune,
      partialCount
    } = instrument.voices[0].oscillator

    const setWave = ['sine', 'square', 'triangle', 'sawtooth', 'fatsawtooth']

    return (
      <div className="innerContainer">
        <div className="playButton">
          <ToggleSwitch value="&#9836;" current={on} handleClick={togglePlay} />
        </div>
        <div className="buttonSetType">
          <ButtonSet
            name={synth}
            property="oscillator.type"
            set={setWave}
            value={type}
            handleValueChange={this.handleValueChange}
          />
        </div>
        <div className="sliderCount">
          <Slider
            name={synth}
            property="oscillator.count"
            min="0"
            max="100"
            value={count}
            handleValueChange={this.handleValueChange}
          />
        </div>
        <div className="sliderSpread">
          <Slider
            name={synth}
            property="oscillator.spread"
            min="0"
            max="100"
            value={spread}
            handleValueChange={this.handleValueChange}
          />
        </div>
        <div className="sliderFrequency">
          <Slider
            name={synth}
            property="oscillator.frequency.value"
            min="0"
            max="5000"
            value={frequency}
            handleValueChange={this.handleValueChange}
          />
        </div>
        <div className="sliderDetune">
          <Slider
            name={synth}
            property="oscillator.detune.value"
            min="0"
            max="10"
            value={detune}
            handleValueChange={this.handleValueChange}
          />
        </div>
        <div className="sliderPartialCount">
          <Slider
            name={synth}
            property="oscillator.partialCount.value"
            min="0"
            max="100"
            value={partialCount}
            handleValueChange={this.handleValueChange}
          />
        </div>
      </div>
    )
  }
}
