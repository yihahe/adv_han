import React, { useState } from 'react';
import Greeting from './components/Greeting';
import Star from './components/Star';
import Checklist from './components/Checklist';

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

            <div style={{ marginTop: 24 }}>
                <h2 style={{ textAlign: 'center' }}>30 Under 30</h2>
                <Checklist
                    items={[
                        { id: 'a', text: 'Skydive' },
                    ]}
                    onChange={(updated) => console.log('Checklist updated', updated)}
                />
            </div>
        </div>
    );
};

export default App;