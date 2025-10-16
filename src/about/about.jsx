import React from 'react';
import './about.css';

export function About() {
    return (
        <main>
            <h2 id="about-heading">About <span>Habit.ly</span></h2>
            <div class="card">
                <div class="card-body">
                    <p class="card-text">
                        Habit.ly was first created by James Day, then a student at Brigham Young University in Provo, Utah. His goal was to create a 
                        habit tracker that would leverage group accountability to support people in their quest for progress. Later, he got super, 
                        super rich, and now lives on a private island somewhere where he can make more web apps and paint his minis in peace.
                    </p>
                    <p class="card-text">
                        If you have questions or need customer support, that's really too bad. We don't have any of that stuff yet. Just be patient for now. 
                        In the meantime, here's a quote by a person:
                    </p>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <p class="card-text" id="inspiring-quote">
                        "Yesterday is history, tomorrow is a mystery, and today is a gift... that is why it is called the 'present'." 
                        -- Master Oogway, from Kung Fu Panda
                    </p>
                </div>
            </div>

            <div class="pic-frame">
                <img id="random-pic" src="../../public/placeholder.png" alt="Random cool picture" />
            </div>

        </main>
    );
}