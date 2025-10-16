import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
        <div className='body'>
            <header className='sticky-top'>
                <nav className='navbar'>
                    <div className='navbar-brand'>Habit.ly</div>
                    <div className='navbar-nav'>
                        <li className='nav-item'>
                            <a className='nav-link' href="index.html">
                                Home
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="habits.html">
                                My Habits
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="">
                                My Groups
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="about.html">
                                About
                            </a>
                        </li>
                    </div>
                </nav>
            </header>

            <main>App will be displayed here.</main>

            <footer className='sticky-bottom'>
                    <p className="text-muted">James Day's <a href="https://github.com/James-820/startup">GitHub repository</a></p>
            </footer>
        </div>
    );
}