import React from "react";
import './login.css';

export function Login() {
    return (
        <main>
            <div class="card">
                <img class="card-img-top" src="placeholder.png" alt="Placeholder image" />
                <div class="card-body">
                    <h5 class="card-title">Login</h5>
                    <input id="username" type="text" placeholder="Username or Email"/>
                    <input id="password" type="password" placeholder="Password" />
                    <div id="submit" class="btn">Submit</div>
                </div>
            </div>
        </main>
    );
}