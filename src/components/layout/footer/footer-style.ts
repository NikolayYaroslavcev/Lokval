import styled from "styled-components";

export const FooterWrapper = styled.footer`
  min-height: 174px;
  background: #591214;
`

export const FooterBlock = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 34px 0;
  @media (max-width: 932.98px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    
  }
`

export const StonesBlock = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    gap: 12px;
    @media (max-width: 425.98px) {
     flex-direction: column;
      text-align: center;
    }
    @media (max-width: 932.98px) {
    }
  }

  a {
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    color: #FFFFFF;
    transition: all 0.3s;

    :hover {
      //color: #591214
    }
  }
`
export const LocationBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;

  @media (max-width: 932.98px) {
    gap: 15px;
  }

  div {
    display: flex;
    gap: 25px;
    align-items: center;
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    color: #FFFFFF;
    @media (max-width: 425.98px) {
      flex-direction: column;
      gap: 10px;
    }
  }
`
export const SocialBlock = styled.div`
display: flex;
flex-direction: column;
  gap: 41.31px;
  @media (max-width: 932.98px) {
    gap: 15px;
  }
`
export const SocialFooterBlock = styled.div`
  padding: 10px 15px;
  display: flex;
  gap: 34px;
  align-items: center;
  flex-wrap: wrap;
  list-style-type: none;

  @media (max-width: 948.98px) {
    width: 100%;
    justify-content: space-between;
  }
  @media (max-width: 410.98px) {
    justify-content: center;
  }
  

  img {
    transition: all .2s ease-in;

    &:hover {
      transform: scale(1.05);
    }

  }
  a {
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    text-transform: lowercase;
    color: #fff;
  }
`
export const SocialFooterContact = styled.div`
display: flex;
gap: 29.5px;
  @media (max-width: 948.98px) {
    justify-content: center;
  }
`
