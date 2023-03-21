import styled from "styled-components";


export const ServicesWrapper = styled.section`
  margin-bottom: 90px;
  @media (max-width: 1024.98px) {
    margin-bottom: 20px;
  }

`
export const ServicesFlex = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 836.98px) {
    flex-direction: column;
    gap: 10px;
  }
`
export const ServicesCart = styled.div`
  width: calc((100% / 3) - 3px);
  height: 483px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  cursor: pointer;
  background-size: cover;
  @media (max-width: 836.98px) {
      width: 100%;
  }

  img{
    height: 483px;
  }
  &:hover {
    transition: all 0.3s ease;
    div{
      border-radius: 0;
      max-height: 100%;
      gap: 25px;
      nav{
        display: block;
        max-height: 100%;
        transition: all 0.3s ease;
      }
    }
  }
`

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  max-height: 80px;
  background: rgba(89, 18, 20, 0.5);
  border-radius: 50px 50px 0px 0px;
  padding: 20px;
  width: 100%;
  transition: all 0.3s ease;
  gap: 0;

  h3 {
    font-weight: 700;
    font-size: 30px;
    line-height: 40px;
    color: #FFFFFF;
    text-align: center;
  }

`
export const NavBlock = styled.nav`
  display: none;
  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  a {
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    color: #FFFFFF;
  }
`




// import styled from "styled-components";
//
//
// export const ServicesWrapper = styled.section`
//     margin-bottom: 90px;
//   @media (max-width: 1024.98px) {
//     margin-bottom: 20px;
//   }
//
//
// `
// export const ServicesBlocks = styled.div`
//   display: flex;
//   justify-content: space-between;
//   gap: 5px;
//   @media (max-width: 820.98px) {
//     flex-wrap: wrap;
//   }
//
//
//   h3 {
//     font-weight: 700;
//     font-size: 30px;
//     //line-height: 40px;
//     line-height: 135%;
//     color: #FFFFFF;
//     padding: 20px 45px;
//     gap: 10px;
//     width: 390px;
//     height: 80px;
//     background: rgba(89, 18, 20, 0.5);
//     border-radius: 50px 50px 0 0;
//     text-align: center;
//     @media (max-width: 1126.98px) {
//       padding: 7px 45px;
//       line-height: 100%;
//     }
//     @media (max-width: 820.98px) {
//       width: 100%;
//       line-height: 200%;
//     }
//
//   }
//   div{
//     height: 483px;
//     overflow: hidden;
//     display: flex;
//     align-items: flex-end;
//     justify-content: center;
//     cursor: pointer;
//     background-size: cover;
//     @media (min-width: 1024.98px) {
//       background-size: 100% 100%;
//       transition: background-size .3s ease-in;
//       -moz-transition: background-size .3s ease-in;
//       -web-kit-transition: background-size .3s ease-in;
//       transition: all 0.3s;
//     }
//     @media (max-width: 820.98px) {
//       display: flex;
//       width: 100%;
//     }
//
//   }
// `
// export const KindsBlock = styled.div`
//   background: url("/images/kinds.png") 50%/cover no-repeat;
//   @media (min-width: 1024.98px) {
//     &:hover {
//       background-size: 110% 110%
//     }
//   }
// `
//
// export const FinishingBlock = styled.div`
//   background: url("/images/finishing.png") no-repeat center;
//   @media (min-width: 1024.98px) {
//     &:hover {
//       background-size: 110% 110%
//     }
//   }
// `
// export const ProductsBlock = styled.div`
//   background: url("/images/products.png") no-repeat center;
//   @media (min-width: 1024.98px) {
//     &:hover {
//       background-size: 110% 110%
//     }
//   }
//
// `