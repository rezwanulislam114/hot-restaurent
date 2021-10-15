import React from 'react';
import { useHistory } from 'react-router';
import './Food.css'

const Food = ({ details }) => {
    const { name, price, discription, img, id } = details;
    const history = useHistory();
    return (
        <div className="food">
            <div>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p>{discription}</p>
            </div>
            <div className="d-flex flex-column">
                <h3>$ <span className="text-danger">{price}</span></h3>
                <button onClick={() => history.push(`/food/${id}`)} className="btn btn-danger mt-3">See Details / Order Now</button>
            </div>
        </div>
    );
};

export default Food;