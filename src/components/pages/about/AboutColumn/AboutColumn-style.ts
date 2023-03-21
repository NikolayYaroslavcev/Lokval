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
    font-size: 48px;
    line-height: 64px;
    color: #FFFFFF;
    margin-bottom: 10px;
  }

  p {
    width: 562px;
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    color: #FFFFFF;
    @media (max-width: 768.98px) {
      width:100%;
    }
    
  }
`