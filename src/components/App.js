import React from 'react';
import Title from './Title'; 

import './App.css';


const App = (props) => {
    return (
        <div>
            <Title text="Red on yellow!" color="red" backgroundColor= "yellow"/>
            <Title text="Green on pink!" color="green" backgroundColor="pink"/>
            <Title text="Purple on black!" color="purple" backgroundColor= "black" />
        </div>
    )
}

export default App;
