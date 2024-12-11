import './index.css';
import * as ReactDOM from 'react-dom/client';
import App from './App';
// function Hello({name, age}) {

//   return  <div>
//             <h1>Hi {name}, from React!</h1>
//             <p>I'm building this in the JSX main.jsx file for your {age} year birthday</p>
//           </div>;
// }
const rootDiv = document.querySelector("#root");
const root = ReactDOM.createRoot(rootDiv);
root.render(
    <App/>
  );
