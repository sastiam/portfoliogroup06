import styled from 'styled-components';

const StyledHeader = styled.div`
    display: inline-grid;
    height: 500px;
    grid-template-columns: 1fr 1fr;

    .box {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .box img {
        width: 250px;
        height: 200px;
    }
`;

export default StyledHeader;