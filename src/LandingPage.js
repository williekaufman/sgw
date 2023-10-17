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

export default function LandingPage() {
    return (
        <div style={backgroundStyle}>
            <div className="page-container">
                <div className="header">
                    <h1 className="title">Starlight Games</h1>
                </div>
                <div>
                    <p>We're making a mobile-focused auto battler or something</p>
                </div>
                <div className="footer">
                    <div className="item">
                        <Link sx={{ color: '#fff' }} component={RouterLink} to="/contact">Contact Us</Link>
                    </div>
                    <div className="item">
                        <Link sx={{ color: '#fff' }} component={RouterLink} to="/jobs">Jobs</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}