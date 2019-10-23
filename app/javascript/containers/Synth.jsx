import _ from "lodash";
import React from "react";
import Tone from "tone";
import "whatwg-fetch";

import * as effects from "../tunes/effects";
import * as synths from "../tunes/synths";

import AutoFilter from "../components/effects/AutoFilter";
import AutoPanner from "../components/effects/AutoPanner";
import AutoWah from "../components/effects/AutoWah";
import BitCrusher from "../components/effects/BitCrusher";
import Chebyshev from "../components/effects/Chebyshev";
import Chorus from "../components/effects/Chorus";
import Distortion from "../components/effects/Distortion";
import FeedbackDelay from "../components/effects/FeedbackDelay";
import FeedbackEffect from "../components/effects/FeedbackEffect";
import Freeverb from "../components/effects/Freeverb";
import JcReverb from "../components/effects/JcReverb";
import Phaser from "../components/effects/Phaser";
import PingPongDelay from "../components/effects/PingPongDelay";
import PitchShift from "../components/effects/PitchShift";
import Reverb from "../components/effects/Reverb";
import StereoWidener from "../components/effects/StereoWidener";
import Tremolo from "../components/effects/Tremolo";
import Vibrato from "../components/effects/Vibrato";

import MetalSynth from "../components/synths/MetalSynth";
import BaseSynth from "../components/synths/BaseSynth";
import PolySynth from "../components/synths/PolySynth";
import MembraneSynth from "../components/synths/MembraneSynth";
import NotesSynth from "../components/synths/NotesSynth";

import Volume from "../components/synths/Volume";

export default class Synth extends React.Component {
  constructor(props) {
    super(props);

    const defaultWetValue = 0.8;

    let beatSynth = synths.polySynth();
    let beatChebyshev = effects.chebyshev();
    let beatChorus = effects.chorus();
    let beatVibrato = effects.vibrato();

    let metalSynth = synths.metalSynth();
    let metalDistortion = effects.distortion();
    let metalFreeverb = effects.freeverb();

    let notesSynth = synths.notesSynth();
    let notesTremolo = effects.tremolo();
    let notesPingPongDelay = effects.pingPongDelay();

    let pluckSynth = synths.pluckSynth();
    let pluckAutoWah = effects.autoWah();

    let membraneSynth = synths.membraneSynth();

    let counter;
    let notes = synths.notes;
    let notesBeat = synths.notesBeat;

    metalSynth.chain(metalDistortion, metalFreeverb, Tone.Master);
    beatSynth.chain(beatChebyshev, beatChorus, beatVibrato, Tone.Master);
    membraneSynth.toMaster();
    pluckSynth.chain(pluckAutoWah, Tone.Master);
    notesSynth.chain(notesTremolo, notesPingPongDelay, Tone.Master);

    //loops

    let loop1 = new Tone.Loop(function(time) {
      metalSynth.triggerAttackRelease();
    });
    loop1.mute = true;
    loop1.start();

    let loop2 = new Tone.Sequence(
      function(time, note) {
        notesSynth.triggerAttackRelease(note, "8n", time);
      },
      notesBeat,
      "3n"
    );
    loop2.mute = true;
    loop2.start();

    let loop3 = new Tone.Loop(function(time, note) {
      beatSynth.triggerAttackRelease("A3", "1m", "17n");
      pluckSynth.triggerAttackRelease("C4", "8n", "6n");
      beatSynth.triggerAttackRelease(["Eb4", "Cb3", "Eb2"], "7n");
      beatSynth.triggerAttackRelease(["D2", "A#3", "Db4"], "4n");
    });
    loop3.mute = true;
    loop3.start();

    let loop4 = new Tone.Loop(function(counter, time) {
      counter = 0;
      if (counter % 4 === 0) {
        membraneSynth.triggerAttackRelease("F3", "8n");
        beatSynth.triggerAttackRelease("B2", "4n");
      }

      if (counter % 5 === 0) {
        metalSynth.triggerAttackRelease("A#8", "7n");
        beatSynth.triggerAttackRelease("B1", "15n");
      }

      if (counter % 2 === 0) {
        membraneSynth.triggerAttackRelease("D3", "3n");
        if (counter % 13 !== 1) {
          pluckSynth.triggerAttackRelease("G3", "8n");
        }
      }
      counter = (counter + 1) % 16;
    });
    loop4.mute = true;
    loop4.start();

    let loop5 = new Tone.Sequence(
      function(time, note) {
        notesSynth.triggerAttackRelease(note, "4n", time);
      },
      notes,
      "8n"
    );
    loop5.mute = true;
    loop5.start();

    this.state = {
      lastChange: Date.now(),
      membraneSynth,
      metalSynth,
      notesSynth,
      notesTremolo: {
        name: "notesTremolo",
        effect: notesTremolo,
        wet: defaultWetValue,
        on: false
      },
      notesPingPongDelay: {
        name: "notesPingPongDelay",
        effect: notesPingPongDelay,
        wet: defaultWetValue,
        on: false
      },
      metalDistortion: {
        name: "metalDistortion",
        effect: metalDistortion,
        wet: defaultWetValue,
        on: false
      },
      metalFreeverb: {
        name: "metalFreeverb",
        effect: metalFreeverb,
        wet: defaultWetValue,
        on: false
      },
      pluckSynth,
      pluckAutoWah: {
        name: "pluckAutoWah",
        effect: pluckAutoWah,
        wet: defaultWetValue,
        on: false
      },
      beatSynth,
      beatChebyshev: {
        name: "beatChebyshev",
        effect: beatChebyshev,
        wet: defaultWetValue,
        on: false
      },
      beatChorus: {
        name: "beatChorus",
        effect: beatChorus,
        wet: defaultWetValue,
        on: false
      },
      beatVibrato: {
        name: "beatVibrato",
        effect: beatVibrato,
        wet: defaultWetValue,
        on: false
      },
      loop1: {
        loop: loop1,
        on: false
      },
      loop2: {
        loop: loop2,
        on: false
      },
      loop3: {
        loop: loop3,
        on: false
      },
      loop4: {
        loop: loop4,
        on: false
      },
      loop5: {
        loop: loop5,
        on: false
      },
      volume: 0
    };

    _.bindAll(
      this,
      "toggleLoop",
      "changeSynthValue",
      "changeVolumeValue",
      "toggleEffect",
      "changeEffectWetValue",
      "changeEffectValue"
    );

    Tone.Transport.bpm.value = 76;
    Tone.Transport.start();
  }

