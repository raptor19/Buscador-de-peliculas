import React, { Component } from 'react';
import { Titulo } from '../components/titulo';
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
    // Guardo en sesion la busqueda realizada cuando se monta el componente
    

    render() {
        return (
            <section className="home">
                <div className="home-container">
                    <div className="home-form">
                        <Titulo>Buscador de Peliculas</Titulo>
                        <Formulariobusqueda onResults={this.handleResults}></Formulariobusqueda>
                    </div>

                    <div className="home-description">
                        { /*si el usuario ingreso el texto de una pelicula a buscar entonces se renderizan los*/}
                        {
                            this.state.usedSearch
                                ? this.renderResults()
                                : <h6>Podes buscar peliculas,series y Videojuegos</h6>
                        }
                    </div>

                    <div className="home-credits">
                        <p><i>
                            Aplicacion construida con ReactJS
                        </i></p>
                        <small>Desarrollador: Almiron Cristian</small>
                       
                    </div>

                </div>
            </section>
        );
    }
}