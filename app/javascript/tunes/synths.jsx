import Tone from 'tone'

let notes = [
  ['D3', 'F#3', 'A3', 'A4'],
  ['D3', 'F#3', 'A3', null],
  ['D3', 'F#3', 'A3', null],
  ['D3', 'F#3', 'A3', 'B4'],
  ['D3', 'F#3', 'A3', 'Db5'],
  ['D3', 'F#3', 'A3', null],
  ['D3', 'F#3', 'A3', null],
  ['D3', 'F#3', 'A3', 'B4'],
  ['B2', 'D3', 'F#3', 'Db5'],
  ['B2', 'D3', 'F#3', 'E5'],
  ['B2', 'D3', 'F#3', 'Db5'],
  ['B2', 'D3', 'F#3', 'A4'],
  ['B2', 'D3', 'F#3', 'F#4'],
  ['B2', 'D3', 'F#3', null],
  ['Db3', 'F#3', 'A3', 'A4'],
  ['Db3', 'F#3', 'A3', 'F#4'],
  ['Db3', 'E3', 'Ab3', 'A4'],
  ['Db3', 'E3', 'Ab3', null],
  ['Db3', 'E3', 'Ab3', 'B4'],
  ['Db3', 'E3', 'Ab3', null],
  ['B2', 'D3', 'F#3', 'A4'],
  ['B2', 'D3', 'F#3', 'F#4'],
  ['B2', 'D3', 'F#3', 'A4'],
  ['B2', 'D3', 'F#3', 'F#4'],
  ['Db3', 'F#3', 'A3', 'A4'],
  ['Db3', 'F#3', 'A3', 'F#4'],
  ['Db3', 'F#3', 'A3', 'A4'],
  ['Db3', 'F#3', 'A3', 'F#4'],
  ['Db3', 'F#3', 'A3', 'A4'],
  ['Db3', 'F#3', 'A3', 'F#4'],
  ['Db3', 'F#3', 'A3', 'A4'],
  ['Db3', 'F#3', 'A3', 'F#4'],
  [null, null, null, 'A4'],
  [null, null, null, 'F#4'],
  [null, null, null, 'A4'],
  [null, null, null, 'F#4'],
  [null, null, null, 'A4'],
  [null, null, null, 'F#4'],
  [null, null, null, 'A4'],
  [null, null, null, 'F#4'],
  [null, null, null, 'B4'],
  [null, null, null, null],
  ['D3', 'F#3', 'A3', 'A4'],
  ['D3', 'F#3', 'A3', null],
  ['D3', 'F#3', 'A3', null],
  [('D3', 'F#3', 'A3', 'B4')],
  ['B2', 'D3', 'F#3', 'F#4'],
  ['B2', 'D3', 'F#3', null],
  ['B2', 'D3', 'F#3', 'F#4'],
  ['Db3', 'F#3', 'A3', 'A4'],
  ['Db3', 'F#3', 'A3', null],
  ['Db3', 'F#3', 'A3', 'B4'],
  ['Db3', 'F#3', 'A3', null],
  ['Db3', 'F#3', 'A3', 'Db5'],
  ['Db3', 'F#3', 'A3', null],
  ['Db3', 'F#3', 'A3', 'A4'],
  ['Db3', 'F#3', 'A3', 'F#4'],
  ['Db3', 'E3', 'Ab3', 'A4'],
  ['Db3', 'E3', 'Ab3', null],
  ['Db3', 'E3', 'Ab3', 'B4'],
  ['Db3', 'E3', 'Ab3', null],
  ['Db3', 'E3', 'Ab3', 'Db5'],
  ['Db3', 'E3', 'Ab3', null],
  ['Db3', 'E3', 'Ab3', 'B4'],
  ['Db3', 'E3', 'Ab3', null],
  ['D3', 'F#3', 'A3', 'A4'],
  ['D3', 'F#3', 'A3', null],
  ['D3', 'F#3', 'A3', null],
  ['D3', 'F#3', 'A3', 'B4'],
  ['D3', 'F#3', 'A3', 'Db5'],
  ['D3', 'F#3', 'A3', null],
  ['D3', 'F#3', 'A3', null],
  ['D3', 'F#3', 'A3', 'B4'],
  ['B2', 'D3', 'F#3', 'Db5'],
  ['B2', 'D3', 'F#3', 'E5'],
  ['B2', 'D3', 'F#3', 'Db5'],
  ['B2', 'D3', 'F#3', 'B4'],
  ['B2', 'D3', 'F#3', 'A4'],
  ['B2', 'D3', 'F#3', 'F#4'],
  ['B2', 'D3', 'F#3', 'A4'],
  ['B2', 'D3', 'F#3', 'F#4'],
  ['Db3', 'F#3', 'A3', 'A4'],
  ['Db3', 'F#3', 'A3', 'F#4'],
  ['Db3', 'F#3', 'A3', 'A4'],
  ['Db3', 'F#3', 'A3', 'F#4'],
  ['Db3', 'F#3', 'A3', 'A4'],
  ['Db3', 'F#3', 'A3', 'F#4'],
  ['Db3', 'F#3', 'A3', 'A4'],
  ['Db3', 'F#3', 'A3', 'F#4'],
  [null, null, null, 'A4'],
  [null, null, null, 'F#4'],
  [null, null, null, 'A4'],
  [null, null, null, 'F#4'],
  [null, null, null, 'A4'],
  [null, null, null, 'F#4'],
  [null, null, null, 'A4'],
  [null, null, null, 'F#4'],
  ['D3', 'F#3', 'A3', 'A4'],
  [null, null, null, 'F#4'],
  [null, null, null, 'A4'],
  [null, null, null, 'F#4'],
  [null, null, null, 'A4'],
  [null, null, null, 'F#4'],
  ['D3', 'F#3', 'A3', 'A4'],
  [null, null, null, 'F#4']
]

