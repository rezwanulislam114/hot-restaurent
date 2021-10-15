import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Food from '../Food/Food';
import './Foods.css';

const Foods = () => {
    const [menu, setMenu] = useState([]);
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('./menu.json')
            .then(res => res.json())
            .then(data => {
                setMenu(data)
                setItems(data)
            })
    }, [])

    const filterItem = catagory => {
        const updatedItems = menu.filter(item => {
            return item.catagory === catagory
        })
        setItems(updatedItems);
    }

    return (
        <Container>
            <div className="text-center">
                <button onClick={() => filterItem('breakfast')} className="menu-btn m-4">Breakfast</button>
                <button onClick={() => filterItem('lunch')} className="menu-btn m-4">Lunch</button>
                <button onClick={() => filterItem('dinner')} className="menu-btn m-4">Dinner</button>
                <button onClick={() => setItems(menu)} className="menu-btn m-4">All Items</button>
            </div>
            <div className="food-container">
                {
                    items.map(item => <Food key={item.id} details={item}></Food>)
                }
            </div>
        </Container>
    );
};

export default Foods;