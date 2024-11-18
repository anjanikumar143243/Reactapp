import React, { useState, useEffect } from 'react';
import { Link, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Load the login state from localStorage
    return JSON.parse(localStorage.getItem('isLoggedIn')) || false;
  });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Store login state in localStorage
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/home');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div>
      {/* Render Navbar if not on the Login page */}
      {location.pathname !== '/' && (
        <Navbar expand="lg" className='fixed-top bg-body-tertiary shadow'>
          <Container>
            <Navbar.Brand>
              <Link to="/" className='navbar-brand text-success fw-semibold'>
                {/* <img src="Logo URL" alt="Logo" className="d-inline-block align-top" style={{ width: '50px', height: '50px' }} /> */}
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto justify-content-end w-100'>
                {isLoggedIn && (
                  <>
                    <Nav.Link as={Link} to="/home" className='text-uppercase'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/menu' className='text-uppercase'>Menu</Nav.Link>
                    <Nav.Link as={Link} to='/about' className='text-uppercase'>About</Nav.Link>
                    <Nav.Link as={Link} to='/contact' className='text-uppercase'>Contact</Nav.Link>
                    <Nav.Link onClick={handleLogout} className='text-uppercase'>Logout</Nav.Link>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}

      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        {isLoggedIn && <Route path="/home" element={<Home />} />}
        {isLoggedIn && <Route path="/menu" element={<Menu />} />}
        {isLoggedIn && <Route path="/about" element={<About />} />}
        {isLoggedIn && <Route path="/contact" element={<Contact />} />}
      </Routes>

      <footer className='bg-body-tertiary'>
        <p className='p-3 m-0 text-center'>copyright @ made by Anjani Kumar</p>
      </footer>
    </div>
  );
}

export default App;
