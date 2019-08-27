import React, { Component } from 'react'
import {connect} from 'react-redux'

@connect((state)=>({num:state.user.num}),null)
class User extends Component {
  render() {
    return (
      <div>
        {this.props.num}
      </div>
    )
  }
}

export default User