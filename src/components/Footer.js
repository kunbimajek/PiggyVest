import React from 'react';
import logo from '../logo-white.svg';
import Socials from './svg/Socials'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-6 products">
                        <h4 className="mb-10">Products</h4>
                            <a href="https://www.piggyvest.com/save/piggybank">Piggybank</a>
                            <a href="https://www.piggyvest.com/invest">Invest</a>
                            <a href="https://www.piggyvest.com/save/safelock">Safelock</a>
                            <a href="https://www.piggyvest.com/save/targets">Target Savings</a>
                            <a href="https://www.piggyvest.com/save/flex-naira">Flex Naira</a>
                            <a href="https://www.piggyvest.com/save/flex-dollar">Flex Dollar</a>
                    </div>
                    <div className="col-md-3 col-6 company">
                        <h4 className="mb-10">Company</h4>
                            <a href="https://www.piggyvest.com/about">About</a>
                            <a href="https://www.piggyvest.com/faq">FAQs</a>
                            <a href="https://medium.com/@PiggyVest">Blog</a>
                            <a href="https://www.piggyvest.com/quiz">Quizzes</a>
                            <a href="https://www.piggyvest.com/fifth-anniversary">Piggyvest At 5</a>
                    </div>
                    <div className="col-md-3 col-6 legal">
                        <h4 className="mb-10">Legal</h4>
                            <a href="https://www.piggyvest.com/terms">Terms</a>
                            <a href="https://www.piggyvest.com/privacy">Privacy</a>
                    </div>
                    <div className="col-md-3 col-top col-6">
                        <a href="/" className="text-right">
                            <img src={logo} alt="logo" />
                        </a>
                        <Socials/>
                        <a href="/" className="text-right">Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos, Nigeria</a>
                        <a href="mailto:contact@piggyvest.com" className="text-right">contact@piggyvest.com</a>
                        <a href="tel:+234700933933933" className="text-right">+234 700 933 933 933</a>
                    </div>
                </div>
                <hr className="mt-40 mb-40"/>
                <p className="mb-20">Piggyvest (formerly piggybank.ng) is the leading online savings & investment platform in Nigeria. For over 4 years, our customers have saved and invested billions of Naira that they would normally be tempted to spend.</p>
                <p>2016 - 2021 PiggyTech Global Limited - RC 1405222</p>
            </div>
        </footer>
    )
}

export default Footer;