import React from "react";
import { Card, CardBody, CardText, CardFooter, CardTitle } from 'react-bootstrap';
import './Reviews.css';
import Person1 from '../utils/img/person1.jpg';
import Person2 from '../utils/img/person2.jpg';
import Person3 from '../utils/img/person3.jpg';
import Person4 from '../utils/img/person4.jpg';

export function Reviews() {
    return (
        <div className="reviews-section container">
            <h2 className="text-center mb-5 text-uppercase fw-bold fs-1">Reviews</h2>
            <div className="row g-4">
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                The service is excellent, and the food quality is always top-notch. I especially love the Chicken Dosa and the crispy Mysore Bonda. It's my go-to for a wholesome and satisfying meal.                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            {/* <img src={Person1} className="img-fluid rounded-circle mx-3 shadow" alt="" /> */}
                            <CardTitle className="text-success">Navya Sri</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
I was impressed with the variety on the menu! They have something for everyone, and each dish is prepared with care. The prompt delivery and friendly service make the experience even better.                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            {/* <img src={Person2} className="img-fluid rounded-circle mx-3 shadow" alt="" /> */}
                            <CardTitle className="text-success">Lokesh Kumar</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                Their tiffins are perfect for anyone craving authentic South Indian flavors. Everything is fresh, and the packaging keeps the food warm and delicious. A must-try for all food lovers!                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            {/* <img src={Person3} className="img-fluid rounded-circle mx-3 shadow" alt="" /> */}
                            <CardTitle className="text-success">Madhavi Sri</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                The idlis and vadas are incredibly soft and tasty. I appreciate the attention to detail in each dish, and the delivery is always on time. A fantastic choice for a quick, delicious meal!                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            {/* <img src={Person4} className="img-fluid rounded-circle mx-3 shadow" alt="" /> */}
                            <CardTitle className="text-success">Pavani </CardTitle>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}