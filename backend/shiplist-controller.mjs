// Controllers for the Ship Collection

import 'dotenv/config';
import express from 'express';
import * as ships from './shiplist-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/ships', (req,res) => { 
    ships.createShip(
        req.body.shipName, 
        req.body.shipNation, 
        req.body.shipType, 
        req.body.shipClass, 
        req.body.shipTonnage, 
        req.body.complement, 
        req.body.commissioned
        )
        .then(ship => {
            console.log(`"${ship.shipName}" was added to the collection.`);
            res.status(201).json(ship);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: '"The ship was not added to the collection.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/ships', (req, res) => {
    ships.retrieveShips()
        .then(ships => { 
            if (ships !== null) {
                console.log(`All ships were retrieved from the collection.`);
                res.json(ships);
            } else {
                res.status(404).json({ Error: 'The collection could not be found.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'The collection could not be retrieved.' });
        });
});


// RETRIEVE by ID controller
app.get('/ships/:_id', (req, res) => {
    ships.retrieveShipByID(req.params._id)
    .then(ship => { 
        if (ship !== null) {
            console.log(`"${ship.shipName}" was retrieved, based on its ID.`);
            res.json(ship);
        } else {
            res.status(404).json({ Error: 'A ship with this ID could not be found.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'A ship with this ID could not be retrieved.' });
    });

});


// UPDATE controller ************************************
app.put('/ships/:_id', (req, res) => {
    ships.updateShip(
        req.params._id, 
        req.body.shipName, 
        req.body.shipNation, 
        req.body.shipType, 
        req.body.shipClass, 
        req.body.shipTonnage, 
        req.body.complement, 
        req.body.commissioned
    )
    .then(ship => {
        console.log(`"${ship.shipName}" was updated.`);
        res.json(ship);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'The ship was not updated.' });
    });
});


// DELETE Controller ******************************
app.delete('/ships/:_id', (req, res) => {
    ships.deleteShipById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} ship was deleted.`);
                res.status(200).send({ Success: 'The ship with this ID was deleted.' });
            } else {
                res.status(404).json({ Error: 'A ship with this ID could not be found.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'A ship with this ID could not be deleted.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});