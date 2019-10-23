import React from 'react'

import PlaySwitch from '../controls/PlaySwitch'
import ToggleSwitch from '../controls/ToggleSwitch'
import Slider from '../controls/Slider'
import Knob from '../controls/Knob'
import ButtonSet from '../controls/ButtonSet'

export default class Chorus extends React.Component {
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
      <div className="Effect chorus">
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
        <div className="sliderFrequency">
          <Slider
            name={name}
            property="frequency.value"
            min="0"
            max="100"
            value={effect.frequency.value}
            handleValueChange={changeEffectValue}
          />
        </div>
        <div className="sliderDelayTime">
          <Slider
            name={name}
            property="delayTime"
            min="0"
            max="10"
            on={on}
            value={effect.delayTime}
            handleValueChange={changeEffectValue}
          />
        </div>
        <div className="sliderDepth">
          <Slider
            name={name}
            property="depth"
            min="0"
            max="1"
            on={on}
            value={effect.depth}
            handleValueChange={changeEffectValue}
          />
        </div>
        <div className="knobSpread">
          <Knob
            name={name}
            property="spread"
            min="0"
            max="360"
            on={on}
            value={effect.spread}
            handleValueChange={changeEffectValue}
          />
        </div>
      </div>
    )
  }
}
