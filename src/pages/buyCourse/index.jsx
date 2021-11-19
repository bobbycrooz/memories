import React from "react";
import { Section, CourseCard, Bar } from "./styles";
import cert from "../../asset/certificate.png";
import tick from "../../asset/tick.png";
import paypal from "../../asset/paypal.png";
import fw from "../../asset/fw.png";
import img4 from "../../asset/img4.png";
import img5 from "../../asset/img5.png";
import lap from "../../asset/lap.png";
import grad from "../../asset/grad.png";
import pep from "../../asset/people.png";
import pep2 from "../../asset/pep2.png";
import email from "../../asset/email.png";
import cong from "../../asset/cong.png";
import { CgArrowLongRight } from "react-icons/cg";
import Carousel, { CarouselTwo } from "../../components/Carousel";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Learning = () => {
    const [user, setUser] = React.useState(true);
    return (
        <Section className='w-full flex mb-20'>
            <div className='cer_cont bg-red-300 h-full'>
                <div className='centered mx-auto  border bg-red-600 text-black'>
                    <div className='cert_img_cont w-full'>
                        <img src={cert} alt='' className='w-full h-full' />
                    </div>
                    <br />
                    <div className='flex my-2 items-center text-sm '>
                        <img src={tick} alt='' className='' />

                        <p className='ml-4'>Highlight your skills to potential employers</p>
                    </div>
                    <div className='flex my-2 items-center text-sm '>
                        <img src={tick} alt='' className='' />

                        <p className='ml-4'>Share your abilities on professional social media</p>
                    </div>

                    <div className='flex my-2 items-center text-sm '>
                        <img src={tick} alt='' className='' />

                        <p className='ml-4'>Show your current employer your initiative and drive to learn</p>
                    </div>
                </div>
            </div>
            <div className='buy_sum h-full px-20  '>
                <div className='pay_centered my-8  w-full '>
                    <div className='course_content  w-full h-32 flex'>
                        <div className='media rounded-lg w-40 h-full '>
                            <img src={lap} alt='' className='rounded-lg h-full w-full' />
                        </div>

                        <div className='info h-full w-40 ml-6 space-y-2 '>
                            <h1 className='c_name font-semibold text-2xl  text-black'>React native</h1>
                            <p className='c_author capitalize'>by: Henrry Arthur</p>
                            <p className='c_count capitalize'>Course 12 videos</p>
                        </div>
                        <div className='price  flex justify-between w-1/2'>
                            <space className='w-8'></space>
                            <h1 className='c_name font-semibold text-xl  text-txt-1'>$100</h1>
                        </div>
                    </div>
                    {user ? (
                        <h1 className='text-lg text-black my-8 font-semibold'>
                            What’s the easiest way for you to pay?
                        </h1>
                    ) : (
                        <div className='notice my-6  '>
                            <h1 className='click font-semibold'>Click the paypal button to login.</h1>
                            <p className='click_info text-sm mt-1'>
                                You'll be prompted for your PayPal account email and password through a secure PayPal
                                login form.
                            </p>
                            <button className='click btn text-white mt-6'>PayPal</button>
                        </div>
                    )}

                    <div className='pay_btn space-y-6'>
                        <button onClick={() =>setUser((p) => !p)} className='paypal flex items-center p-3 justify-between w-full rounded-md'>
                            <h1 className='text-2xl font-medium'>Pay with PayPal</h1>
                            <img src={paypal} alt='' />
                        </button>

                        <button className='fw flex items-center p-3 justify-between w-full rounded-md'>
                            <h1 className='text-2xl font-medium'>Pay with PayPal</h1>
                            <img src={fw} alt='' />
                        </button>
                    </div>
                </div>
            </div>
        </Section>
    );
};

function LearningCard() {
    return <></>;
}

export default Learning;
