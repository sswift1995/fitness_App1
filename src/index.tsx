import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root') as HTMLDivElement; // Add the type here

const root = ReactDOM.createroot(rootElement);
root.render(
    <BrowserRouter>
        <App id={undefined} />
    </BrowserRouter>
);
