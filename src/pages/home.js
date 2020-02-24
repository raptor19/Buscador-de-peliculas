import React, { Component } from 'react';
import {Titulo} from '../components/titulo'; 
import { Navbar } from '../components/navbar'
import { Formulariobusqueda } from '../components/formulario-busqueda'
import { MovieList } from '../components/movie-list'
import '../pages/styles/home.css'

export class Home extends Component {
    // state con arreglo para las peliculas y usedSearch para validar el ingreso
    state = { usedSearch: false, results: [] }

    handleResults = (results) => {
        this.setState({ results, usedSearch: true });
    }
// este metodo muestra la lista de peliculas si el state results tiene objetos
    renderResults() {
        console.log('movieResults', this.state.results);
        return this.state.results.length === 0
            ? <h6><span role="img" aria-label="sad face"> 😞 </span> Ingresa un valor valido</h6>
            : <MovieList movies={this.state.results} />
    }

    componentWillMount() {
        if ( window.sessionStorage.getItem('sessionMovies') !== null ) {
          const movieResults = JSON.parse(window.sessionStorage.getItem('sessionMovies'))
          this.setState({ movieResults, userSearch: true })
          this._renderResults()
        } else {
          window.sessionStorage.setItem('sessionMovies', [])
        }
    }

    render() {
        return (
            <div>
                <div className="App-header">
                    <Navbar/>
                    <Titulo>Buscador de Peliculas</Titulo>
                    <div className="search-form">
                        <Formulariobusqueda onResults={this.handleResults}></Formulariobusqueda>
                    </div>  
                    {this.state.usedSearch
                        ? this.renderResults()
                        : <small>Use el formulario para buscar una pelicula</small>}
                 
                </div>
            </div>
        );
    }
}