import React from 'react';
import ReactDOM from 'react-dom';

const HelloWorld = () => {
    return <h1>Hello World</h1>
}

const el = document.querySelector('#app');
ReactDOM.render(<HelloWorld />, el);