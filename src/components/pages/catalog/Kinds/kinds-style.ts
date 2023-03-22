import styled from "styled-components";

export const KindsWrapper = styled.section`

`

export const KindsBlockWrap = styled.div`
    
`

export const KindsCartTitle = styled.h2`
  font-weight: 700;
  line-height: 48px;
  color: #000000;
  margin-bottom: 34px;
  text-align: center;
  font-size: calc(25px + 11 * (100vw / 1270));
  @media(max-width: 767px) {
    font-size: calc(25px + (25 + 11 * 0.7) * ((100vw - 320px) / 1270));
  }


`
export const KindsCartAbout = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 34px 26px;
  margin-bottom: 100px;
  justify-content: space-between;


  @media (max-width: 1220.98px) {
    justify-content: space-evenly;
  }
  @media (max-width: 768.98px) {
    margin-bottom: 20px;
  }
`


export const KindsCartBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const KindsCart = styled.div`
  background-size: cover;
  cursor: pointer;
  width: 275px;
  height: 275px;
  display: flex;
  //flex: 0 0 275px;
`

export const KindsCartSubTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: #000000;
  max-width: 216px;
  align-self: center;
`
