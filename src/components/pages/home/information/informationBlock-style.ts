import styled from "styled-components";

export const InformationBlockItem = styled.div`
  display: flex;
  color: #FFFFFF;
  font-weight: 700;
  font-size: 40px;
  max-width: 307px;
  gap: 10px;
  align-items: center;

  
  img {
    width: 73px;
    height: 75px;
    @media (max-width: 820.98px) {
      display: none;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 5px;

    p {
      font-size: 20px;
      line-height: 164%;
    }

  }

`