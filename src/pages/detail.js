import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonBackToHome } from '../components/button-back';
import '../pages/styles/detail.css'

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

    state = { movie: {} }

    // Este metodo trae el detalle de una pelicula a partir de su id
    fetchMovieDetail({ id }) {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(response => response.json())
            .then(movie => {
                console.log(movie);
                this.setState({ movie })
            });
    }
    _goBack() {
        console.log("eeentro back")
    }

    // Este metodo se ejecuta justo despues de un renderizado almenos
    componentDidMount() {
        const { id } = this.props.match.params
        this.fetchMovieDetail({ id })
    }

    render() {
        const { Title, Poster, Actors, Country, Released, Type, imdbRating } = this.state.movie
        return (
            <div className="detail">
                <div className="detail-card">
                    <div className="detail-column detail-column-img">
                        <img src={Poster} alt={Title} className="detail-poster detail-poster-blured" />
                        <img src={Poster} alt={Title} className="detail-poster" />
                    </div>
                    <div className="detail-column detail-description">
                        <h2 className="detail-title title">{Title}</h2>
                        <div className="tags">
                            <p className="tag is-rounded">{Released}</p>
                            <p className="tag is-rounded">{Country}</p>
                            <p className="tag is-rounded">{Type}</p>
                        </div>
                        <p>
                            <strong>IMDB Rating:</strong> <span className="tag is-warning"><i className="fas fa-star detail-star"></i> {imdbRating}</span>
                        </p>
                        <p>
                            <strong>Actors:</strong>
                            <br />
                            {Actors}
                        </p>
                        <div className="detail-footer">
                            <ButtonBackToHome />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}