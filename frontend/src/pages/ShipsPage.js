import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import ShipList from '../components/ShipList';


function ShipsPage({ setShip }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [ships, setShips] = useState([]);

    // RETRIEVE the entire list of ships
    const loadShips = async () => {
        const response = await fetch('/ships');
        const ships = await response.json();
        setShips(ships);
    } 
    

    // UPDATE a single ship
    const onEditShip = async ship => {
        setShip(ship);
        redirect("/update");
    }


    // DELETE a single ship  
    const onDeleteShip = async _id => {
        const response = await fetch(`/ships/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/ships');
            const ships = await getResponse.json();
            setShips(ships);
        } else {
            console.error(`The ship could not be deleted = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the ships
    useEffect(() => {
        loadShips();
    }, []);

    // DISPLAY the ships
    return (
        <>
            <h2>List of Ships</h2>
            <p>This is a list of ships sorted alphabetically by name. It includes information on each ship's nation, type, class, tonnage, crew complement, and commissioning date. 
                Use the buttons below to add, edit, or delete individual ship entries.</p>
            <ShipList 
                ships={ships} 
                onEdit={onEditShip} 
                onDelete={onDeleteShip} 
            />
        </>
    );
}

export default ShipsPage;