  toggleLoop(loopName) {
    let { loop, on } = this.state[loopName];

    if (on == true) {
      loop.mute = true;
    } else {
      loop.mute = false;
    }

    this.setState({
      [`${loopName}`]: {
        loop: loop,
        on: !on
      }
    });
  }

  changeSynthValue(synthName, effectName, value) {
    let regexBefore = /(.*)\./;
    let regexAfter = /\.(.*)/;
    let synth = this.state[synthName];
    let effectNameNamespace = effectName.match(regexBefore)[1];
    let effectNameInNamespace = effectName.match(regexAfter)[1];
    if (synthName == "notesSynth") {
      if (effectNameNamespace == "oscillator") {
        synth.voices[0].oscillator[effectNameInNamespace] = value;
      } else if (effectNameNamespace == "envelope") {
        synth.voices[0].envelope[effectNameInNamespace] = value;
      }
    } else {
      synth[effectName] = value;
    }

    this.setState({
      [`${synthName}`]: synth
    });
  }

  changeVolumeValue(synthName, effectName, value) {
    Tone.Master.volume.value = Math.round(value);

    this.setState({
      volume: Math.round(value)
    });
  }

  toggleEffect(effectName) {
    let { name, effect, wet, on } = this.state[effectName];

    effect.wet.value = on == true ? 0 : wet;
    on = !on;

    this.setState({
      [`${effectName}`]: {
        name,
        effect,
        wet,
        on
      }
    });
  }

  changeEffectWetValue(effectName, effectProperty, value) {
    let { name, effect, wet, on } = this.state[effectName];

    effect[effectProperty].value = on == true ? value : 0;
    wet = value;

    this.setState({
      [`${effectName}`]: {
        name,
        effect,
        wet,
        on
      }
    });
  }
  changeEffectValue(effectName, effectProperty, value) {
    let { name, effect, wet, on } = this.state[effectName];

    if (effectProperty == "order") {
      value = Math.round(value);
    }

    effect[effectProperty] = value;

    this.setState({
      [`${effectName}`]: {
        name,
        effect,
        wet,
        on
      }
    });
  }

