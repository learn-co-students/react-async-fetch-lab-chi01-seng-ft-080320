import React, { Component } from 'react'

class App extends Component {

  state = {
    peopleInSpace: []
  }

  componentDidMount = () => {
    fetch('http://api.open-notify.org/astros.json')
      .then(res => res.json())
      .then(astronauts => this.setState({
          peopleInSpace: astronauts.people
      }) );
  }

  renderAstroLis = () => {
    return this.state.peopleInSpace.map((astronaut, id) => 
      (<li key={id}>{`${astronaut.name} | Craft: ${astronaut.craft}`}</li>)
     )
  }

  render() {
    return (
      <div>
        <h5>Astronauts In Space Now</h5>
        <ul>
          {this.renderAstroLis()}
        </ul>
      </div>
    )
  }
}

export default App