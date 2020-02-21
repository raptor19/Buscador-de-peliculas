/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

const API_KEY = 'e4a7f8e9'

export class Formulariobusqueda extends Component {
    state = { inputMovie: '' }

    // Metodos

    handleChange = (e) => {
        this.setState({ inputMovie: e.target.value })
    }

    // Este metodo trae las peliculas de la api 

    handleSubmit = (e) => {
        e.preventDefault()
        const { inputMovie } = this.state
        // eslint-disable-next-line no-template-curly-in-string
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const { Search = [] , totalResults = "0" } = data
                console.log({ Search , totalResults })
                this.props.onResults(Search) 
            });
    }

    render() {
    return (
        <form action="" onSubmit={this.handleSubmit}>
            <div className="field has-addons">
                <div className="control">
                    <input className="input"
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Pelicula a buscar" />
                </div>
                <div className="control">
                    <button className="button is-info">
                        Buscar
                </button>
                </div>
            </div>
        </form>
    );
    }
}

