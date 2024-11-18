import React from 'react';
import './About.css';
import AboutChef1 from '../utils/img/about-chef1.jpg';
import AboutChef2 from '../utils/img/about-chef2.jpg';
import { ImageGallery } from '../components/ImageGallery';
import { Reviews } from '../components/Reviews';

function About() {
    return (
        <div className='about-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>About</h1>
                </div>
            </header>

            <div className='container my-5'>
            <p>Step into the culinary haven of Sri Siddhi Vinayaka Tiffin Services, where every bite tells a tale of taste and tradition. Immerse yourself in a world of delectable delights, where the aroma of freshly prepared tiffins fills the air, and each dish is a testament to the rich flavors of South Indian cuisine.Indulge in the comforting simplicity of soft, fluffy idlis, paired perfectly with an array of chutneys and sambar. Or treat yourself to the crispy perfection of vadas, served piping hot and irresistibly crunchy.
            </p>
            <p>From the iconic Mysore Bonda, with its crispy exterior and fluffy interior bursting with spices, to the tantalizing Chicken Dosa, where succulent chicken meets golden-brown dosa, every dish is a culinary masterpiece waiting to be savored.For those craving something hearty and satisfying, the uthappams await, topped with an assortment of flavorful toppings that promise to tantalize your taste buds with every bite.</p>
            

                <div className='row'>
                    <div className='col-lg-6'>
                        <img src={AboutChef1} className='img-fluid my-4' alt="" />
                    </div>
                    <div className='col-lg-6'>
                        <img src={AboutChef2} className='img-fluid my-4' alt="" />
                    </div>
                </div>

                <p>At Sri Siddhi Vinayaka Tiffin Services, it's not just about the food; it's about the experience. With a dedication to quality and authenticity, each tiffin is crafted with care and passion, ensuring that every bite is a culinary adventure worth savoring. So come, take a journey through the flavors of South India, and let Sri Siddhi Vinayaka Tiffin Services delight your senses with their exquisite offerings.</p>
                <p>Convenience is key at Sri Siddhi Vinayaka Tiffin Services. Whether you're craving a quick snack or planning a lavish feast, our diverse menu has something for everyone. With prompt delivery services, you can enjoy our mouthwatering tiffins in the comfort of your own home or office.</p>

                </div>
                
            {/* <div className='bg-dark text-light'>
                <ImageGallery />
            </div> */}
            <div className="mom my-5 d-flex justify-content-center align-items-center">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.386690601223!2d83.29777227463433!3d17.726409892951228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a394323950c2fd3%3A0x36aa9128149fab3e!2sRailway%20Station%20Rd%2C%20Mandavaripeta%2C%20P%20%26%20T%20Colony%2C%20Dondaparthy%2C%20Railway%20New%20Colony%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530016!5e0!3m2!1sen!2sin!4v1714405267619!5m2!1sen!2sin" 
                    width="600" 
                    height="450" 
                    style={{ border: 0, width: '1300px', height: '500px' }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className='my-5'>
                <Reviews />
            </div>
        </div>
    )
}

export default About;