import React from "react"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from "./header.js"
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class App extends React.Component{
  constructor(){
    super();
    this.state={

    }
  }
  render(){
    console.log(getMuiTheme());
    return(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Header/>
      </MuiThemeProvider>
    )
  }
}


export default App
