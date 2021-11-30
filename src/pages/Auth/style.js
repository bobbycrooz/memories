import styled from "styled-components";
import mem4 from '../../asset/mem2.jpg'

export const Main = styled.section`
     width: 100%;
     height: 100vh;
     background: #0e0e0e;
     background-image: url(${mem4});
     background-size: cover;
     background-repeat: no-repeat;
     /* object-fit: fixed; */

     .layer {
          /* background: #0009; */
          /* background-image: -webkit-radial-gradientc(#000, #fff);
          background-image: -moz-radial-gradient(#000, #fff); */
          background-image: radial-gradient(#0007,#000b);
     }
`;
