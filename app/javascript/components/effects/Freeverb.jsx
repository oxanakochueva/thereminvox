import React from 'react'

import PlaySwitch from '../controls/PlaySwitch'
import ToggleSwitch from '../controls/ToggleSwitch'
import Slider from '../controls/Slider'
import Knob from '../controls/Knob'
import ButtonSet from '../controls/ButtonSet'

export default class Freeverb extends React.Component {
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
      <div className="Effect freeverb">
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
        <div className="sliderRoomSize">
          <Slider
            name={name}
            property="roomSize.value"
            min="0"
            max="1"
            value={effect.roomSize.value}
            handleValueChange={changeEffectValue}
          />
        </div>
        <div className="sliderDampening">
          <Slider
            name={name}
            property="dampening.value"
            min="0"
            max="5000"
            on={on}
            value={effect.dampening.value}
            handleValueChange={changeEffectValue}
          />
        </div>
      </div>
    )
  }
}
