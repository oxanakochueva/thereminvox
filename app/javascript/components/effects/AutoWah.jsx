import React from 'react'

import PlaySwitch from '../controls/PlaySwitch'
import ToggleSwitch from '../controls/ToggleSwitch'
import Slider from '../controls/Slider'
import Knob from '../controls/Knob'
import ButtonSet from '../controls/ButtonSet'

export default class AutoWah extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
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
      <div className="Effect autoWah">
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
        <div className="sliderBaseFrequency">
          <Slider
            name={name}
            property="baseFrequency.value"
            min="0"
            max="1000"
            value={effect.baseFrequency.value}
            handleValueChange={changeEffectValue}
          />
        </div>
        <div className="sliderOctaves">
          <Slider
            name={name}
            property="octaves.value"
            min="0"
            max="6"
            on={on}
            value={effect.octaves.value}
            handleValueChange={changeEffectValue}
          />
        </div>
        <div className="knobSensitivity">
          <Knob
            name={name}
            property="sensitivity"
            min="-100"
            max="100"
            value={effect.sensitivity}
            handleValueChange={changeEffectValue}
          />
        </div>
        <div className="sliderGain">
          <Slider
            name={name}
            property="gain.value"
            min="0"
            max="10"
            on={on}
            value={effect.gain.value}
            handleValueChange={changeEffectValue}
          />
        </div>
        <div className="sliderAttack">
          <Slider
            name={name}
            property="follower.attack"
            min="0"
            max="1"
            on={on}
            value={effect.follower.attack}
            handleValueChange={changeEffectValue}
          />
        </div>
        <div className="sliderRelease">
          <Slider
            name={name}
            property="follower.release"
            min="0"
            max="1"
            on={on}
            value={effect.follower.release}
            handleValueChange={changeEffectValue}
          />
        </div>
      </div>
    )
  }
}
