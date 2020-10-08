// create your App component here
import React from 'react'

class App extends React.Component {
    constructor() {
        super()
        this.state ={
            people: 0
        }
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(response => {
            this.setState({
                people : response.number
            })
        });
    }

    render() {
        return (
        <div>People in space: {this.state.people}</div>
        )
    }
}

export default App