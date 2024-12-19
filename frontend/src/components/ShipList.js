import React from 'react';
import Ship from './Ship';

import { Link } from 'react-router-dom';

import { VscAdd } from "react-icons/vsc";

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function ShipList({ ships, onDelete, onEdit }) {
    return (
        <table id="ships">
            <caption><Link to="/create"><i><VscAdd/></i><strong> Add a Ship </strong><i><VscAdd/></i></Link></caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Nation</th>
                    <th>Type</th>
                    <th>Class</th>
                    <th>Tonnage</th>
                    <th>Complement</th>
                    <th>Commissioned</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {ships.map((ship, i) => 
                    <Ship 
                        ship={ship} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default ShipList;
