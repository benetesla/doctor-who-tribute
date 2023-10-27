import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { DoctorWhoTribute } from './screens/DoctorWhoTribute';
function App() {

  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<DoctorWhoTribute />} />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
