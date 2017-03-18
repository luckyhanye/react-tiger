import React from "react"
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Dialog from 'material-ui/Dialog';


class Header extends React.Component{
  constructor(){
    super();
    this.state={
      open: false,
    }
  }
  handleOpen(){
    this.setState({open: true});
  };

  handleClose(){
    this.setState({open: false});
  };
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
        onTouchTap={this.handleClose.bind(this)}
      />,
    ];
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
          iconElementRight={
            <div>
              <FlatButton style={styles.register} label="注 册" onTouchTap={this.handleOpen.bind(this)}/>
              <FlatButton style={styles.login} label="登 录" onTouchTap={this.handleOpen.bind(this)}/>
              <Dialog
                title="Dialog With Actions"
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose.bind(this)}>
              aaaaaaaaaaa
              </Dialog>
            </div>}
        />
    </div>
    )
  }
}


export default Header
