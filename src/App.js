import React, { Component } from 'react'
import Person from './Person/Person'
import './App.css'

// const app = () => {
//   return (
//     <div className="App">
//       <h1> Hello React!! </h1>
//     </div>
//   )
// }

// export default app

class App extends Component {
  state = {
    persons: [
      { name: "Dorra", age: "21" },
      { name: "Ons", age: "17" }
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: "Firas", age: "14" },
        { name: "Mustapha", age: "13" }
      ]
    }
    )
  }
  render() {
    return (
      <div className="App">
        <h1>
          Hello React !!
        </h1>
        <button onClick={this.switchNameHandler}>
          Switch Name
        </button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>
          My hobby is reading books
        </Person>
      </div>
    )
  }
}

export default App