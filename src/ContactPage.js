import React, { useState, useEffect } from 'react';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import './Styles.css';
import backgroundImage from './images/background.jpg';
import { useNavigate } from 'react-router-dom';

const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: '100vh',
}

export default function ContactPage() {
    let navigate = useNavigate();

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Backspace') {
                navigate('/');
            };
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);



    return (
        <div style={backgroundStyle}>
            <div className="page-container">
                <div className="header">
                    <h1 className="title"> Contact Us </h1>
                </div>
                <h2> Send us an email at <a style={{ color: 'white' }} href="mailto:contact@starlight-games.com"> contact@starlight-games.com </a> </h2>
                <div className="footer">
                    <div className="item">
                        <Link sx={{ color: '#fff' }} component={RouterLink} to="/">Back</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
