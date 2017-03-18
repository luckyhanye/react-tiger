import React from "react"
import axios from "axios"



class Register extends React.Component{
  constructor(){
    super();
    this.state={

    }
  }
  componentWillMount(){
    axios.get('https://luckyhanye.github.io')
      .then(res=>console.log(res))
  }
  render(){
    return(
      <div>

      </div>
    )
  }
}


export default Register
