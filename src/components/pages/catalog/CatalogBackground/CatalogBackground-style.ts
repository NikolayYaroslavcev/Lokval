import styled from "styled-components";

export const CatalogBackgroundWrapper = styled.section`
  background: url("/images/catalog/catalogBg.png") no-repeat center;
  width: 100%;
  background-size: cover;
  height: 60vh;
  display: flex;
  align-items: flex-end;
  margin-bottom: 100px;
  @media (max-width: 768.98px) {
    margin-bottom: 20px;
  }
`
export const CatalogBackgroundFlex = styled.div`
  display: flex;
  justify-content: right;
  margin-bottom: 60px;
  
  h1 {
    font-weight: 700;
    line-height: 64px;
    color: #FFFFFF;
    font-size: calc(30px + 18 * (100vw / 1270));
    @media (max-width: 767px) {
      font-size: calc(30px + (30 + 18 * 0.7) * ((100vw - 320px) / 1270));
    }
  }

`
