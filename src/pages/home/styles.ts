import styled from "styled-components";

export const Section = styled.section`

    .content {
        width: 500px;
        height: 380px;

        .hero_title {
            font-size: 79px;
            line-height: 80px;
        }

        .hero_text {
            width: 450px;
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
        background-color: #ff410014;
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
        background-color: #61ed661f;
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

    @media screen and (max-width: 780px) {
    }

    @media screen and (max-width: 420px) {
        .content {
            width: 100%;
            height: auto;

            .hero_title {
                font-size: 28px;
                line-height: 36px;
                text-align: center;
            }

            .hero_text {
                width: 100%;
                font-size: 17px;
                text-align: center;
                /* border: 1px solid red; */
            }

            .content_wrapper {
                button {
                    margin-left: 50%;
                    transform: translateX(-50%);
                    width: 60%;
                    padding: 2px;
                    font-weight: 500;
                    font-size: 16px;
                    /* border-radius: 0; */
                }
            }
        }

        .ilustration {
            width: 100%;
        }

        .email {
            height: auto;
            &-title {
                width: 100%;
            }

            .nesletter {
                width: 97%;
            }
        }

        .my_learning {
            background-color: #ff410009;
            height: auto;
        }
    }

    @media screen and (max-width: 320px) {
    }
`;

export const CourseCard = styled.div`
    width: 250px;
    /* height: 100%; */

    .couse_media {
        border-radius: ;
    }
`;
