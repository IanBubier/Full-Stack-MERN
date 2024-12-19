import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditShipPageTable = ({ shipToEdit }) => {
 
    const [shipName, setName]               = useState(shipToEdit.shipName);
    const [shipNation, setNation]           = useState(shipToEdit.shipNation);
    const [shipType, setType]               = useState(shipToEdit.shipType);
    const [shipClass, setClass]             = useState(shipToEdit.shipClass);
    const [shipTonnage, setTonnage]         = useState(shipToEdit.shipTonnage);
    const [complement, setComplement]       = useState(shipToEdit.complement);
    const [commissioned, setCommissioned]   = useState(shipToEdit.commissioned);
    
    const redirect = useNavigate();

    const editShip = async () => {
        const response = await fetch(`/ships/${shipToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                shipName: shipName, 
                shipNation: shipNation, 
                shipType: shipType, 
                shipClass: shipClass, 
                shipTonnage: shipTonnage, 
                complement: complement, 
                commissioned: commissioned
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`The ship was successfully updated.`);
        } else {
            const errMessage = await response.json();
            alert(`The ship could not be updated" ${response.status}. ${errMessage.Error}`);
        }
        redirect("/ShipsPage");
    }

    return (
        <>
        <article>
            <h2>Edit a ship</h2>
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

                    <td><label for="nation">S Nation</label>
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
                            onClick={editShip}
                            id="submit"
                        >Edit</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}
export default EditShipPageTable;