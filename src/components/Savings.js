import React from 'react';

import { InView } from 'react-intersection-observer';

const savings = [ 
    { title: 'Automated Savings', text: 'Build a dedicated savings faster on your terms automatically or manually.', name: 'PIGGYBANK', icon: '/img/piggy.png' },
    { title: 'Fixed Savings', text: 'Lock money away for a fixed duration with no access to it until maturity.', name: 'SAFELOCK', icon: '/img/safelock.png' },
    { title: 'Goal-oriented Savings', text: 'Reach your savings goals faster. Save towards multiple goals on your own or with a group.', name: 'TARGET', icon: '/img/target.png' },
    { title: 'Flexible Savings', text: 'Save, transfer, withdraw, manage and organise your money for free at any time.', name: 'FLEX NAIRA', icon: '/img/flex.png' },
    { title: 'Dollar Savings', text: 'Save in foreign currencies such as USD and Euros', name: 'FLEX DOLLAR', icon: '/img/dollar.png' },
]

const Savings = () => {

    return (
        savings.map(plan => {
            return (
                <InView triggerOnce="true">
                    {({ inView, ref, entry }) => (
                    <div ref={ref} className={inView ? "col-md-4 box fade-in" : "col-md-4 box opacity-0"}>
                        <img src={plan.icon} alt="icon" className="icon-big"/>
                        <h3>{plan.title}</h3>
                        <p>{plan.text}</p>
                        <small><img src={plan.icon} alt="icon" className="icon-small"/> {plan.name}</small>
                    </div>
                    )}
                </InView>
            )
        })
    )
}

export default Savings;