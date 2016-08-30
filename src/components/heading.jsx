import React from 'react';

class Heading extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}

Heading.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default Heading;
