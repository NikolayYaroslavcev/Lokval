import styled from "styled-components";

export const GuaranteeWrapper = styled.section`
  background: url("/images/guarantee.png") no-repeat center;
  width: 100%;
  border-radius: 5px;
  background-size: cover;
`

export const GuaranteeContainer = styled.div`
  padding-bottom: 52px;
`
export const GuaranteeTitle = styled.h2`
  display: flex;
  justify-content: center;
  font-weight: 700;
  font-size: 36px;
  line-height: 48px;
  color: #FFFFFF;
  padding-top: 29px;
  margin-bottom: 34px;
  @media (max-width: 320.98px) {
    font-size: 34px;
  }
`
export const GuaranteeBlockItems = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 126px;
  grid-row-gap: 34px;
  @media (max-width: 934px) {
    grid-column-gap: 15px;
    grid-row-gap: 15px;
  }
  
  @media (max-width: 802px) {
    grid-column-gap: 30px;
    grid-row-gap: 15px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
  }
`
