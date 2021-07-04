import React from 'react'
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import GridContainer from '../../containers/GridContainer';

function About() {
    return (
        <GridContainer>
            <Navbar />
            <Header />
            <h1>About</h1>
        </GridContainer>
    )
}

export default About
