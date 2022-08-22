import { Component, createRef } from 'react';

export class Button extends Component {
  constructor(props) {
    super(props);
    this.interval = null;
    this.state = {
      count: this.props.count,
    };
    this.myRef = createRef();
  }

  componentDidMount() {
    console.log('button did mount');
    // this.interval = setInterval(() => console.log(1), 1000)
    // this.myRef.current.addEventListener('click', () => {
    //   console.log('click')
    // })
  }

  componentDidUpdate(nextProps, nextState, snapshot) {
    console.log('button did update', snapshot);
  }

  componentWillUnmount() {
    console.log('button will unmount');
    clearInterval(this.interval);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.count !== this.props.count) {
  //     return true
  //   }

  //   return false
  // }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.count < 5) {
      console.log('next props', nextProps.count);
      return { count: nextProps.count };
    }

    return null;
  }

  // getSnapshotBeforeUpdate() {
  //   return { value: 999 }
  // }

  render() {
    return (
      <>
        <p ref={this.myRef}>{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +1
        </button>
      </>
    );
  }
}
