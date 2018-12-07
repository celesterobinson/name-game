import React, { Component } from 'react';

import './styles/App.css';

/**
 * React component using an ES6 class that extends the class React.Component
 * Render is the only required method for a React component
 * React uses the return value from this method to determine what to render to the page
 */
class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Hello, World!</h1>
			</div>
		);
	}
}

export default App;
