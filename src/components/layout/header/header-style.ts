import styled from 'styled-components';
import {PropsImageType} from '../../../assets/ImegeWrap';


export const HeaderStyle = styled.header`
  padding: 14px 30px;
  min-height: 58px;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  margin-bottom: 2rem;
  @media (max-width: 768.98px) {
    padding: 14px 9px;
  }

`

export const StyledContainer = styled.div`
  max-width: 1270px;
  box-sizing: content-box;
  margin: 0 auto;
  padding: 0 15px;
    width: 100%;
  //
  //@media (min-width: 1322.98px) {
  //  width: 100%;
  //}

`
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;

  a {
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    color: #FFFFFF;
    text-decoration: none;
    transition: all 0.3s;
    @media (min-width: 1086.98px) {
      :hover {
        color: #591214
      }
    }
  }
`


export const HeaderImage = styled.div<PropsImageType>`
  display: flex;
  position: relative;
  text-align: center;
  max-width: ${({width}) => width || '96px'};
  max-height: ${({height}) => height || '96px'};
  max-height: ${({height}) => height || '96px'};
  border-radius: ${({borderRadius}) => borderRadius || '100%'};
  transition: all 0.3s;

  :hover {
    scale: ${({hover}) => hover ? '1.1' : '1'};
  }

  img {
    width: 100%;
    z-index: 999;
    object-fit: cover;
    border-radius: ${({borderRadius}) => borderRadius || '0'};
    justify-content: center;
      //cursor: ${({cursor}) => cursor || 'auto'};
    cursor: pointer;
  }
`
export const Button = styled.button`
  background: linear-gradient(180deg, #591214 62.5%, #885010 100%);
  border-radius: 50px;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #FFFFFF;
  flex: 0 0 230px;
  padding: 17px 30px;
  cursor: pointer;
  transition: all 0.3s;
  @media (min-width: 1086.98px) {
    :hover {
      background: linear-gradient(180deg, #852c2e 62.5%, #3f260b 100%);
    }

  }


  @media (max-width: 1109.98px) {
    background: rgb(204, 204, 204);
  }
`
export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 5px 0 5px 10px;
  position: relative;

`
