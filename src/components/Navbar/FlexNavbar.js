import styled from 'styled-components';

const FlexNav = styled.div`
    align-items: center;
    
    display: flex;
    font-size: 1.3rem;
    flex-wrap: nowrap;
    justify-content: flex-end;
    margin: .5rem 1.5rem;

    .link {
        margin: 0 5px;
        color: #f1f2f6;
        text-decoration: none;
    }
    .active {
        background-color: #70a1ff;
    }
`

export default FlexNav;