import styled from "styled-components";

export const Section = styled.section`
     .black_banner {
          height: 120px;
          width: 100%;
          background-color: rgba(23, 23, 23, 1);
     }
     .current_lerning {
          background-color: rgba(251, 251, 251, 1);
          height: auto;
          padding-left: 5rem;
          padding-right: 5rem;

          @media screen and (max-width: 420px) {
               height: auto;
          }
     }
`;

export const CourseCard = styled.div`
    width: 100%;
    height: 290px;
    transition: all 0.2s linear;

    &:hover {
        box-shadow: ;
        transform: scale(1.04);
    }

    .couse_media {
        border-radius: ;
    }
`;

export const Bar = styled.div`
    background-color: rgba(216, 216, 216, 1);
    height: 5px;
    .progress {
        width: ${({ w }: any) => w};
        background-color: rgba(23, 23, 23, 1);
    }
    /* height: 100%; */
`;
