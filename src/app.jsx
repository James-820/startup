import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { About } from './about/about';
import { Nav } from 'react-bootstrap';

export default function App() {
    return (
        <BrowserRouter>
        <div className='body'>
            <header className='sticky-top'>
                <nav className='navbar'>
                    <div className='navbar-brand'>Habit.ly</div>
                    <div className='navbar-nav'>
                        <li className='nav-item'>
                            <a className='nav-link' href="index.html">Home</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="habits.html">My Habits</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="">My Groups</a>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to="about">About</NavLink>
                        </li>
                    </div>
                </nav>
            </header>

            <Routes>
                <Route path='/about' element={<About />} />
            </Routes>

            <footer className='sticky-bottom'>
                    <p className="text-muted">James Day's <a href="https://github.com/James-820/startup">GitHub repository</a></p>
            </footer>
        </div>
        </BrowserRouter>
    );
}