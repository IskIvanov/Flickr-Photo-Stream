import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Author from './Author';

export default class Title extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <Author />
      </div>
    )
  }
}
