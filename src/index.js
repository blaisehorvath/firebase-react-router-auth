import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {FirebaseContext} from "./firbase/firebaseContext"
import {initFirebase} from "./firbase/initFirebase"

const firebaseApp = initFirebase()

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={firebaseApp}>
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
