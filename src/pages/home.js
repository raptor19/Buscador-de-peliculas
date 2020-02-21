import React, { Component } from 'react';
import {Titulo} from '../components/titulo'; 
import { Formulariobusqueda } from '../components/formulario-busqueda'
import { MovieList } from '../components/movie-list'

export class Home extends Component {

    state = { usedSearch: false, results: [] }

    handleResults = (results) => {
        this.setState({ results, usedSearch: true });
    }

    renderResults() {
        return this.state.results.length === 0
            ? <p>No se encontraron Resultados</p>
            : <MovieList movies={this.state.results} />
    }

    render() {
        return (
            <div>
                <header className="App-header">
                    <Titulo>App Peliculas</Titulo>
                    <div className="search-form">
                        <Formulariobusqueda onResults={this.handleResults}></Formulariobusqueda>
                    </div>
                    {this.state.usedSearch
                        ? this.renderResults()
                        : <small>Use el formulario para buscar una pelicula</small>}
                </header>
            </div>
        );
    }
}