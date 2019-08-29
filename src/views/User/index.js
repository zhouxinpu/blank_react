import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'

@connect((state) => ({ num: state.user.num }), null)
class User extends Component {
  render() {
    return (
      <div>
        {this.props.num}
        <br />
        <br />
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">Link</Button>
      </div>
    )
  }
}

export default User