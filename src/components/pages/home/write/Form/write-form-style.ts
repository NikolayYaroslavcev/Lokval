import styled from "styled-components";

export const WriteFormWrapper = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  div {
    display: flex;
    justify-content: space-between;
    gap: 24px;
    @media (max-width: 674.98px) {
      flex-direction: column;
    }
  }
  
  button {
    padding: 0px 20px;
    gap: 10px;
    width: 284px;
    height: 47px;
    background: #CCCCCC;
    border-radius: 50px;
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    color: #FFFFFF;
    margin: 0 auto;
    transition: all 0.3s ease;
    &:hover {
      background: #591214;
    }
  }
`
export const InputContainer = styled.div`
  position: relative;

  input {
    border: 1px solid #000000;
    border-radius: 20px;
    transition: all 0.3s ease;
    outline: none;
    padding: 11px 22px;
    gap: 10px;
    width: 524px;
    height: 49px;
    background: #FFFFFF;
    @media (max-width: 674.98px) {
      width: 100%;
    }

    &:focus {
      border-color: #591214;
    }
  }

  label {
    position: absolute;
    left: 15px;
    top: 9px;
    transition: all 0.3s ease;
    padding: 0 10px;
    z-index: 1;
    background-color: #fff;
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    color: #000000;

    &:before {
      content: "";
      height: 5px;
      position: absolute;
      left: 0;
      top: 10px;
      width: 100%;
      z-index: -1;
    }
  }

  input:focus + label {
    top: -15px;
    color: #591214;
    font-weight: 700;
    font-size: 16px;
    line-height: 27px;
  }
`