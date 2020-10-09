import React from 'react'

export default class App extends React.Component {

    constructor(){
        super()
        this.state = {
            astronauts: []
        }
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(info => info.json())
        .then(astros => {
            this.setState({astronauts: astros.people})
        })
    }
    render(){
        return(
           <p> {this.state.astronauts.map(astro => astro.name)} </p>
        )
    }
}