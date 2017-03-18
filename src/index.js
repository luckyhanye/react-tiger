import React from "react"
import ReactDOM from "react-dom"
import "./main.css"

import Routers from "./components/routers.js"

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();




ReactDOM.render(<Routers/>,document.getElementById("app"))
