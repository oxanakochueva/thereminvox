import React from 'react'

import PlaySwitch from '../controls/PlaySwitch'
import ToggleSwitch from '../controls/ToggleSwitch'
import Slider from '../controls/Slider'
import Knob from '../controls/Knob'
import ButtonSet from '../controls/ButtonSet'

export default class Chebyshev extends React.Component {
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
      <div className="Effect chebyshev">
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
        <div className="sliderOrder">
          <Slider
            name={name}
            property="order"
            min="1"
            max="100"
            on={on}
            value={effect.order}
            handleValueChange={changeEffectValue}
          />
        </div>
        <div className="buttonSetOversample">
          <ButtonSet
            name={name}
            property="oversample"
            set={set}
            value={effect.oversample}
            handleValueChange={changeEffectValue}
          />
        </div>
      </div>
    )
  }
}
