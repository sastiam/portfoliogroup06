import React from 'react'
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import Skills from '../../components/Skills';
import GridContainer from '../../containers/GridContainer';

export default function Home() {
    return (
        <GridContainer>
            <Navbar />
            <Header />
            <Skills />
            <h1>Home</h1>
        </GridContainer>
    )
}
