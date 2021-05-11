import React from 'react';

const reviews = [
    { date: '4/12/2020, 2:37 PM', name: 'Majek Fashek', text: "Piggyvest helps me and my family a lot and I'm happy about it. It's legit and trustworthy", image: '/img/fashek.jpeg'},
    { date: '4/12/2020, 2:37 PM', name: 'Speedy D', text: "At first, I thought it wasn't legit, but I have saved my sister's house rent here with piggyvest. Best savings platform", image: '/img/speedy.png'},
    { date: '4/12/2020, 2:37 PM', name: 'Meme Celebrity1', text: "My Safelock money don land, who go visit me bayi", image: '/img/meme.JPG'},
    { date: '4/12/2020, 2:37 PM', name: 'Jack Dorsey', text: "I use PiggyVest for a lot of business investments", image: '/img/jack.jpeg'},
    { date: '4/12/2020, 2:37 PM', name: 'Kamaru B', text: "Wahala for who no invest with PiggyVest", image: '/img/kamaru.jpeg'},
    { date: '4/12/2020, 2:37 PM', name: 'Michael Jordan', text: "I initially refused to subscribe to this idea of e-piggybank though, I'm a fan of the physical one. Ever since I joined its been amazing.", image: '/img/jordan.jpeg'},
]
const Testimonials = () => {
    return (
        <div className="testimonials d-flex jc-c">
            <div className="content">
                { reviews.map(review => {
                    return (
                        <div className="box">
                            <small>{review.date}</small>
                            <div className="d-flex mt-20 clear-right">
                                <img src={review.image} alt="profile"/>
                                <div>
                                    <h5>{review.name}</h5>
                                    <p>{review.text}</p>
                                </div>
                            </div>
                        </div>
                    )})}
            </div>
        </div>
    )
}

export default Testimonials