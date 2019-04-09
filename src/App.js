import React from 'react';
import Dashboard from './Dashboard';

// - provide a button that the person in charge can press every time there is a `strike`, `ball`, `foul` or `hit`.
// - there is **NO** need to specify the type of hit (single, double, etc).
// - changes recorded on this component should update the information shown by the `Display` component.

// strike, ball, foul, hit buttons

const App = props => {
    return (
        <Dashboard />
    );
}

export default App;
