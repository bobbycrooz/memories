import styled from "styled-components";

export const Section = styled.section`
    height: 85vh;

    .cer_cont {
        width: 47%;
        background-color: #ff410021;
        .centered {
            width: 390px;
            height: 270px;
            margin-top: 15%;
            .cert_img_cont {
            }
        }
    }
    .buy_sum {
        width: 53%;
    }

    .click_info {
        color: #646464;
        width:400px;
    }
    .pay_btn {
        color: #626262;

        .paypal {
            border: 1px solid #61ed66;
            box-shadow: 0 8px 16px 0px #61ed6624;
            &:hover {
                border: 1px solid #61ed66;

                box-shadow: 0 10px 18px 0px #61ed662f;
            }
        }
        .fw {
            border: 1px solid #ff410054;
            box-shadow: 0 8px 16px 0px #ff410014;
            &:hover {
                box-shadow: 0 10px 18px 0px #ff410024;
            }
        }
    }
`;

export const CourseCard = styled.div`
 

`;


export const Bar = styled.div`
  
`;
