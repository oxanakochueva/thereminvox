import React from 'react'
import Menubar from '../components/Menubar'
import Tone from 'tone'

export default class Thereminvox extends React.Component {
  constructor(props) {
    super(props)

    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)()
    let oscillator = audioContext.createOscillator()
    oscillator.type = 'sine'

    let analyser = audioContext.createAnalyser()
    analyser.fftSize = 2048
    oscillator.connect(analyser)

    this.state = {
      audioContext: audioContext,
      oscillator: oscillator,
      analyser: analyser,
      playing: false,
      x: 0,
      y: 0,
      fftData: []
    }

    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.handleStart = this.handleStart.bind(this)
    this.handleStop = this.handleStop.bind(this)
    this.handleStartOrStopClick = this.handleStartOrStopClick.bind(this)
    this.changeFrequency = this.changeFrequency.bind(this)
    this.changeDetune = this.changeDetune.bind(this)
    this.changeVisualization = this.changeVisualization.bind(this)
    this.handleSynthPlay = this.handleSynthPlay.bind(this)
  }

  componentDidMount() {
    document.addEventListener('mousemove', this.handleMouseMove)
  }

  handleMouseMove(e) {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })

    this.changeFrequency()
    this.changeDetune()
    this.changeVisualization()
  }

  handleStartOrStopClick() {
    let { playing } = this.state

    if (playing) {
      this.handleStop()
    } else {
      this.handleStart()
    }
  }

  // handleSynthPlay() {
  //   // let synth = new Tone.Synth().toMaster()
  //   // synth.triggerAttackRelease('C4', '8n')
  //
  //   //pattern
  //   // let pattern = new Tone.Pattern(
  //   //   function(time, note) {
  //   //     synth.triggerAttackRelease(note, 0.25)
  //   //   },
  //   //   ['C4', 'D4', 'E4', 'G4', 'A4']
  //   // )
  //   // pattern.start(0)
  //
  //   //loop
  //   // let loop = new Tone.Loop(function(time) {
  //   //   synth.triggerAttackRelease('C2', '8n', time)
  //   // }, '4n')
  //   // loop.start('1m').stop('4m')
  //
  //   //pass in some initial values for the filter and filter envelope
  //   // var synth = new Tone.Synth({
  //   //   oscillator: {
  //   //     type: 'pwm',
  //   //     modulationFrequency: 0.2
  //   //   },
  //   //   envelope: {
  //   //     attack: 0.02,
  //   //     decay: 0.1,
  //   //     sustain: 0.2,
  //   //     release: 0.9
  //   //   }
  //   // }).toMaster()
  //   //
  //   // //start the note "D3" one second from now
  //   // synth.triggerAttack('D3', '+1')
  //
  //   //a 4 voice Synth
  //   // let polySynth = new Tone.PolySynth(4, Tone.Synth).toMaster()
  //   // polySynth.triggerAttackRelease(['C4', 'E4', 'G4', 'B4'], '2n')
  //   // let distortion = new Tone.Distortion(0.4).toMaster()
  //   // polySynth.connect(distortion)
  //
  //   // Tone.Transport.scheduleRepeat(
  //   //   function(time) {
  //   //     note.triggerAttack(time)
  //   //   },
  //   //   '8n',
  //   //   '1m'
  //   // )
  //
  //   //toner
  //   // Tone.Transport.bpm.value = 120
  //   // Tone.Transport.start()
  // }
  handleSynthPlay() {
    let counter = 0
    let loopBeat = new Tone.Loop(beat, '8n')

    let baseBeat = new Tone.MembraneSynth({
      pitchDecay: 0.01,
      octaves: 2,
      oscillator: {
        type: 'sine'
      },
      envelope: {
        attack: 0.1,
        decay: 0.4,
        sustain: 1,
        release: 1.4,
        attackCurve: 'sine'
      }
    }).toMaster()

    let noise = new Tone.NoiseSynth({
      noise: {
        type: 'brown'
      },
      envelope: {
        attack: 1.5,
        decay: 0.01,
        sustain: 1
      },
      volume: -6
    }).toMaster()

    let metal = new Tone.MetalSynth({
      frequency: 2500,
      envelope: {
        attack: 0.01,
        decay: 0.2,
        release: 0.08
      },
      harmonicity: 3,
      modulationIndex: 16,
      resonance: 7000,
      octaves: 0.5
    }).toMaster()

    let polySynth = new Tone.PolySynth({
      polyphony: 4,
      volume: 1,
      detune: 0,
      voice: Tone.Synth
    }).toMaster()

    function beat(time) {
      baseBeat.triggerAttackRelease('8n', time)

      if (counter % 15 === 0) {
        noise.triggerAttackRelease(time, 0.1)
        polySynth.triggerAttackRelease('G#1', time)
        polySynth.triggerAttackRelease('A2', 0.5)
      }
      if (counter % 5 === 0) {
        polySynth.triggerAttackRelease(time)
      }

      if (counter % 3 !== 1) {
        baseBeat.triggerAttackRelease('B2', '8n', time)
      }
      if (counter % 8 !== 1) {
        metal.triggerAttackRelease('4n', time, 0.1)

        polySynth.triggerAttackRelease('A#3', 0.1)
      }

      counter = (counter + 1) % 8
    }

    Tone.Transport.start()
    loopBeat.start(0)
  }

  handleStart() {
    let { audioContext, oscillator, analyser, x, y } = this.state

    oscillator = audioContext.createOscillator()
    oscillator.type = 'sine'
    oscillator.frequency.setValueAtTime(x, audioContext.currentTime)

    oscillator.connect(audioContext.destination)
    oscillator.start()

    analyser = audioContext.createAnalyser()
    analyser.fftSize = 2048
    oscillator.connect(analyser)

    this.setState({
      oscillator: oscillator,
      analyser: analyser,
      playing: true
    })
  }

  handleStop() {
    let { oscillator } = this.state
    oscillator.stop()

    this.setState({
      oscillator: oscillator,
      playing: false
    })
  }

  changeFrequency() {
    let { audioContext, oscillator, x, y } = this.state
    oscillator.frequency.setValueAtTime(x, audioContext.currentTime)
  }

  changeDetune() {
    let { audioContext, oscillator, x, y } = this.state
    oscillator.detune.setValueAtTime(y, audioContext.currentTime)
  }

  changeVisualization() {
    const { analyser, playing } = this.state

    if (playing) {
      const bufferLength = analyser.frequencyBinCount
      let dataArray = new Uint8Array(bufferLength)
      analyser.getByteTimeDomainData(dataArray)

      this.setState({
        fftData: dataArray
      })
    }
  }

  render() {
    const { playing, analyser, fftData } = this.state
    let button = 'Start'
    const data = analyser.frequencyBinCount

    if (playing) {
      button = 'Stop'
    }

    let elements = []

    if (fftData != undefined) {
      fftData.map(function(fftParam, i) {
        elements.push(
          <div
            key={i}
            className="analyserCol"
            style={{ height: fftParam + 'px' }}
          />
        )
      })
    }

    return (
      <div>
        <div onClick={this.handleSynthPlay}>Synth</div>
        <div onClick={this.handleStartOrStopClick}> {button}</div>
        <div className="analyser">{elements}</div>
      </div>
    )
  }
}
