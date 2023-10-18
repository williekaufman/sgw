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

function Job({
    name,
    description,
}) {
    return (
        <div className="job">
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    )
}

export default function JobsPage() {
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


    let jobs = {
        "Unity": "Do Unity stuff",
        "Marketing": "Do marketing stuff",
        "Wizard": "Do magic",
        "Janitor": "Clean stuff",
    }
    return (
        <div style={backgroundStyle}>
            <div className="page-container">
                <div className="header">
                    <h1 className="title"> We're looking for </h1>
                </div>
                <h2> Interested? Send us an email at <a style={{ color: 'white' }} href="mailto:jobs@starlight-games.com"> jobs@starlight-games.com </a> </h2>
                {Object.keys(jobs).map((job) => {
                    return (
                        <Job name={job} description={jobs[job]} />
                    )
                })}
                <div className="footer">
                    <div className="item">
                        <Link sx={{ color: '#fff' }} component={RouterLink} to="/">Back</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
