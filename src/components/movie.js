import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export class Movie extends Component {
    static propTypes = {
        id: PropTypes.string,
        title: PropTypes.string,
        year: PropTypes.string,
        poster: PropTypes.string,
        type: PropTypes.string
    }

    render() {
        const { id, poster, title, year, type } = this.props
        return (
                <Link to={`/detail/${id}`} className="card">
                    <div className="card-image">
                        <figure className="image">
                            <img  
                            alt={title}  
                            src={poster}
                            />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media-content">
                            <p className="title is-4">{title}</p>
                            <p className="subtitle is-6">{type}</p>
                            <p className="subtitle is-6">{year}</p>
                        </div>
                    </div>       
                </Link>
            );
            }
            }
