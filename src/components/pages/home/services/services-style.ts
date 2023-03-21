import styled from "styled-components";


export const ServicesWrapper = styled.section`
  margin-bottom: 90px;
  @media (max-width: 1024.98px) {
    margin-bottom: 20px;
  }
  
`


export const ServicesGrid = styled.div`
     display: flex;
     justify-content: space-between;
     @media (max-width: 836.98px) {
       flex-direction: column;
       gap: 10px;
     }
  
`
export const ServicesItem = styled.div`
  position: relative;
  overflow-y: hidden;
  width: calc((100% / 3) - 3px);
  height: 483px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  cursor: pointer;
  background-size: cover;


  h3 {
    font-weight: 700;
    font-size: 30px;
    line-height: 40px;
    color: #FFFFFF;
    text-align: center;
    display: block;
    background: rgba(89, 18, 20, 0.5);
    padding: 1rem;
    transform: translate3d(0, -100%, 0);
    transition: transform 300ms;
    border-radius: 50px 50px 0px 0px;
    margin-bottom: 23px;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    &:hover,
    &:focus {
      ~ .item__overlay {
        transform: translate3d(0, 0, 0);

        h3 {
          transform: translate3d(0, 0, 0);
        }

        .item__body {
          opacity: 1;
        }
      }
    }
  }
}


.item__overlay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  position: absolute;
  width: 100%;
  top: 0;
  transition: transform 300ms;
  background: rgba(89, 18, 20, 0.5);
  transform: translate3d(0, 100%, 0);
}

.item__body {
  flex-grow: 1;
  padding: 1rem;
  opacity: 0;
  transition: opacity 500ms 100ms;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 8px;


  a {
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    color: #FFFFFF;
  }

  li {
    margin: 0;
  }
`


// export const ServicesCart = styled.div`
//   width: calc((100% / 3) - 3px);
//   height: 483px;
//   display: flex;
//   align-items: flex-end;
//   justify-content: center;
//   cursor: pointer;
//   background-size: cover;
//   @media (max-width: 836.98px) {
//     width: 100%;
//   }
// `


//
// import styled from "styled-components";
//
//
// export const ServicesWrapper = styled.section`
//   margin-bottom: 90px;
//   @media (max-width: 1024.98px) {
//     margin-bottom: 20px;
//   }
//
// `
// export const ServicesFlex = styled.div`
//   display: flex;
//   justify-content: space-between;
//   @media (max-width: 836.98px) {
//     flex-direction: column;
//     gap: 10px;
//   }
// `
// export const ServicesCart = styled.div`
//   width: calc((100% / 3) - 3px);
//   height: 483px;
//   display: flex;
//   align-items: flex-end;
//   justify-content: center;
//   cursor: pointer;
//   background-size: cover;
//   @media (max-width: 836.98px) {
//     width: 100%;
//   }
//
//   img{
//     height: 483px;
//   }
//   &:hover {
//     transition: all 0.3s ease;
//     div{
//       border-radius: 0;
//       max-height: 100%;
//       gap: 25px;
//       nav{
//         display: block;
//         max-height: 100%;
//         transition: all 0.3s ease;
//       }
//     }
//   }
// `
//
// export const Block = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100%;
//   max-height: 80px;
//   background: rgba(89, 18, 20, 0.5);
//   border-radius: 50px 50px 0px 0px;
//   padding: 20px;
//   width: 100%;
//   transition: all 0.3s ease;
//   gap: 0;
//
//   h3 {
//     font-weight: 700;
//     font-size: 30px;
//     line-height: 40px;
//     color: #FFFFFF;
//     text-align: center;
//   }
//
// `
// export const NavBlock = styled.nav`
//   ul {
//     display: flex;
//     flex-direction: column;
//     gap: 8px;
//   }
//
//   a {
//     font-weight: 500;
//     font-size: 15px;
//     line-height: 20px;
//     color: #FFFFFF;
//   }
// `

