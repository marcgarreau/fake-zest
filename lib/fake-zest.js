import React, { Component, PropTypes } from 'react';


class Zest extends Component {
  render() {
    return (
      <div>
        <h1 className="some-component__title">Hello, {this.props.name}!</h1>
      </div>
    );
  };
}

Zest.propTypes = {
  name: PropTypes.string
}

export default Zest;
