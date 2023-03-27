import styled from 'styled-components';


export const ModalWrap = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.3s;
  padding: 30px;
  @media (max-width: 320.98px) {
    left: -4px;
  }

  
  
  
`
export const PopupWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 20px;
  max-width: 450px;
  transition: all 0.3s;
  @media (max-width: 320.98px) {
    padding: 3px;
    row-gap: 10px;
  }
`
export const DialogButton = styled.button`
  background: linear-gradient(180deg, #591214 62.5%, #885010 100%);
  border-radius: 50px;
  font-weight: 800;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  padding: 11px 30px;
  display: flex;
  justify-content: center;
  transition: all 0.3s;
  align-self: center;
  width: 100%;

  :hover {
    background: linear-gradient(rgb(89, 18, 20) 62.5%, rgb(136, 80, 16) 100%);
  }
  @media (max-width: 320.98px) {
    margin-bottom: 10px;

  }


`
export const ButtonClose = styled.span`
  align-self: end;
  cursor: pointer;
  @media (max-width: 320.98px) {
    padding-right: 15px;
    padding-top: 10px;
    
  }
`

export const DialogBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: center;

  img {
    background: linear-gradient(rgb(89, 18, 20) 62.5%, rgb(136, 80, 16) 100%);
    width:300px;
    padding: 10px 20px;
  }


  div {
    font-weight: 800;
    font-size: 20px;
  }

  p {
    font-size: 17px;
    line-height: 1.4;

  }

  input {
    max-width: 100%;
    margin-bottom: 20px;
    padding: 7px 0;
    height: auto;
    background-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-width: 0 0 2px;
    border-style: solid;
    display: block;
    width: 100%;
    font-size: 17px;
    font-weight: 400;
    color: #666;
    background-image: none;
    border-bottom: 2px solid #282c34;
    @media (max-width: 320.98px) {
      margin-bottom: 10px;
    }

    ::placeholder {
      color: #666;
      opacity: 0.8;
    }
  }


`



