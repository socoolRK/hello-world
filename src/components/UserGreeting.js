import React, { Component } from 'react'

class UserGreeting extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: true
    }
  }

  render() {

    return this.state.isLoggedIn && <div>Welcome ravindra</div> //short circuit operator 

    // return
    // this.state.isLoggedIn ? (<div>Welcome ravindra</div>) :
    //   (<div>Welcome Guest</div>)                           // ternary operator method 


    // let Message                                
    // if (this.state.isLoggedIn) {
    //   Message = <div>Welcome ravindra</div>
    // }else {                                                //element variables
    //   Message = <div>Welcome Guest</div>
    // }

    // return Message                             
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome ravindra</div>
    // }else {                                              //normal if/else condition
    //   return <div>Welcome Guest</div>
    // }

    // return (
    //   <div>
    //     <div>Welcome ravindra</div>         
    //     <div>Welcome Guest</div>
    //   </div>
  }
}
export default UserGreeting
