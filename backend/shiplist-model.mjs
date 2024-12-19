// Models for the Ship Sunk Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Unable to connect to the ship collection.' });
    } else  {
        console.log('Success: Connection to the ship collection established.');
    }
});

// SCHEMA: Define the collection's schema.
const shipSchema = mongoose.Schema({
	shipName:       { type: String, required: true },
    shipNation:     { type: String, required: true },
    shipType:       { type: String, required: true },
    shipClass:      { type: String, required: true },
	shipTonnage:    { type: Number, required: true, min:[0, 'Minimum value of 0.'] },
    complement:     { type: Number, required: true, min:[0, 'Minimum value of 0.'] },
	commissioned:   { type: Date, required: true, default: Date.now }
}); 

// Compile the model from the schema 
// by defining the collection name "ships".
const ships = mongoose.model('Ships', shipSchema);


// CREATE model *****************************************
const createShip = async (shipName, shipNation, shipType, shipClass, shipTonnage, complement, commissioned) => {
    const ship = new ships({ 
        shipName: shipName, 
        shipNation: shipNation, 
        shipType: shipType, 
        shipClass: shipClass, 
        shipTonnage: shipTonnage, 
        complement: complement, 
        commissioned: commissioned 
    });
    return ship.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveShips = async () => {
    const query = ships.find().sort({shipName:1});
    return query.exec();
}

// RETRIEVE by ID
const retrieveShipByID = async (_id) => {
    const query = ships.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteShipById = async (_id) => {
    const result = await ships.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateShip = async (_id, shipName, shipNation, shipType, shipClass, shipTonnage, complement, commissioned) => {
    const result = await ships.replaceOne({_id: _id }, {
        shipName: shipName, 
        shipNation: shipNation, 
        shipType: shipType, 
        shipClass: shipClass, 
        shipTonnage: shipTonnage, 
        complement: complement, 
        commissioned: commissioned 
    });
    return { 
        _id: _id, 
        shipName: shipName, 
        shipNation: shipNation, 
        shipType: shipType, 
        shipClass: shipClass, 
        shipTonnage: shipTonnage, 
        complement: complement, 
        commissioned: commissioned 
    }
}

// EXPORT the variables for use in the controller file.
export { createShip, retrieveShips, retrieveShipByID, updateShip, deleteShipById }