import styled from "styled-components";
import mem2 from "../../asset/mem3.jpg";

export const Main = styled.section`
     width: 100%;
     /* height: 60vh; */
     .layout {
          .side-pane {
               width: 26%;
          }
          .main-app {
               width: 70%;
               height: auto;
          }

          .right-pane {
               width: 20%;
          }
     }

     .slider {
          .slick-arrow {
               width: 40px;

               &:before {
                    color: #0047ab;
               }
          }
     }
`;

export const Memcard = styled.div`
     width: 100%;
     transition: all 0.4s linear;


     .img-container {
          background-image: url(${mem2});
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          height: 225px;

          /* border: 1px solid red; */
     }

     .date-name {
          /* border-bottom: 1px solid red; */

          &:after {
               content: "";
               position: absolute;
               bottom: 0;
               width: 110px;
               height: 3px;
               background: #d6e7ff;
          }

          &:before {
               content: "";
               position: absolute;
               bottom: -8px;
               width: 10px;
               height: 3px;
               background: #d6e7ff;
               transition: all 0.4s linear;
          }
     }

     &:hover {
          transform: scale(1.01);
          .date-name {
               /* border-bottom: 1px solid red; */

               &:before {
                    content: "";
                    position: absolute;
                    bottom: -8px;
                    width: 60px;
                    height: 3px;
                    background: #d6e7ff;
               }
          }

          .read-more {
               opacity: 1;
               transition: all 0.2s linear;
          }
     }

     .style-name {
          color: #0047ab;
     }

     .read-more {
          opacity: 0;
          /* background: #85b8ff; */

          &:hover {
               color: #fff;
               background: #85b8ff;
          }
     }
`;
