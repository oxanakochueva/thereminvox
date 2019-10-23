import React from "react";

import PlaySwitch from "../controls/PlaySwitch";
import ToggleSwitch from "../controls/ToggleSwitch";
import Slider from "../controls/Slider";
import Knob from "../controls/Knob";
import ButtonSet from "../controls/ButtonSet";

export default class PingPongDelay extends React.Component {
  constructor(props) {
    super(props);
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
    } = this.props;

    return (
      <div className="Effect pingPongDelay">
        <ToggleSwitch value="" current={on} handleClick={toggleEffect} />
      </div>
    );
  }
}
