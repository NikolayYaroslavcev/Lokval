import styled from 'styled-components';


export const TypeBackgroundBg = styled.div`
  background: url("/images/type/typeBg.png") no-repeat center;
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


export const TypeContainer = styled.div`
  padding-top: 100px;
     @media (max-width: 768.98px) {
         padding-top: 20px;
     }
`

export const TypeTitle = styled.h2`
  font-weight: 700;
  font-size: 36px;
  line-height: 48px;
  margin-bottom: 34px;
  text-align: center;
`
export const TypeBlock = styled.div`
  display: flex;
  gap: 50px;
  margin-bottom: 45px;
  @media (max-width: 1086.98px) {
    gap: 15px;
  }
  @media (max-width: 768.98px) {
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 20px;
  }
`

export const BlockImg = styled.div`
  background-size: cover;
  width: 295px;
  height: 370px;
  flex: 0 0 295px;
`

export const BlockContent = styled.div`
  padding: 30px 0;
  flex: 1 1 auto;
  @media (max-width: 1109.98px) {
    padding: 0;
  }
`

export const BlockDescription = styled.p`
  margin-bottom: 20px;
`

export const BlockSub = styled.h3`
  margin-bottom: 10px;
  font-weight: 700;
`
export const BlockAdv = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 20px;

  li {
    list-style-type: none;
  }

`
export const BlockChar = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;

  li {
    list-style-type: none;
  }
`


export const BlockCharacteristics = styled.div`
  margin-bottom: 10px;
  font-weight: 700;`

export const TypeAbout = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  margin-bottom: 107px;
  @media (max-width: 768.98px) {
    margin-bottom: 20px;
  }
`
export const TypeSimilar = styled.h2`
  font-weight: 700;
  font-size: 36px;
  line-height: 48px;
  margin-bottom: 34px;
  text-align: center;
  padding-top: 80px;
  @media (max-width: 768.98px) {
    padding-top: 20px;
  }

`

