import React from 'react'

import PlaySwitch from '../controls/PlaySwitch'
import ToggleSwitch from '../controls/ToggleSwitch'
import Slider from '../controls/Slider'
import Knob from '../controls/Knob'
import ButtonSet from '../controls/ButtonSet'

export default class Distortion extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const set = ['none', '2x', '4x']

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
      <div className="Effect distortion">
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
        <div className="sliderDistortion">
          <Slider
            name={name}
            property="distortion.value"
            min="0"
            max="100"
            on={on}
            value={effect.distortion}
            handleValueChange={changeEffectValue}
          />
        </div>
        <div className="buttonSetOversample">
          <ButtonSet
            name={name}
            property="oversample.value"
            set={set}
            value={effect.oversample}
            handleValueChange={changeEffectValue}
          />
        </div>
      </div>
    )
  }
}
