import { Component } from 'react';

export class Count extends Component {
  state = {
    count: 1,
  }

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }))
  }


  render() {
    return <>
      <p>Count props: {this.props.count}</p>
      <p>Count state: {this.state.count}</p>
      <button type="button" onClick={this.handleClick}>click</button>
    </>
  }
}