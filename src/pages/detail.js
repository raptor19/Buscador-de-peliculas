import React, { Component } from 'react';
import PropTypes from 'prop-types';

const API_KEY = 'e4a7f8e9'

export class Detail extends Component {
    static propTypes = {
        match: PropTypes.shape({
        params: PropTypes.object,
        isExact: PropTypes.bool,
        path: PropTypes.string,
        url: PropTypes.string
        })
    }

    state = { movie: {}}

    // Este metodo trae el detalle de una pelicula a partir de su id
    fetchMovieDetail ({ id }) {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(response => response.json())
        .then(movie => {
            console.log(movie);
            this.setState({ movie })
        });
    }
    _goBack(){
        console.log("eeentro back")
    }

    // Este metodo se ejecuta justo despues de un renderizado almenos
    componentDidMount() {
        const { id } = this.props
        this.fetchMovieDetail({ id })
    }

    render () {
        const { Title, Poster, Actors, Metascore, Plot } = this.state.movie
        return(
            <div>
                <button onClick={this._goBack()}>Volver</button>
                <h1>{Title}</h1>
                <img src={Poster} alt=""/>
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
            </div>
        );
    }
}