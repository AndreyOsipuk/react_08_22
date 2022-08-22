import { Component } from 'react';
import { Button } from './Button';
import { Input } from './input';

export class Form extends Component {
  state = {
    visible: true,
    count: 0,
    name: 'click',
  };

  componentDidMount() {
    console.log('did mount form');
  }

  handleVisible = () => {
    this.setState({ visible: !this.state.visible });
  };

  handleChangeName = (ev) => {
    this.setState({ name: ev.target.value });
  };

  handleChangeCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <h3>Parent component</h3>
        <button onClick={this.handleVisible}>
          {this.state.visible ? 'hide' : 'visible'}
        </button>
        <br />
        <p>{this.state.count}</p>
        <button onClick={this.handleChangeCount}>count + 1</button>
        <h3>Child components</h3>
        {this.state.visible && <Button count={this.state.count} />}
        <br />
        <p>Name: {this.state.name}</p>
        <Input value={this.state.name} change={this.handleChangeName} />
      </>
    );
  }
}
