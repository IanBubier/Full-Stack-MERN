// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages 

import HomePage from './pages/HomePage';
import TopicsPage from './pages/TopicsPage';
import ShipsPage from './pages/ShipsPage';

// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design:
//import AddShipPageForm from './pages/AddShipPageForm';
//import EditShipPageForm from './pages/EditShipPageForm';

// If your schema requires SHORT data input, then use the TABLE design.
import EditShipPageTable from './pages/EditShipPageTable';
import AddShipPageTable from './pages/AddShipPageTable';

// Define the function that renders the content in Routes, using State.
function App() {

  const [ship, setShipToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <h1>Ian Bubier</h1>
            <h3>CS290 Portfolio Project</h3>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
                    
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/TopicsPage" element={<TopicsPage/>} />
                    <Route path="/ShipsPage" element={<ShipsPage setShip={setShipToEdit}/>} />
                 
                    {/* Use these if your schema requires LONG data input: */}  
                    <Route path="/create" element={<AddShipPageTable shipToEdit={ship} />} /> 
                    <Route path="/update" element={<EditShipPageTable shipToEdit={ship} />} />

                </Routes>
              </section>
          </main>

          <footer>
            <p>&copy; 2024 Ian Bubier</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;