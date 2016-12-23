import React, { Component, PropTypes } from 'react';

import '../css/zest.css';


class Zest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animClasses: 'zesty'
    };
  }

  handleClick() {
    this.setState({ animClasses: 'zesty animate' });

    setTimeout(() => {
      this.setState({ animClasses: 'zesty' })
    }, 500);
  }

  render() {
    return (
      <span onClick={() => this.handleClick()} className={this.state.animClasses}>
        {this.props.children}
      </span>
    );
  };
}

Zest.propTypes = {
  name: PropTypes.string
}

export default Zest;
