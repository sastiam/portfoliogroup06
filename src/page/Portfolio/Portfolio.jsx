import React from 'react'
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import GridContainer from '../../containers/GridContainer';


function Portfolio() {
    return (
        <GridContainer>
            <Navbar />
            <Header />
            <h1>Portfolio</h1>
        </GridContainer>
    )
}

export default Portfolio
