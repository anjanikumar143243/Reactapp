import React from 'react';
import './Contact.css';
import { ContactInfo } from '../components/ContactInfo';
import { Form } from 'react-bootstrap';
import { Reviews } from '../components/Reviews';
import emailjs from 'emailjs-com';

function Contact() {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_dtze0ll', 'template_2ocaeal', e.target, 'RcwslKI35JI9nR-9x')
            .then((result) => {
                console.log(result.text);
                alert("Your message has been sent successfully!");
            }, (error) => {
                console.log(error.text);
                alert("An error occurred, please try again.");
            });
        e.target.reset();
    };

    return (
        <div className='contact-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>Contact</h1>
                </div>
            </header>

            <div className='container my-5'>
                <div className='row'>
                    <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                        <ContactInfo />
                    </div>
                    <div className='col-lg-6 d-flex justify-content-center'>
                        <Form onSubmit={sendEmail}>
                            <Form.Group className='row mb-3'>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='first-name'>First Name</Form.Label>
                                    <Form.Control type='text' id='first-name' name="first_name" required />
                                </div>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='last-name'>Last Name</Form.Label>
                                    <Form.Control type='text' id='last-name' name="last_name" required />
                                </div>
                            </Form.Group>
                            <Form.Group className='row mb-3'>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='email-address'>Email Address</Form.Label>
                                    <Form.Control type='email' id='email-address' name="email" required />
                                </div>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='phone-number'>Phone Number</Form.Label>
                                    <Form.Control type='tel' id='phone-number' name="phone" />
                                </div>
                            </Form.Group>
                            <Form.Group className='row mb-3'>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='date'>Date</Form.Label>
                                    <Form.Control type='date' id='date' name="date" />
                                </div>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='guests-number'>Number Of Guests</Form.Label>
                                    <Form.Control type='number' id='guests-number' name="guests" />
                                </div>
                            </Form.Group>
                            <Form.Group className='mb-4'>
                                <Form.Label htmlFor='comments'>Comments</Form.Label>
                                <Form.Control as='textarea' id='comments' name="comments" />
                            </Form.Group>

                            <button type='submit' className='btn btn-success btn-lg'>Submit</button>
                        </Form>
                    </div>
                </div>
            </div>

            <div className='bg-dark text-light py-5'>
                <Reviews />
            </div>
        </div>
    );
}

export default Contact;
