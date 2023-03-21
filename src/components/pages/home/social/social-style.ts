import styled from "styled-components";

export const SocialWrapper = styled.section`
  padding-top: 95px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 95px;
  gap: 15px;


  @media (max-width: 948.98px) {
    flex-wrap: wrap;
    width: 100%;
    padding-top: 25px;
    margin-bottom: 25px;
  }

`

export const SocialMedia = styled.div`
  border: 1px solid #1E1E1E;
  border-radius: 10px;
  @media (max-width: 948.98px) {
    display: flex;
    width: 100%;
  }
`
export const NumberBlock = styled.div`
  padding: 10px 15px;
  display: flex;
  gap: 27px;
  align-items: center;
  div{
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    @media (max-width:948.98px) {
      width: 100%;
      justify-content: space-around;
    }
    @media (max-width: 853.98px) {
      gap: 10px;
    }
    @media (max-width: 463px) {
      justify-content: center;
    }

  }

  a {
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    text-transform: lowercase;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #591214;
  }

  @media (max-width: 853.98px) {
    gap: 15px;
  }
  @media (max-width:948.98px) {
    width: 100%;
    justify-content: center;
  }

`

export const SocialMediaBlock = styled.ul`
  padding: 10px 15px;
  display: flex;
  gap: 34px;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width:948.98px) {
    width: 100%;
    justify-content: space-between;
  }
  @media (max-width:410.98px) {
    justify-content: center;
  }

  a {
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    text-transform: lowercase;
    color: #591214;
  }
  img {
    transition: all .2s ease-in;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 853.98px) {
    gap: 15px;
  }

`
