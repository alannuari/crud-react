import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LayoutMaster from './components/LayoutMaster';
import Update from './components/Update';


function App() {
  
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LayoutMaster />} />
        <Route path='/update' element={<Update />} />
      </Routes>
    </Router>
  );
}

export default App;
