import './index.css';
import React from 'react';
import * as ReactDOM from "react-dom/client";
import App from './App';

const rootContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(rootContainer);
root.render(<App/>);


// function Hello({ name, age }) {
//   return(
//     // Only one parent element allowed
//     <div>
//     <h1>Hey Hey, I`am {name} and I`am {age}</h1>
//   </div>
//   );
// }

// const rootContainer = document.querySelector("#root");
// const root = ReactDOM.createRoot(rootContainer);
// root.render(<Hello name ="Yano" age ="26"/>);
