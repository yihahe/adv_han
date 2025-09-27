import React, { useState, useEffect } from 'react';
import Greeting from './components/Greeting';
import Star from './components/Star';
import Checklist from './components/Checklist';

const App = () => {
    const [name, setName] = useState(() => {
        try {
            const raw = window.localStorage.getItem('userName');
            return raw ? raw : '';
        } catch (e) {
            return '';
        }
    });

    useEffect(() => {
        try {
            if (name) window.localStorage.setItem('userName', name);
            else window.localStorage.removeItem('userName');
        } catch (e) {
            // ignore storage errors
        }
    }, [name]);

    const displayName = name.trim();
    const niceName = displayName ? displayName[0].toUpperCase() + displayName.slice(1) : '';

    return (
        <div className="app-container">
            <h1>{niceName ? `'Ello ${niceName},` : "'Ello"}</h1>

            <div className="name-row">
                <label htmlFor="nameInput">Who are you?</label>
                <Star />
                <input
                    id="nameInput"
                    className="name-input"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Friend"
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