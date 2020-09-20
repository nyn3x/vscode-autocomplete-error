import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ReactQueryDevtools } from 'react-query-devtools'

// import moment from 'moment/min/moment-with-locales';
import Moment from "react-moment";
import 'moment/locale/de';

// Moment.globalMoment = moment;
Moment.globalLocale = "de";
Moment.globalLocal = true;

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ReactQueryDevtools initialIsOpen />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
