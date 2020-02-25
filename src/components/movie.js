import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../pages/styles/movie.css'


export class Movie extends Component {
    static propTypes = {
        id: PropTypes.string,
        title: PropTypes.string,
        year: PropTypes.string,
        poster: PropTypes.string,
        type: PropTypes.string
    }
    

    render() {

        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
          };

        const { id, poster, title,  type, year } = this.props
        return (
            <Link to={`/detail/${id}`} className="home-movie">
                <img
                    className="home-movieImg"
                    alt={title}
                    src={poster} />
                <div>
                    <p style={mystyle}>
                    {type} - {year}
                    </p>
                </div>
            </Link>
        );
    }
}
