import React from 'react';
import './App.css';

function App() {
	let a = `https://firebasestorage.googleapis.com/v0/b/clashzin-web.appspot.com/o/miriam.jpg?alt=media&token=7ad283ff-6238-4045-bd38-8b22c52cf8e2`;
	return (
		<div className="App">
			<header className="App-header">
				<h1>GOSTOSA</h1>
				<img src={a} alt="gostosa" />
			</header>
		</div>
	);
}

export default App;
