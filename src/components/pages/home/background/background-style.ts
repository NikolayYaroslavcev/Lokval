import styled from "styled-components";

interface Props {
    direction: string,
    justify: string,
    align: string,
}

export const BackgroundContainer = styled.section`
  background: url("/images/besedka.png") no-repeat center;
  width: 100%;
  background-size: cover;
  height: 60vh;
  display: flex;
  align-items: flex-end;
  //position: relative;

  h1 {
    max-width: 700px;
    font-weight: 700;
    line-height: 1.5;
    text-align: right;
    color: #FFFFFF;
    margin-bottom: 60px;
    font-size: calc(30px + 18 * (100vw / 1270));
    @media (max-width: 767px) {
      font-size: calc(30px + (30 + 18 * 0.7) * ((100vw - 320px) / 1270));
    }
  }
`

export const FlexContainer = styled.div<Props>`
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : ""};
  justify-content: ${props => props.justify ? props.justify : ""};
  align-items: ${props => props.align ? props.align : ""};
`
