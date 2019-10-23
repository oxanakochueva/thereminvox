import _ from 'lodash'
import React from 'react'

export default class Knob extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mouseDown: false,
      value: props.value,
      deg: -90,
      screenY: 0
    }

    _.bindAll(
      this,
      'componentDidMount',
      'handleMouseMove',
      'handleMouseDown',
      'handleMouseUp',
      'moveKnob',
      'calculateDeg'
    )
  }

  componentDidMount() {
    const { value } = this.props
    const deg = this.calculateDeg(value)

    this.setState({
      mouseDown: false,
      value: value,
      deg: -90 + deg,
      screenY: 0
    })

    document.addEventListener('mouseup', this.handleMouseUp)
    document.addEventListener('mousemove', this.handleMouseMove)
  }

  handleMouseDown(e) {
    e.preventDefault()

    this.setState({
      mouseDown: true,
      screenY: e.screenY
    })
  }

  handleMouseMove(e) {
    // const { mouseDown } = this.props
    // ??
    const { mouseDown } = this.state

    if (mouseDown) {
      this.moveKnob(e.screenY)
    }
  }

  handleMouseUp() {
    const { name, handleMouseUp } = this.props
    // const { mouseDown } = this.state
    if (this.state.mouseDown) {
      // if (mouseDown) {
      // handleMouseUp(name)

      this.setState({
        mouseDown: false
      })
    }
  }

  // moveKnob(screenY) {
  //   const min = parseInt(this.props.min)
  //   const max = parseInt(this.props.max)
  //   const oldScreenY = this.state.screenY
  //   const { deg } = this.state
  //   const difference = screenY - oldScreenY
  //   let { value } = this.state
  //   // let { handleValueChange } = this.props
  //
  //   console.log(min, max, oldScreenY, deg, difference, value)
  //
  //   value += difference
  //
  //   if (value < min) {
  //     value = min
  //   } else if (value > max) {
  //     value = max
  //   }

  moveKnob(screenY) {
    const { name, min, max, handleValueChange } = this.props
    const minimum = parseInt(min)
    const maximum = parseInt(max)
    const oldScreenY = this.state.screenY
    const { deg } = this.state
    const difference = screenY - oldScreenY
    let { value } = this.state

    value += difference

    if (value < minimum) {
      value = minimum
    } else if (value > maximum) {
      value = maximum
    }

    handleValueChange(name, value)

    // this.props.handleValueChange(effectName, effectProperty, value)

    this.setState({
      screenY: screenY,
      value: value,
      deg: -90 + this.calculateDeg(value)
    })
  }

  calculateDeg(value) {
    const { max } = this.props
    const coef = 120 / max
    const deg = value * coef

    return deg
  }

  render() {
    const { deg } = this.state

    const style = {
      transform: `rotate(${-deg}deg)`
    }

    return (
      <div className="KnobContainer">
        <div
          className="Knob"
          style={style}
          onMouseDown={this.handleMouseDown}
          onMouseMove={this.handleMouseMove}
        />
      </div>
    )
  }
}
