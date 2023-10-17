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
