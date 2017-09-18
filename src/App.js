import React from 'react';
import {Icon, IconDocs} from 'react-icon-lib'
import './App.css';

const App = props => {
  return (
	<div className="App">
		<IconDocs/>
		<h1>React Icons<Icon slug="send"/></h1>
	</div>
  )
}

export default App
