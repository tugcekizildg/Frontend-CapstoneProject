import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../images/restaurantfood.jpg';

const Header = () => {
    return (
        <header className='header'>
            <section>
                <div className='banner'>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to='/booking'><button aria-label='On Click'>Reserve a table</button></Link>
                </div>
                <div className='banner-img'>
                    <img src={bannerImg} alt='a man shows the restaurant foods on a plate' />
                </div>
            </section>
        </header>
    );
};

export default Header;