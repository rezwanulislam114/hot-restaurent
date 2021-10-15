import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import './FoodDetails.css'

const FoodDetails = () => {
    const { id } = useParams();
    const [food, setFood] = useState([]);
    const history = useHistory();
    useEffect(() => {
        fetch('/menu.json')
            .then(res => res.json())
            .then(data => setFood(data.filter(item => item.id === parseInt(id))?.[0]));
    }, []);

    const { name, price, img, discription, catagory } = food

    return (
        <Container className="mt-5 d-flex flex-column-reverse flex-lg-row align-items-center justify-content-around">
            <div>
                <h1>{name}</h1>
                <h4>Catagory: {catagory}</h4>
                <p><i>{discription}</i></p>
                <h4>$<span className="text-danger fs-1">{price}</span></h4>
                <button onClick={() => history.push('/order')} className="btn btn-danger mt-4">Order Now</button>
            </div>
            <img className="details-image" src={img} alt="" />
        </Container>
    );
};

export default FoodDetails;