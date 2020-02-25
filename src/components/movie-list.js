import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Movie } from './movie';
import '../pages/styles/home.css'

export class MovieList extends Component {
    static propTypes = {
        movies: PropTypes.array
    }
    render() {
        const { movies } = this.props
        return(
        <div className="home-results">
            {
                movies.map(movie => {
                    return (
                        <div key={movie.imdbID}>
                            <Movie
                                id={movie.imdbID}
                                title={movie.Title}
                                type={movie.Type}
                                year={movie.Year}
                                poster={movie.Poster}
                            />
                        </div>
                    )
                })
            }
        </div>
      )    
    }
}