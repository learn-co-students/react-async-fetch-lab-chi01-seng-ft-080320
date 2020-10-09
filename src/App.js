// create your App component here
import React from 'react'

class App extends React.Component {
    constructor() {
        super()
    }

    state = {
        peopleInSpace: []
    }

    componentDidMount () {
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(data => {
            this.setState({
                peopleInSpace: data.people
            })
        })
    }

    render() {
        const names = this.state.peopleInSpace.map(person =>
            <p className='spacefolk'>{person.name}</p>);
        return(
            <div>
                <p>{names}</p>
            </div>
        )
    }
}

export default App