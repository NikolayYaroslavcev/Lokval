import styled from 'styled-components';

export const StoneBackgroundBg = styled.div`
  background: url("/images/stone/bacStone.png") no-repeat center;
  width: 100%;
  background-size: cover;
  height: 60vh;
  display: flex;
  align-items: flex-end;

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
