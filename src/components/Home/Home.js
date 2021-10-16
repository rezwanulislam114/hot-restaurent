import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import About from '../About/About';
import Food from '../Food/Food';
import './Home.css'

const Home = () => {
    const [menu, setMenu] = useState([]);
    const [items, setItems] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [error, setError] = useState('');
    const [about, setAbout] = useState([]);

    useEffect(() => {
        fetch('./menu.json')
            .then(res => res.json())
            .then(data => {
                setMenu(data)
                setItems(data.slice(0, 6))
            })
    }, [])

    useEffect(() => {
        fetch('./about.json')
            .then(res => res.json())
            .then(data => {
                setAbout(data)
            })
    }, [])

    const handleSearch = e => {
        setSearchText(e.target.value);
        const searchedItems = menu.filter(item => {
            return item.name.toLowerCase().includes(searchText.toLowerCase())
        })
        if (searchedItems.length) {
            setItems(searchedItems);
            setError('')
        }
        else {
            setItems([]);
            setError('Sorry. No item by this name. Check our menu please.');
        }
    }

    const filterItem = catagory => {
        const updatedItems = menu.filter(item => {
            return item.catagory === catagory
        })
        setItems(updatedItems);
        setError('')
    }

    return (
        <>
            <div className="banner">
                <h1>Best Food Waiting For You.</h1>
                <div className="search-box">
                    <input onChange={handleSearch} type="text" />
                    <button>Search</button>
                </div>
            </div>
            <Container>
                <div className="menu-btns">
                    <button onClick={() => filterItem('breakfast')} className="menu-btn">Breakfast</button>
                    <button onClick={() => filterItem('lunch')} className="menu-btn">Lunch</button>
                    <button onClick={() => filterItem('dinner')} className="menu-btn">Dinner</button>
                    <button onClick={() => setItems(menu)} className="menu-btn">All Items</button>
                </div>
                <h4 className="text-danger text-center">{error}</h4>
                <div className="food-container">
                    {
                        items.map(item => <Food key={item.id} details={item}></Food>)
                    }
                </div>
                <h1 className="text-center mt-5">Why Choose Us</h1>
                <div className="about">
                    {
                        about.map(singleAb => <About key={singleAb.title} details={singleAb}></About>)
                    }
                </div>
            </Container>
        </>
    );
};

export default Home;