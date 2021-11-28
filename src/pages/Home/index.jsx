import React from 'react'
import { Main } from './style'
import Header from '../../components/header'
import Hero from '../../components/home_hero'
import Blocks from '../../components/home_blocks'
import Features from "../../components/features";
import Footer from "../../components/footer";
import Statistics from "../../components/statistics";

const index = () => {
      return (
           <Main>
                <Header />
                <Hero />
                <Blocks />
                <Features />
                <Statistics />
                <Footer />
           </Main>
      );
}


export default index