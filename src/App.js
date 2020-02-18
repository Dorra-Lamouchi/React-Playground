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
      { id: "aaa", name: "Dorra", age: "21" },
      { id: "bbb", name: "Ons", age: "17" },
      { id: "ccc", name: "Firas", age: "14" }
    ],
    showPersons: true
  }


  switchNameHandler = () => {
    const newPersons = [...this.state.persons];
    // newPersons[0].name = "Ahmed";
    this.setState({
      // persons: [
      //   { name: "Firas", age: "14" },
      //   { name: "Mustapha", age: "13" }
      // ]
      persons: newPersons
    }
    )
  }
  // changeNameHandler = (event, index) => {
  //   const newPersons = [... this.state.persons];
  //   newPersons[index].name = event.target.value
  //   this.setState({
  //     persons: newPersons
  //   }
  //   )
  // }
  changeNameHandler = (event, id) => {
    const newPersons = [...this.state.persons];
    const index = newPersons.findIndex((person) => {
      return person.id === id
    })
    newPersons[index].name = event.target.value
    this.setState({
      persons: newPersons
    }
    )
  }
  deleteNameHandler = (person) => {
    const newPersons = [...this.state.persons]
    const index = newPersons.indexOf(person)
    newPersons.splice(index, 1)
    this.setState({
      persons: newPersons
    }
    )
  }
  showPersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }
  render() {

    let personsComponents = null
    if (this.state.showPersons)
      personsComponents = (<div>
        {this.state.persons.map((person) => {
          return (
            <Person
              name={person.name}
              age={person.age}
              changed={(event) => { this.changeNameHandler(event, person.id) }}
              deleted={() => { this.deleteNameHandler(person) }}
              key={person.id}
            />
          )
        })}
        {/* méthode khayba lil react khtr les indices ynajmou ytbadlou w todkhol b3adhha
         {this.state.persons.map((person, index) => {
          return (
            <Person
              name={person.name}
              age={person.age}
              changed={(event) => { this.changeNameHandler(event, index) }}
              deleted={this.deleteNameHandler}
              key={index}
            />
          )
        })} */}

      </div>)

    return (
      <div className="App">
        <h1>
          Hello React !!
        </h1>
        <button onClick={this.switchNameHandler}>
          Switch Name
        </button>
        <button onClick={this.showPersonsHandler}>
          Toggle persons
        </button>
        {personsComponents}
      </div>
    )
  }
}

export default App