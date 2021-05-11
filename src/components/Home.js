import React from 'react';

import Navbar from './Navbar'
import Savings from './Savings'
import CaretRight from './svg/CaretRight'
import Testimonials from './Testimonials'
import Footer from './Footer'

import { InView } from 'react-intersection-observer';

const Home = () => {

    return (
        <div>
            <Navbar/>
            
            <div className="header">
                <div className="heading"><h1 className="slide-up">The Better Way to Save & Invest</h1></div>
                <p className="">
                    PiggyVest helps over 2 million customers achieve their financial goals by<br className="d-sm-none"/> 
                    helping them save and invest with ease.
                </p>
                <div>
                    <a href="https://dashboard.piggyvest.com/register" target="_blank" rel="noreferrer" className="btn btn-default">Create a free account</a>
                </div>
                <div className="header-image">
                    <div className="circle-bg">
                        <div className="circle"></div>
                    </div>
                    <div className="phone">
                        <img src="/img/header-phone.png" alt="phone screen" className="phone" width="880px"/>
                        <img src="/img/header-phone-mobile.png" alt="phone screen" className="mobile" width="880px"/>
                    </div>
                </div>
            </div>

            <div className="savings" id="save">
                <div className="container">
                    <div className="row">
                        <InView triggerOnce="true">
                            {({ inView, ref, entry }) => (
                            <div ref={ref} className={inView ? "col-md-4 fade-in" : "col-md-4 opacity-0"}>
                                <div className="mt-40 pl-10 ">
                                    <h2 className="big">5 ways to build your savings</h2>
                                    <p>Earn 5%-15% when you save with any of these PiggyVest plans</p>
                                    <a href="https://dashboard.piggyvest.com/register" target="_blank" rel="noreferrer" className="btn btn-default">Get Started</a>
                                </div>
                            </div>
                            )}
                        </InView>

                        <Savings/>
                    </div>
                </div>
            </div>

            <div className="investments container">
                <div className="row">
                    <div className="col-md-6 left">
                        <div className="circle-bg">
                            <div className="circle"></div>
                        </div>
                        <img src="/img/invest.png" alt="phone screen" className="phone" width="346px"/>
                    </div>
                    <div className="col-md-6 right">
                        <InView triggerOnce="true">
                                {({ inView, ref, entry }) => (
                                <div ref={ref} className={inView ? "text reveal" : "text"}>
                                    <img src="/img/invest-icon.png" alt="icon" className="icon-big"/>
                                    <span><h2>Access investment opportunities</h2>
                                    <p>Grow your money confidently by investing in pre-vetted investment opportunities.</p></span>
                                    <a href="https://www.piggyvest.com/invest">Learn more about Investments 
                                        <CaretRight fill="#9B52DF"/>
                                    </a>
                                </div>
                            )}
                        </InView>
                    </div>
                </div> 
            </div>

            <div className="top-saver">
                <div className="shapes">
                    <img src="/img/shape1.png" alt="shape" className="shape1" width="120px"/>
                    <img src="/img/shape2.png" alt="shape" className="shape2" width="430px"/>
                    <img src="/img/shape3.png" alt="shape" className="shape3" width="200px"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex al-i-c jc-c-sm">
                            <InView triggerOnce="true">
                                    {({ inView, ref, entry }) => (
                                    <div ref={ref} className={inView ? "text reveal" : "text"}>
                                        <span>
                                            <h2>Meet the saver of the month 🎉</h2>
                                            <p>Every month, we shine a spotlight on one saver, asking them questions about their savings culture and how the product is specifically helping them shape how they spend and save for future responsibilities.</p>
                                        </span>
                                        <a href="https://piggyvest.medium.com/meetapiggyvestsaver-bisola-7a488d053153">Learn more about Bisola 
                                            <CaretRight fill="#ffffff"/>
                                        </a>
                                    </div>
                                )}
                            </InView>
                        </div>
                        <div className="col-md-6">
                            <img src="/img/saver.png" alt="saver of the month" width="372px"/>
                        </div>
                    </div> 
                </div>
            </div>
        
            <div className="join-piggyvest">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 left">
                           <Testimonials/>
                        </div>
                        <div className="col-md-6 d-flex al-i-c right jc-c-sm">
                            <div className="text">
                                <h2>Join the 2,000,000+ customers with a PiggyVest account</h2>
                                <p>Since launching in 2016, over 2,000,000 people have used PiggyVest to manage their money better, avoid over-spending and be more accountable</p>
                                <a href="https://dashboard.piggyvest.com/register" className="btn btn-default" target="_blank" rel="noreferrer">Create a free account</a>
                                <div className="downloads">
                                    <img src="/img/apple.png" alt="phone screen"/>
                                    <img src="/img/google.png" alt="phone screen"/>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>

            <div className="featured text-center">
                <div className="container">
                    <h4>IN THE NEWS</h4>
                    <div className="d-flex al-i-c jc-c">
                        <a href="https://techpoint.africa/2018/05/31/piggybank-secures-1-1-million-funding/" target="_blank" rel="noreferrer">
                            <img src="/img/brand3.png" alt="brand" className="first"/>
                        </a>
                        <a href="https://guardian.ng/news/nigeria/piggybank-asserts-expansion-plans-becomes-piggyvest/" target="_blank" rel="noreferrer">
                            <img src="/img/brand2.png" alt="brand"/>
                        </a>
                        <a href="https://techcrunch.com/2018/05/31/nigerias-piggybank-ng-raises-1-1m-announces-group-investment-product/" target="_blank" rel="noreferrer">
                            <img src="/img/brand1.png" alt="brand"/>
                        </a>
                    </div>
                </div>
            </div>
        
            <Footer/>
        </div>
    )
}

export default Home;