let notesBeat = [
  ['Db3', 'D3', 'F3', 'Db5'],
  [null, null, 'A#3', null],
  ['D3', 'F#3', 'B5', null]
]

function pluckSynth() {
  return new Tone.PluckSynth({
    attackNoise: 0.1,
    dampening: 1500,
    resonance: 0.9
  })
}

function metalSynth() {
  return new Tone.MetalSynth({
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
  })
}

function polySynth() {
  return new Tone.PolySynth(3, Tone.Synth, {
    oscillator: {
      type: 'sine',
      count: 13,
      spread: 7,
      phase: 5,
      fadeIn: 6
    },
    envelope: {
      attack: 0.9,
      decay: 1,
      sustain: 1,
      release: 3,
      attackCurve: 'sine'
    }
  })
}

function notesSynth() {
  return new Tone.PolySynth(1, Tone.Synth, {
    oscillator: {
      type: 'sawtooth',
      count: 2,
      spread: 7,
      phase: 3,
      fadeIn: 5,
      frequency: 3500,
      detune: 0,
      partialCount: 3
    },
    envelope: {
      attack: 0.1,
      decay: 1,
      sustain: 1,
      release: 5,
      attackCurve: 'bounce'
    }
  })
}

function noiseSynth() {
  return new Tone.NoiseSynth({
    noiseSynth: {
      type: 'brown'
    },
    envelope: {
      attack: 1.5,
      decay: 0.01,
      sustain: 1
    }
  })
}

function membraneSynth() {
  return new Tone.MembraneSynth({
    pitchDecay: 0.05,
    octaves: 10,
    oscillator: {
      type: 'sine'
    },
    envelope: {
      attack: 0.001,
      decay: 0.4,
      sustain: 0.01,
      release: 1.4,
      attackCurve: 'exponential'
    }
  })
}

export {
  metalSynth,
  pluckSynth,
  polySynth,
  notesSynth,
  membraneSynth,
  noiseSynth,
  notes,
  notesBeat
}
