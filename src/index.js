import React from 'react'; // import the React library
import ReactDOM from 'react-dom'; // import the ReactDOM library
// we can create a simple element to display on our HTML page
// const App = React.createElement("h1", null, "Hello World");

import App from './components/App';

// with JSX we can perform the same React.createElement() call with the following:
// const App = <h1>Hello World</h1>;
// import React, ReactDOM statements

ReactDOM.render(<App />, document.getElementById("root"));
// equivalent to:
// ReactDOM.render(App(), document.getElementById("root"));
