import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as firebase from "firebase";

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

let config = {
    apiKey: "AIzaSyBS94vr7HMROY6DHXASqgZ6Sly5oP6QUDo",
    authDomain: "antonia-22dba.firebaseapp.com",
    databaseURL: "https://antonia-22dba.firebaseio.com",
    projectId: "antonia-22dba",
    storageBucket: "antonia-22dba.appspot.com",
    messagingSenderId: "683724067327"
};
firebase.initializeApp(config);