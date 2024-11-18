import React from 'react';
import './Menu.css';
import { Card, CardBody, CardText, CardTitle, Button } from 'react-bootstrap';
import bonda1 from '../utils/img/bonda1.jpeg';
import Uthappam from '../utils/img/Uthappam.jpeg';
import DosaImg from '../utils/img/masala.jpeg';
import PuriImg from '../utils/img/puri.jpeg';
import chicken from '../utils/img/chickendosa.jpg';
// Indian breakfast menu items with unique purchase links
const breakfast = [
    {
        id: 1,
        name: 'Bonda',
        description: 'A crispy, golden South Indian fritter made with spiced flour batter.',
        price: '₹40',
        img: bonda1,
        purchaseLink: 'https://cosmofeed.com/vp/661b6e22fac16e0013e662ae'
    },
    {
        id: 2,
        name: 'Masala Dosa',
        description: 'A thin, crispy rice crepe filled with a mildly spiced mashed potato mixture.',
        price: '₹50',
        img: DosaImg,
        purchaseLink: 'https://cosmofeed.com/vp/661b6f542ab6e8001340b60c'
    },
    {
        
        id: 3,
        name: 'Uthappam',
        description: 'A traditional Indian pancake made from fermented rice and lentils.',
        price: '₹30',
        img: Uthappam,
        purchaseLink: 'https://cosmofeed.com/vp/661b6fbcca35140013ace123'
    },
    {
        id: 4,
        name: 'AlooPuri',
        description: 'Fluffy, deep-fried bread served with a flavorful potato curry seasoned with spices.',
        price: '₹40',
        img: PuriImg,
        purchaseLink: 'https://cosmofeed.com/vp/661b6ee8fac16e0013e66c5a'
    },
    {
        id: 5,
        name: 'Chicken Dosa',
        description: 'A crispy, golden-brown rice pancake filled with a spiced, tender chicken filling.',
        price: '₹80',
        img: chicken,
        purchaseLink: 'https://cosmofeed.com/vp/661b41f6fac16e0013e4614b'
    },
];

function Menu() {
    const handlePurchase = (link) => {
        window.location.href = link; // Redirects to the purchase link
    };

    return (
        <div className='menu-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-dark'>Indian Breakfast Menu</h1>
                </div>
            </header>

            <div className='breakfast my-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 text-uppercase fw-bold text-success'>Breakfast</h2>
                    <div className='row'>
                        {breakfast.map((item) => (
                            <div key={item.id} className='col-md-6 mb-4 d-flex justify-content-center'>
                                <Card className='border-0 shadow-sm w-75'>
                                    <Card.Img variant="top" src={item.img} alt={item.name} className="menu-image rounded-top" />
                                    <CardBody>
                                        <CardTitle className='text-center fs-4'>{item.name}</CardTitle>
                                        <CardText className='text-center text-muted'>{item.description}</CardText>
                                        <CardText className='text-center fs-5 fw-bold text-success'>{item.price}</CardText>
                                        <Button
                                            variant="success"
                                            className='w-100'
                                            onClick={() => handlePurchase(item.purchaseLink)}
                                        >
                                            Purchase
                                        </Button>
                                    </CardBody>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
