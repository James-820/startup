import React from "react";
import './login.css';

export function Login() {
    return (
        <main>
            <div className="card">
                <img className="card-img-top" src="placeholder.png" alt="Placeholder image" />
                <div className="card-body">
                    <h5 className="card-title">Login</h5>
                    <input id="username" type="text" placeholder="Username or Email"/>
                    <input id="password" type="password" placeholder="Password" />
                    <div id="submit" className="btn">Submit</div>
                </div>
            </div>
        </main>
    );
}