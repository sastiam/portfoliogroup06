import React from 'react'
import StyledCard from './StyledCard';

function Card(props) {
    return (
        <StyledCard>
            <h4>Card {props.id}</h4>
            <p>lorem ipsum dolor sit amet, consectetur</p>
        </StyledCard>
    )
}

export default Card;
