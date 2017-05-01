import React from 'react'
import MovieList from './MovieList.jsx'

class MovieBox extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      data: [ {id: 1, title: "Guardians of the Galaxy vol II"}, {id: 2, title: "3 Generations"}, {id: 3, title: "The Lovers"}, {id: 4, title: "The dinner"}, {id: 5, title: "Mr Chibbs"}  ]
    }
  }

  render(){
    return(
      <div className="movie-box">
      <MovieList data={this.state.data}/>
      </div>
      )
  }
}

export default MovieBox