import styled from "styled-components";
import breakpoint from "../../common/breakpoint";

const WrapperSkills = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    background-color: #2d3436;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    // height: 450px;
    padding: 0.5rem;
  }
  @media only screen and ${breakpoint.device.sm} {
    background-color: #2d3436;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    // height: 450px;
    padding: 0.5rem;
  }
  @media only screen and ${breakpoint.device.lg} {
    background-color: #2d3436;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    height: 450px;
    padding: 0.5rem;
  }
`;

export default WrapperSkills;
