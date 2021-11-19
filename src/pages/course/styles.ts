import styled from "styled-components";
import { Container } from "@chakra-ui/react";
export const Section = styled.section`


    .course_lobby {
        height: 100%;
        background-color: #fbfbfb97;

        .hero_title {
            font-size: 79px;
            /* height: 212px; */
            line-height: 80px;
        }

        .hero_text {
            width: 450px;
            /* border: 1px solid red; */
        }
    }

    .my_learning {
        background-color: #ff410009;
        height: 400px;
    }

    .ilustration {
        width: 560px;
    }

    .main {
        width: 100%;
        height: 240px;
        background-color: #61ed66;
        font-size: 3rem;
        font-weight: bold;
        color: #fff;
    }

    .offer_section {
    }

    .ddd {
        overflow-x: hidden;
        overflow-y: hidden;
        background-color: red;
    }

    .aaa {
        height: 300px;
    }

    .yyy {
        height: 180px;
        display: flex;
        align-items: center;
    }

    .join_container {
        background-color: #ff410014;
    }

    .email {
        height: 500px;
        &-title {
            width: 380px;
        }

        .nesletter {
            width: 409px;
        }
    }
`;

export const CourseCard = styled.div`
    width: 100%;
    height: 300px;
    /* height: auto; */
    transition: all 0.4s ease-in;

    &:hover {
      
            transition: all 0.2s ease-in;
            transform: scale(1.05);
        
    }

    .couse_media {
        border-radius: ;
    }
`;
export const CoursePreview = styled.div`
    width: 100%;
    height: 500px;
    /* height: auto; */
    transition: all 0.4s ease-in;

    &:hover {
        transition: all 0.2s ease-in;
        transform: scale(1.05);
    }

    &.active {
        transition: all 0.4s ease-in;

        .course_media {
            width: 100%;
            
            .video_elem {
                height: 500px;
                position: relative;
                .prev {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            }
            .video_details {
                /* display: none; */
                visibility: hidden;
            }
        }
        .accordion {
            width: 10px;
        }

        .menu {
            background-color: #d8d8d8;
        }
    }

    .course_media {
        width: 65%;
        border-radius: ;
        .video_elem {
            height: 70%;
            position: relative;
            .prev {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }
    .accordion {
        width: 45%;
    }

    .menu {
        background-color: #d8d8d8;
    }
`;

export const ContDiv = styled(Container)`
    height: 100%;
    /* overflow-y:scroll; */
`;
