//Este es el punto de entrada y nos dice donde va a hacer render nuestra pagina
import React from "react";
import { ReactDOM } from "react";
import { createRoot } from 'react-dom/client';
import App from './routes/App';
//ReactDOM.render(<App/>, document.getElementById('app'));
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App/>);