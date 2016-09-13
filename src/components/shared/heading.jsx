import React from 'react';

class Heading extends React.Component {
  render() {
    return (
      <div className="headertitle">
        <span className="text-center">{this.props.title}</span>
      </div>
    );
  }
}

Heading.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default Heading;
