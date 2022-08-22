import { Component } from 'react';

export class Input extends Component {
  componentDidUpdate() {
    console.log('input did update');
  }

  render() {
    return (
      <input
        type="text"
        value={this.props.value}
        onChange={this.props.change}
      />
    );
  }
}
