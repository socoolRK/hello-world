import React, { Component } from 'react'

class RefsDemo extends Component {
  constructor(props) {
    super(props)
    this.inputref = React.createRef()
    this.cbRef = null
    this.setCbRef = element => {
      this.cbRef = element
    }
  }

  componentDidMount() {
    if(this.cbRef) {
      this.cbRef.focus()
    }
    // this.inputref.current.focus()
    // console.log(this.inputref)
  }
  
  clickHandler = () => {
    alert(this.inputref.current.value)
  }
  render() {
    return (
      <div>
        <input type='text' ref={this.inputref} />
        <input type='text' ref={this.setCbRef} />
        <button onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}

export default RefsDemo
