import React from "react"
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
// import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import AccountCircle from 'material-ui/svg-icons/action/Account-circle';
import Snackbar from 'material-ui/Snackbar';


class Header extends React.Component{
  constructor(){
    super();
    this.state={
      open: false,         //登录注册表单的开关
      action:"signin",     //登录注册表单的选项
      username:'',         //表单用户名 value
      password:'',         //表单密码 value
      isLogin: false,      //是否登录
      user: '',            //登录后后台返回的用户名
      userId: '',          //登录后后台返回的用户ID
      openMenu:false,      //登录后后右上角弹出式菜单的开关
      snackBar:false,      //退出时弹出的提示框
    }
  }
  handleOpen(){
    this.setState({open: true});
  };

  handleClose(){
    this.setState({open: false});
  };
  handleUsername(e,username){
    this.setState({username:username.trim()})
  }
  handlePass(e,password){
    this.setState({password:password.trim()})
  }
  handleSubmit(){
    axios.post(`http://api.duopingshidai.com/user/${this.state.action}`,{username:this.state.username,password:this.state.password})
    // .then(res=>console.log("res====",res))
    .then(res=>{this.setState({open:false,isLogin:true,user:res.data.user,userId:res.data.userId})
      localStorage.setItem('user',res.data.user);
      localStorage.setItem('userId',res.data.userId)}
    )
    .catch(err=>{
      if(err.response){   //后台返回了2xx以外的错误码
        alert(err.response.data.msg);
      }else{
        console.log('error===',err);
      }
    })
  }
  componentWillMount(){
    if(localStorage.user && localStorage.userId){
      this.setState({isLogin:true,user:localStorage.user,userId:localStorage.userId})
    }
  }
  handleOnRequestChange(value){
    this.setState({openMenu:value})
  }
  handleMenuItem(e,child){
    if(child.props.value==="3"){
      this.logout()
    }
  }
  logout(){
    // console.log("11111");

    axios.get('http://api.duopingshidai.com/user/logout')
    .then(res=>{
      this.setState({isLogin:false,user:'',userId:'',snackBar:true})
      localStorage.user=''
      localStorage.userId=''}

    )
  }
  render(){
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose.bind(this)}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleSubmit.bind(this)}
      />,
    ];
    let rightIcon = this.state.isLogin ?
      <IconMenu
        iconButtonElement={<IconButton><AccountCircle /></IconButton>}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
        open={this.state.openMenu}
        onRequestChange={this.handleOnRequestChange.bind(this)}
        onItemTouchTap={this.handleMenuItem.bind(this)}>
        <MenuItem value="1" primaryText={this.state.user} />
        <MenuItem value="2" primaryText="个人中心" />
        <MenuItem value="3" primaryText="退出" />
      </IconMenu>:
        <FlatButton label="登录/注册" onTouchTap={this.handleOpen.bind(this)}/>
    const styles = {
      title: {
        cursor: 'pointer',
      },
      register:{
        backgroundColor:"#70e9f4",
        marginRight:"3px",
        color:'#f9a94b',
        marginTop:'5px'
      },
      login:{
        backgroundColor:"#70e9f4",
        color:'#f9a94b',
        marginTop:'5px'
      }

    };
    return(
      <div>
        <AppBar
          title={<span style={styles.title}>目录</span>}
          // onTitleTouchTap={this.handleTouchTap.bind(this)}
          iconElementRight={rightIcon}
        />
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose.bind(this)}>
          <FlatButton label="注 册" primary={this.state.action=='signup'?true:false} onTouchTap={()=>this.setState({action:'signup'})}/>
          <FlatButton label="登 录" primary={this.state.action=='signin'?true:false} onTouchTap={()=>this.setState({action:'signin'})}/>
          <div>
            <TextField
              hintText="username"
              floatingLabelText="username"
              onChange={this.handleUsername.bind(this)}
            /><br />
            <br />
            <TextField
              hintText="Password Field"
             floatingLabelText="Password"
             type="password"
             onChange={this.handlePass.bind(this)}
            /><br />
          </div>
        </Dialog>
        <Snackbar bodyStyle={{textAlign:"center"}}
          open={this.state.snackBar}
          message="成功退出用户界面"
          autoHideDuration={2000}
          onRequestClose={()=>this.setState({snackBar:false})}
        />
    </div>
    )
  }
}


export default Header
