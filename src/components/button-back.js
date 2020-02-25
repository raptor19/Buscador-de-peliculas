import React from 'react';
import { Link } from 'react-router-dom';

export const ButtonBackToHome = () => (
    <Link
        className="button"
        to="/">
        <i className="fas fa-chevron-left" style={{marginRight: 6}}></i> Volver
    </Link>
)