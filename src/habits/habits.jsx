import React from "react";
import './habits.css';

export function Habits () {
    return (
        <main>
            <div id="habits-bar" className="page-section">
                <div id="summary-btn" className="btn">Show Summary</div>
                <div className="card habit">
                    <div className="card-body">
                        <h5 className="card-title">Make Bed</h5>
                        <div className="card-text">
                            <ul>
                                <li>Streak: 7</li>
                                <li>Completed: When all blankets are folded</li>
                                <li>Share to: None</li>
                            </ul>
                        </div>
                        <div className="btn">Mark as Complete</div>
                    </div>
                </div>

                <div className="card habit">
                    <div className="card-body">
                        <h5 className="card-title">Water Plants</h5>
                        <div className="card-text">
                            <ul>
                                <li>Streak: 14</li>
                                <li>Completed: When all plants are watered</li>
                                <li>Share to: Group 1</li>
                            </ul>
                        </div>
                        <div className="btn">Mark as Complete</div>
                    </div>
                </div>
            </div>

            <div id="summary-bar" className="page-section">
                Summary info here
            </div>
        </main>
    );
}