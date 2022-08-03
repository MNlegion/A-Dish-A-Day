import React from 'react';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import Header from '../../components/Header';

function Landing() {

    return(
        <section className='landing-container'>
            <Paper className='landing-hero' elevation={3}>
                <Header></Header>
                <h1>for independent recipe writers <br /> & home chefs</h1>
                <Link to="/login">
                    <Button variant='contained'>Login</Button>
                </Link>
                <Link to="/signup">Don't have an account? Sign Up</Link>
            </Paper>
        </section>

    )
};

export default Landing;