import React from 'react';

class Heading extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h2 className="text-center">{this.props.title}</h2>
      </div>
    );
  }
}

Heading.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default Heading;
