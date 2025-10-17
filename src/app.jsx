import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { About } from './about/about';
import { Login } from './login/login';

export default function App() {
    return (
        <BrowserRouter>
        <div className='body'>
            <header className='sticky-top'>
                <nav className='navbar'>
                    <div className='navbar-brand'>Habit.ly</div>
                    <div className='navbar-nav'>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to=''>Home</NavLink>
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
                <Route path='/' element={<Login />} exact />
                <Route path='/about' element={<About />} />
                <Route path='/' element='' />
                <Route path='/' element='' />
                <Route path='*' element={<NotFound />} />
            </Routes>

            <footer className='sticky-bottom'>
                    <p className="text-muted">James Day's <a href="https://github.com/James-820/startup">GitHub repository</a></p>
            </footer>
        </div>
        </BrowserRouter>
    );
}

function NotFound() {
  return <main className="container-fluid text-center">404: Return to sender. Address unknown.</main>;
}