  render() {
    let {
      membraneSynth,
      pluckSynth,
      pluckAutoWah,
      beatSynth,
      beatChebyshev,
      beatChorus,
      beatVibrato,
      notesSynth,
      notesTremolo,
      notesPingPongDelay,
      metalSynth,
      metalDistortion,
      metalFreeverb,
      loop1,
      loop2,
      loop3,
      loop4,
      loop5,
      volume
    } = this.state;

    let {
      toggleEffect,
      toggleLoop,
      changeSynthValue,
      changeVolumeValue,
      changeEffectWetValue,
      changeEffectValue,
      changeEffectFilterValue
    } = this;

    return (
      <div className="container">
        <div className="common">
          <Volume volume={volume} changeVolumeValue={changeVolumeValue} />
        </div>
        <div className="yellowSynth">
          <div className="text swipe">
            <span>&#8593;</span>Swipe
          </div>
          <div className="text click">
            <span>&#8593;</span>Click
          </div>
          <MetalSynth
            synth="metalSynth"
            instrument={metalSynth}
            on={loop1.on}
            togglePlay={() => toggleLoop("loop1")}
            changeSynthValue={this.changeSynthValue}
          />
          <Distortion
            {...metalDistortion}
            toggleEffect={() => toggleEffect("metalDistortion")}
            changeEffectWetValue={changeEffectWetValue}
            changeEffectValue={changeEffectValue}
          />
          <Freeverb
            {...metalFreeverb}
            toggleEffect={() => toggleEffect("metalFreeverb")}
            changeEffectWetValue={changeEffectWetValue}
            changeEffectValue={changeEffectValue}
          />
        </div>

        <div className="redSynth">
          <div className="text onOf">
            <span>&#8593;</span> ON/OF
          </div>
          <div className="text swipe">
            <span>&#8593;</span> Swipe
          </div>
          <div className="text click">
            <span>&#8593;</span> Click
          </div>
          <div className="text click2">
            <span>&#8593;</span> Click
          </div>
          <NotesSynth
            synth="notesSynth"
            instrument={notesSynth}
            on={loop5.on}
            togglePlay={() => toggleLoop("loop5")}
            changeSynthValue={this.changeSynthValue}
          />
          <Tremolo
            {...notesTremolo}
            toggleEffect={() => toggleEffect("notesTremolo")}
            changeEffectWetValue={changeEffectWetValue}
            changeEffectValue={changeEffectValue}
          />
          <PingPongDelay
            {...notesPingPongDelay}
            toggleEffect={() => toggleEffect("notesPingPongDelay")}
            changeEffectWetValue={changeEffectWetValue}
            changeEffectValue={changeEffectValue}
          />
        </div>

        <div className="whiteSynth">
          <div className="text onOf">
            <span>&#8593;</span>ON/OF
          </div>
          <div className="text swipe">
            <span>&#8593;</span>Swipe
          </div>
          <div className="text spin">
            <span>&#8593;</span>Spin
          </div>
          <div className="text click">
            <span>&#8593;</span>Click
          </div>
          <div className="text swipe2">
            <span>&#8593;</span>Swipe
          </div>
          <PolySynth
            synth="beatSynth"
            instrument={beatSynth}
            on={loop3.on}
            togglePlay={() => toggleLoop("loop3")}
            changeSynthValue={this.changeSynthValue}
          />
          <Chebyshev
            {...beatChebyshev}
            toggleEffect={() => toggleEffect("beatChebyshev")}
            changeEffectWetValue={changeEffectWetValue}
            changeEffectValue={changeEffectValue}
          />
          <Chorus
            {...beatChorus}
            toggleEffect={() => toggleEffect("beatChorus")}
            changeEffectWetValue={changeEffectWetValue}
            changeEffectValue={changeEffectValue}
          />
          <Vibrato
            {...beatVibrato}
            toggleEffect={() => toggleEffect("beatVibrato")}
            changeEffectWetValue={changeEffectWetValue}
            changeEffectValue={changeEffectValue}
          />
        </div>
        <div className="darkSynth">
          <div className="text spin">
            <span>&#8593;</span>Spin
          </div>
          <div className="text click">
            <span>&#8593;</span>Click
          </div>
          <BaseSynth
            synth="pluckSynth"
            instrument={pluckSynth}
            on={loop2.on}
            togglePlay={() => toggleLoop("loop2")}
            changeSynthValue={this.changeSynthValue}
          />
          <AutoWah
            {...pluckAutoWah}
            toggleEffect={() => toggleEffect("pluckAutoWah")}
            changeEffectWetValue={changeEffectWetValue}
            changeEffectValue={changeEffectValue}
          />
        </div>
      </div>
    );
  }
}
