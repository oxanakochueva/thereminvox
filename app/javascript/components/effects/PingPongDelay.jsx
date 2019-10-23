import React from 'react'

import PlaySwitch from '../controls/PlaySwitch'
import ToggleSwitch from '../controls/ToggleSwitch'
import Slider from '../controls/Slider'
import Knob from '../controls/Knob'
import ButtonSet from '../controls/ButtonSet'

export default class PingPongDelay extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      name,
      effect,
      on,
      wet,
      value,
      toggleEffect,
      changeEffectWetValue,
      changeEffectValue
    } = this.props

    return (
      <div className="Effect pingPongDelay">
        <ToggleSwitch value="" current={on} handleClick={toggleEffect} />
      </div>
      // <div className="sliderWet">
      //   <Slider
      //     name={name}
      //     property="wet"
      //     min="0"
      //     max="1"
      //     on={on}
      //     value={wet}
      //     handleValueChange={changeEffectWetValue}
      //   />
      // </div>
      // <div className="sliderDelayTime">
      //   <Slider
      //     name={name}
      //     property="delayTime"
      //     min="0"
      //     max="1"
      //     on={on}
      //     value={effect.delayTime.value}
      //     handleValueChange={changeEffectValue}
      //   />
      // </div>
      // <div className="sliderMaxDelayTime">
      //   <Slider
      //     name={name}
      //     property="effect.maxDelayTime"
      //     min="0"
      //     max="1"
      //     on={on}
      //     value={effect.maxDelayTime}
      //     handleValueChange={changeEffectValue}
      //   />
      // </div>
    )
  }
}
