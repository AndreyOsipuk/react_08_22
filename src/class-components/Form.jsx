import React from 'react'

export class Form extends React.Component {
  state = {
    count: 1,
    name: 'geekbrains',
    arr: ['ivanov', 'petrov', 'sidorov']
  }

  handleChangeName = (ev) => {
    this.setState({ name: ev.target.value })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
      {this.state.arr.map((item, idx) => {
        return <div key={idx}>{item}</div>
      })}
      <input type="text" onChange={this.handleChangeName} name="login" />
      <input type="text" name="password" />
      <button>send form</button>
    </form>
  }
}