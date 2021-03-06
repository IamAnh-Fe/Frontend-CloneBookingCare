import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import {handleLoginApi} from '../../services/userService';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            usename: '',
            password: '',
            isShowPassword: false,
            errMessage: ''
        }
    }

    handleOnchangeUsername=(e)=>{
        this.setState({
            usename: e.target.value,
        })
    }

    handleOnchangePassword=(e)=>{
        this.setState({
            password: e.target.value,
        })
    }

    //login
    handleLogin=async()=>{
        this.setState({
            errMessage:''
        })

        try{
            let data= await handleLoginApi(this.state.usename, this.state.password);
            if(data && data.data.errCode !==0){
                this.setState({
                    errMessage: data.data.message
                })
            }
            if(data && data.data.errCode ===0){
                //todo
                this.props.userLoginSuccess(data.user)
                console.log('login success')
            }
        }catch(error){
            if(error.response){
                if(error.response.data){
                    this.setState({
                        errMessage: error.response.data.message
                    })
                }
            }   
        }
    }

    //show-hide password
    handleShowHidePassword=()=>{
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    //press enter
    handleKeyDown=(e)=>{
        if(e.key=== 'Enter' || e.keyCode=== 13){      //keyCode=13
            this.handleLogin();
        }
    }


    render() {
        return (
            <div className="login-bg">
                <div className="login-container">
                    <div className="login-content row">
                        <div className="login col-12 text-login"> Login </div>
                        <div className="col-12 form-group login-input">
                            <label>Username:</label>
                            <input type="text" className="form-control" 
                                placeholder="Enter your username..."
                                value={this.state.usename}
                                onChange={(e) => this.handleOnchangeUsername(e)}
                            />
                        </div>
                        
                        <div className="col-12 form-group login-input">
                            <label>Password:</label>
                            <div className="custom-input-password">
                                <input type={this.state.isShowPassword ? 'text': 'password'}
                                    className="form-control" 
                                    placeholder="Enter your password... "
                                    value={this.state.password}
                                    onChange={(e) => this.handleOnchangePassword(e)}
                                    onKeyDown={(e)=>this.handleKeyDown(e)}
                                /> 
                                <span onClick={()=> this.handleShowHidePassword()}>
                                    <i className={this.state.isShowPassword ? "far fa-eye" : "far fa-eye-slash" }></i>      
                                </span>
                            </div>
                        </div>

                        <div className="col-12 text-danger">
                            {this.state.errMessage}
                        </div>

                        <div className="col-12">
                            <button className="btn-login" onClick={()=> this.handleLogin()}>Login</button>
                        </div>

                        <div className="col-12">
                            <span className="forgot-password small">Forgot for Password ?</span>
                        </div>

                        <div className="col-12 text-center mt-3">
                            <span className="text-other-login"> Or login with: </span>
                        </div>

                        <div className="col-12 social-login">
                            <i className="fab fa-google-plus-g google"></i>
                            <i className="fab fa-twitter twitter"></i>
                            <i className="fab fa-facebook-f facebook"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess: (userInfor) => dispatch(actions.userLoginSuccess(userInfor))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);