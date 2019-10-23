import React from "react";

import PlaySwitch from "../controls/PlaySwitch";
import ToggleSwitch from "../controls/ToggleSwitch";
import Slider from "../controls/Slider";
import Knob from "../controls/Knob";
import ButtonSet from "../controls/ButtonSet";

export default class Tremolo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      name,
      effect,
      wet,
      on,
      value,
      toggleEffect,
      changeEffectWetValue,
      changeEffectValue
    } = this.props;

    return (
      <div className="Effect tremolo">
        <div className="sliderFrequency">
          <Slider
            name={name}
            property="frequency.value"
            min="0"
            max="100"
            on={on}
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
        <div className="sliderSpread">
          <Slider
            name={name}
            property="spread"
            min="0"
            max="180"
            on={on}
            value={effect.spread}
            handleValueChange={changeEffectValue}
          />
        </div>
      </div>
    );
  }
}
