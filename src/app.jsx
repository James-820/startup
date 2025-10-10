import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
        <div className='body bg-dark text-light'>
            <header className='sticky-top'>
                <nav className='navbar navbar-dark navbar-expand-lg'>
                    <div className='navbar-brand'>Habit.ly</div>
                    <div className='collapse navbar-collapse'>
                    <menu className='navbar-nav'>
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
                            <a className='nav-link' href="about.html">
                                About
                            </a>
                        </li>
                    </menu>
                    </div>
                </nav>
            </header>

            <main>App will be displayed here.</main>

            <footer className='sticky-bottom'>
                <div className="container-fluid">
                    <p className="text-muted">Creator information: James Day's <a href="https://github.com/James-820/startup">GitHub repository</a></p>
                </div>
            </footer>
        </div>
    );
}