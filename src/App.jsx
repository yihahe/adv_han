import React, { useState } from 'react';
import Greeting from './components/Greeting';
import Star from './components/Star';

const App = () => {
    const [name, setName] = useState('');

    return (
        <div className="app-container">
            <h1>'Ello</h1>

            <div className="name-row">
                <label htmlFor="nameInput">Who are you?</label>
                <Star />
                <input
                    id="nameInput"
                    className="name-input"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                />
            </div>

            <div style={{ marginTop: 16 }}>
                <Greeting name={name || undefined} />
            </div>
        </div>
    );
};

export default App;