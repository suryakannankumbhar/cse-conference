import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Register from './Pages/Register/Register';
import Speakers from './Pages/Speakers/Speakers';
import Contact from './Pages/Contact/Contact';
import RegistrationData from './Pages/Register/RegistrationData/RegistrationData';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/speakers' element={<Speakers />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route
                        path='/registrations'
                        element={<RegistrationData />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
