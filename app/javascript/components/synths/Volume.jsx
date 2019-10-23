import _ from 'lodash'
import React from 'react'
import Tone from 'tone'

import PlaySwitch from '../controls/PlaySwitch'
import ToggleSwitch from '../controls/ToggleSwitch'
import Slider from '../controls/Slider'
import Knob from '../controls/Knob'
import ButtonSet from '../controls/ButtonSet'

export default class Volume extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { volume, changeVolumeValue } = this.props

    return (
      <div className="innerContainer">
        <div className="sliderVolume">
          <h2>Volume</h2>
          <Slider
            name="volume"
            property="volume"
            min="0"
            max="100"
            value={volume}
            handleValueChange={changeVolumeValue}
          />
        </div>
      </div>
    )
  }
}
