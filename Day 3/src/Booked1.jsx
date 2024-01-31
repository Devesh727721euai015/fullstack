import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./Book1.css";

const Booked1 = () => {
    return(
        <div>
        <>
            <div className="contain">
                <h1 className="title">Your Academy Has Booked</h1>
            </div>
            <div className="details-container">
                <div className="image-container">
                    <img src="https://static.wixstatic.com/media/447544_0fe7ba24b6614405904e81c3473fd3ce~mv2_d_4515_3010_s_4_2.jpg/v1/fill/w_1000,h_667,al_c,q_85,usm_0.66_1.00_0.01/447544_0fe7ba24b6614405904e81c3473fd3ce~mv2_d_4515_3010_s_4_2.jpg" alt="Yoga Academy" className="image" />
                    <section className="sale">
                        <span className="sale-label">Joy & Shine Yoga Academy</span>
                        {/* You can add a tagline or other details here */}
                    </section>
                </div>
                <div className="details">
                    <div className="details-content">
                        <h2>About Joy & Shine Yoga Academy</h2>
                        <p>Embark on a journey of self-discovery and holistic well-being at Joy & Shine Yoga Academy. Our serene environment and experienced instructors create the perfect atmosphere for your yoga practice.</p>
                        <p>Located at Zen Yoga Studio, City</p>
                    </div>
                    {/* <aside>
                        <h2>About Our Courses</h2>
                        <p>Our yoga courses cater to all levels, from beginners to advanced practitioners. Immerse yourself in guided sessions, meditation, and mindfulness practices.</p>
                        <h2>What's Included</h2>
                        <ul>
                            <p>Guided Yoga Sessions</p>
                            <p>Meditation and Mindfulness Practices</p>
                            <p>Yoga Mats and Props Provided</p>
                        </ul>
                    </aside> */}
                </div>
            </div>
            <div className="button-container">
                <Link to="/Bookingregistration" className="button-link">
                    <button className="book-button">
                        Your Courses Has Booked
                    </button>
                </Link>
            </div>
        </>
        </div>
    )
}

export default Booked1;
