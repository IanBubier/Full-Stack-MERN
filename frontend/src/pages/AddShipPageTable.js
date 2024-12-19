import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddShipPageTable = () => {

    const [shipName, setName]               = useState(''); 
    const [shipNation, setNation]           = useState('');
    const [shipType, setType]               = useState('');
    const [shipClass, setClass]             = useState('');
    const [shipTonnage, setTonnage]         = useState('');
    const [complement, setComplement]       = useState('');
    const [commissioned, setCommissioned]   = useState('');
    
    const redirect = useNavigate();

    const addShip = async () => {
        const newShip = { shipName, shipNation, shipType, shipClass, shipTonnage, complement, commissioned };
        const response = await fetch('/ships', {
            method: 'post',
            body: JSON.stringify(newShip),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`The ship was successfully added.`);
        } else {
            alert(`The ship could not be added = ${response.status}`);
        }
        redirect("/ShipsPage");
    };


    return (
        <>
        <article>
            <h2>Add a ship</h2>
            <p>Paragraph about this page.</p>
            
            <table id="ships">
                <caption>Which ship are you adding?</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Nation</th>
                        <th>Type</th>
                        <th>Class</th>
                        <th>Tonnage</th>
                        <th>Complement</th>
                        <th>Commissioned</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="name">Ship Name</label>
                        <input
                            type="text"
                            placeholder="name"
                            value={shipName}
                            onChange={e => setName(e.target.value)} 
                            id="name" />
                    </td>

                    <td><label for="nation">Ship Nation</label>
                        <input
                            type="text"
                            value={shipNation}
                            placeholder="nation"
                            onChange={e => setNation(e.target.value)} 
                            id="nation" />
                    </td>

                    <td><label for="type">Ship Type</label>
                        <input
                            type="text"
                            placeholder="type"
                            value={shipType}
                            onChange={e => setType(e.target.value)} 
                            id="type" />
                    </td>

                    <td><label for="class">Ship Class</label>
                        <input
                            type="text"
                            placeholder="class"
                            value={shipClass}
                            onChange={e => setClass(e.target.value)} 
                            id="class" />
                    </td>

                    <td><label for="tonnage">Ship Tonnage</label>
                        <input
                            type="number"
                            placeholder="weight"
                            value={shipTonnage}
                            onChange={e => setTonnage(e.target.value)} 
                            id="tonnage" />
                    </td>

                    <td><label for="complement">Complement</label>
                        <input
                            type="number"
                            placeholder="crew"
                            value={complement}
                            onChange={e => setComplement(e.target.value)} 
                            id="complement" />
                    </td>

                    <td><label for="commissioned">Commissioned</label>
                        <input
                            type="date"
                            placeholder="date"
                            value={commissioned}
                            onChange={e => setCommissioned(e.target.value)} 
                            id="commissioned" />
                    </td>

                    <td>
                    <label for="submit">Commit</label>
                        <button
                            type="submit"
                            onClick={addShip}
                            id="submit"
                        >Add</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddShipPageTable;