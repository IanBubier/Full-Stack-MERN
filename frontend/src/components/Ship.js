import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { VscEdit, VscChromeClose } from "react-icons/vsc";

function Ship({ ship, onEdit, onDelete }) {
    return (
        <tr>
            <td>{ship.shipName}</td>
            <td>{ship.shipNation}</td>
            <td>{ship.shipType}</td>
            <td>{ship.shipClass}</td>
            <td>{ship.shipTonnage}</td>
            <td>{ship.complement}</td>
            <td>{ship.commissioned.slice(0,10)}</td>

            {/* Update these icons to something that matches your style. */}
            <td><i><VscEdit onClick={() => onEdit(ship)} /></i></td>
            <td><VscChromeClose onClick={() => onDelete(ship._id)} /></td>
        </tr>
    );
}

export default Ship;