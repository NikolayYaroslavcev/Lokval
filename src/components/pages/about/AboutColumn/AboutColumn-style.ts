import styled from "styled-components";



export const AboutColumnWrapper = styled.section`
  width: 100%;
  background-size: cover;
  height: 60vh;
  display: flex;
  align-items: flex-end;
`

export const AboutFlex = styled.div`
  display: flex;
  margin-bottom: 50px;

  h1 {
    font-weight: 700;
    line-height: 64px;
    color: #FFFFFF;
    margin-bottom: 10px;
    font-size: calc(30px + 18 * (100vw / 1270));
    @media (max-width: 767px) {
      font-size: calc(30px + (30 + 18 * 0.7) * ((100vw - 320px) / 1270));
    }
  }

  p {
    width: 562px;
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    color: #FFFFFF;
    @media (max-width: 768.98px) {
      width: 100%;
    }

  }
`
