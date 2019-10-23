import React from 'react'

import PlaySwitch from '../controls/PlaySwitch'
import ToggleSwitch from '../controls/ToggleSwitch'
import Slider from '../controls/Slider'
import Knob from '../controls/Knob'
import ButtonSet from '../controls/ButtonSet'

export default class Vibrato extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const set = ['sine', 'square', 'triangle', 'sawtooth']

    const {
      name,
      effect,
      wet,
      on,
      toggleEffect,
      changeEffectWetValue,
      changeEffectValue
    } = this.props

    return (
      <div className="Effect vibrato">
        <ToggleSwitch value="" current={on} handleClick={toggleEffect} />
        <div className="sliderWet">
          <Slider
            name={name}
            property="wet"
            min="0"
            max="1"
            value={wet}
            handleValueChange={changeEffectWetValue}
          />
        </div>
        <div className="sliderMaxDelay">
          <Slider
            name={name}
            property="maxDelay"
            min="0"
            max="1"
            value={effect.maxDelay}
            handleValueChange={changeEffectValue}
          />
        </div>
        <div className="knobFrequency">
          <Knob
            name={name}
            property="frequency.value"
            min="0"
            max="6000"
            value={effect.frequency.value}
            handleValueChange={changeEffectValue}
          />
        </div>
        <div className="sliderDepth">
          <Slider
            name={name}
            property="depth.value"
            min="0"
            max="1"
            on={on}
            value={effect.depth.value}
            handleValueChange={changeEffectValue}
          />
        </div>
      </div>
    )
  }
}
