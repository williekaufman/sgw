import React, { useState, useEffect } from 'react';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import './LandingPage.css';


export default function LandingPage() {
    return (
        <div className="container">
            <div>
                <h1 className="title">Starlight Games</h1>
            </div>
            <div>
                <p>We're making a mobile-focused auto battler or something</p>
            </div>
            <div className="footer">
                <Link component={RouterLink} to="/contact">Contact Us</Link>
                <Link component={RouterLink} to="/jobs">Jobs</Link>
            </div>
        </div>
    )
}