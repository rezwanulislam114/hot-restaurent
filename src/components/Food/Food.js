import React from 'react';
import './Food.css'

const Food = ({ details }) => {
    const { name, price, discription, img } = details;
    return (
        <div className="food">
            <div>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p>{discription}</p>
            </div>
            <h3>$ <span className="text-danger">{price}</span></h3>
        </div>
    );
};

export default Food;