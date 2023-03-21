import styled from "styled-components";

export const GuaranteeBlockWrapper = styled.div`
  max-width: 377px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  color: #FFFFFF;
  text-align: center;
  font-weight: 700;
  margin: 0 auto;
  @media (max-width: 934px) {
    gap: 5px;
  }

  h2 {
    padding: 20px;
    gap: 10px;
    width: 377px;
    height: 67px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    font-size: 20px;
    line-height: 27px;
    margin: 0;
    @media (max-width: 414.98px) {
      width: 100%;
    }
    @media (max-width: 375.98px) {
      padding: 17px 0 0 0 ;
    }
  }

  p {
    font-size: 16px;
    line-height: 21px;
  }
`