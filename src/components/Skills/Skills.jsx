import React from 'react'
import Card from '../Card';
import WrapperSkills from './WrapperSkills';


function Skills() {
    return (
        <WrapperSkills>
            <Card id="1" key={1}/>
            <Card id="2" key={2}/>
            <Card id="3" key={3}/>
            <Card id="4" key={4}/>
            <Card id="5" key={5}/>
            <Card id="6" key={6}/>
        </WrapperSkills>
    )
}

export default Skills;
