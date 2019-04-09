import React from 'react';
import score from './score.js'

const Dashboard = props => {
  
}

export default Dashboard;

// - provide a button that the person in charge can press every time there is a `strike`, `ball`, `foul` or `hit`.
// - there is **NO** need to specify the type of hit (single, double, etc).
// - changes recorded on this component should update the information shown by the `Display` component.

// strike, ball, foul, hit buttons

// ### Count Rules


// - balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
// - balls and strikes reset to 0 when a `hit` is recorded.
// - a `foul` increases strikes up to 2. With no strikes, a foul makes it 1 strike. With 1 strike, a foul makes it 2 strikes. With two strikes a foul has no effect, count stays at 2 strikes.