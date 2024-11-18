import React from 'react';
import { MenuBtn } from '../components/MenuBtn';
import './Home.css';
import AboutImg from '../utils/img/mix.jpeg';
import { Link } from 'react-router-dom';
import { ImageGallery } from '../components/ImageGallery';
import { ContactInfo } from '../components/ContactInfo';
import ContactImage from '../utils/img/contact.jpeg';

function Home() {
    return (
        <div className='home-page'>
            <header className='h-100 min-vh-100 d-flex align-items-center text-light shadow'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6 d-flex d-sm-block flex-column align-items-center'>
                            <h2 className='mb-0 text-black fw-bold'>Welcome To</h2><br />
                            <h1 className='mb-5 text-black fw-bold text-center text-sm-start small-font'>Sri Siddhi Vinayaka Tiffin Services</h1>
                            <MenuBtn />
                        </div>
                    </div>
                </div>
            </header>

            <div className='container my-5'>
                <div className='row'>
                    <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
                        <img src={AboutImg} className='img-fluid w-50' alt="about img" />
                    </div>
                    <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center'>
                        <h2 className='fs-1 mb-5 text-uppercase fw-bold'>About Us</h2>
                        <p>Step into the culinary haven of Sri Siddhi Vinayaka Tiffin Services, where every bite tells a tale of taste and tradition. Immerse yourself in a world of delectable delights, where the aroma of freshly prepared tiffins fills the air, and each dish is a testament to the rich flavors of South Indian cuisine.

</p>
                        <p className='mb-5'>For those craving something hearty and satisfying, the uthappams await, topped with an assortment of flavorful toppings that promise to tantalize your taste buds with every bite.</p>
                        <Link to="/about">
                            <button type='button' className='btn btn-outline-success btn-lg'>More About Us</button>
                        </Link>
                    </div>
                </div>
            </div>

           <div className='menu-section py-5 text-light shadow'>
    <div className='container d-flex flex-column align-items-center'>
        <h2 className='fs-1 mb-5 text-uppercase fw-bold'>Our Favorites</h2>
        <div className='row mb-5 w-100 justify-content-center'>
            <div className='col-lg-6 d-flex flex-column align-items-center'>
                <h3 className='fs-2 mb-5'> </h3>
                <ul className='px-0'>
                    <li className='d-flex justify-content-between'>
                        <p className='fs-3 mx-2'>Chicken Dosa</p>
                        <p className='fs-3 mx-2 text-success fw-bold'>₹80</p>
                    </li>
                    <li className='d-flex justify-content-between'>
                        <p className='fs-3 mx-2'>Uthappam</p>
                        <p className='fs-3 mx-2 text-success fw-bold'>₹30</p>
                    </li>
                    <li className='d-flex justify-content-between'>
                        <p className='fs-3 mx-2'>Aloo Puri</p>
                        <p className='fs-3 mx-2 text-success fw-bold'>₹40</p>
                    </li>
                </ul>
            </div>
        </div>
        <MenuBtn />
    </div>
</div>


            <ImageGallery />

            <div className='bg-dark text-light py-5 shadow'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0'>
                            <ContactInfo />
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={ContactImage} className='img-fluid w-50' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;