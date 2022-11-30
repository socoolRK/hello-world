import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'
class ComponentE extends Component {

    static contextType = UserContext
  render() {
    return (
        <h1>
            ComponentE context {this.context}
            <ComponentF />
        </h1>
    )
  }
}

// ComponentE.contextType = UserContext
export default ComponentE
