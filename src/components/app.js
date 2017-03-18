import React from "react"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from "./header.js"


class App extends React.Component{
  constructor(){
    super();
    this.state={

    }
  }
  render(){
    return(
      <MuiThemeProvider>
        <Header/>
      </MuiThemeProvider>
    )
  }
}


export default App
