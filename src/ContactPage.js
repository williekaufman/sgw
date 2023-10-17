import React, { useState, useEffect } from 'react';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import './Styles.css';
import backgroundImage from './images/background.jpg';

const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: '100vh',
}

export default function ContactPage() {
    return (
        <div style={backgroundStyle}>
            <div className="page-container">
                <p> Send us an email at <a href="mailto:support@starlight-games.com"> support@starlight-games.com </a> </p>
            </div>
        </div>
    )
}
