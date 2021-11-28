import styled from "styled-components";
import membg from "../../asset/mem2.jpg";

export const Main = styled.section`
     width: 100%;
     /* height: 60vh; */

     .hero {
          .hero_background {
               height: 18rem;
               background: hsla(217, 100%, 50%, 1);

               background: linear-gradient(110deg, hsla(217, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%);

               background: -moz-linear-gradient(110deg, hsla(217, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%);

               background: -webkit-linear-gradient(110deg, hsla(217, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%);

               filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#0061FF", endColorstr="#60EFFF", GradientType=1 );

               .hero_content {
               }

               .circle-icon-box {
                    background: hsla(217, 100%, 50%, 1);
                    background: linear-gradient(1195deg0deg, hsla(217, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%);

                    background: -moz-linear-gradient(95deg, hsla(217, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%);

                    background: -webkit-linear-gradient(
                         95deg,
                         hsla(217, 100%, 50%, 1) 0%,
                         hsla(186, 100%, 69%, 1) 100%
                    );

                    transition: all 0.3s linear;

                    &:hover {
                         transition: all 0.9s ease;

                         background: #fff8;
                    }
               }
          }
     }

     .center {
          padding: 4px;
          button::before {
               color: #0062fff5;
          }
     }

     .box {
          /* border: 1px solid red; */
          width: 100%;
          /* background: red; */
          border-radius: 12px;
          position: relative;
          height: 9rem;
          transition: all 0.4s linear;

          img {
               width: 100%;
               height: 100%;
               border-radius: 10px;
          }

          .layer {
               opacity: 0;
               position: absolute;
               top: 0;
               left: 0;
               width: 100%;
               height: 100%;
               padding: 1.3rem;
               background: #0009;
               border-radius: 10px;
               transition: all 0.4s linear;

               .mem-title {
                    width: 100%;
                    height: 100%;
                    position: relative;

                    &::before {
                         content: "";
                         position: absolute;
                         right: 0;
                         bottom: 0;
                         background: #fff9;
                         width: 9px;
                         height: 9px;
                         border-top-left-radius: 2px;
                    }
               }
          }

          &:hover {
               transform: scale(1.09);
               .layer {
                    opacity: 1;

                    .mem-title {
                         width: 100%;
                         height: 100%;
                    }
               }
          }
     }
`;
