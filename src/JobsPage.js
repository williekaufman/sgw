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
        "Example Job 1": "This is an example job description",
        "Example Job 2": "This is another example job description",
        "Example Job 3": "This is a third example job description",
    }
    return (
        <div style={backgroundStyle}>
            <div className="page-container">
                {Object.keys(jobs).map((job) => {
                    return (
                        <Job name={job} description={jobs[job]} />
                    )
                })}
            </div>
        </div>
    )
}
