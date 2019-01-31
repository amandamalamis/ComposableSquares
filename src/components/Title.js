import React from 'react';


const Title = (props) => {
    const { text } = props; // A little bit of destructuring
    const fWeight = (props.isImportant) ? "bold" : "normal";
     
    return  React.createElement('h1', null, text), <h1 style={{color:props.color, fontWeight:fWeight, backgroundColor:props.backgroundColor}}>{props.text}</h1>;
}

export default Title;


