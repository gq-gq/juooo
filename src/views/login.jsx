import React, { Component, Fragment } from 'react'
import axios from'axios'
import '../assets/css/login.css'

export default class login extends Component {
    constructor(props){
        super(props)
        this.reg={
            phone:/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/,
            email:/^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/
        }
        this.state={
            phone:{
                phone:'',
                style:{
                    display:'none'
                }
            },
            password:{
                password:'',
                style:{
                    display:'none'
                }
            },
            eyes:false,
            type:'password',
            style:{
                opacity: "0.4"
            },
            login:true,
            code:false,
        }
    }
    changeCon(vl,e){
        if(e.target.value){
            this.setState({
                [vl]:{
                    [vl]:e.target.value,
                    style:{
                        display:'block'
                    }
                }
            })
        }else{
            this.setState({
                [vl]:{
                    [vl]:e.target.value,
                    style:{
                        display:'none'
                    }
                }
            })
        }
        if(this.state.phone.phone&&this.state.password.password){
            this.setState({
                style:{
                    opacity:'1'
                }
            })
        }
    }
    changeType(e){
        
        this.state.eyes?this.setState({
           eyes:!this.state.eyes ,
           type:'password'
        }):this.setState({
            eyes:!this.state.eyes ,
            type:'text'
         })
    }
    changeLogin(){
        this.setState({
            login:!this.state.login
        })
    }
    async  getCode(){
        if(this.state.phone.phone&&this.state.password.password){
            if(this.reg.phone.test(this.state.phone.phone)){
                this.setState({
                    code:true
                })
                const data  = await axios.post('/login',{
                    userCode:this.state.phone.phone
                })
            }
        }else{
            return
        }
    }
    render() {
        const passLogin = <Fragment>
            <div  className={'login-phone'}>
                    <input type="text" placeholder={'请输入手机号'} value={this.state.phone.phone} onChange={this.changeCon.bind(this,'phone')}/>
                    <img className={'login-yan'} style={this.state.phone.style} src={require('../assets/img/xiao.png')} alt=""
                    onClick={()=>{
                        this.setState({
                            phone:{
                                phone:"",
                                style:{
                                    display:'none'
                                }
                            },
                            style:{
                                opacity:'0.4'
                            }
                        })
                    }}
                    />
                </div>
                <div  className={'login-phone'}>
                    <input type={this.state.type} className={'login-password'} placeholder={'请输入密码'} value={this.state.password.password} onChange={this.changeCon.bind(this,'password')}/>
                    <img  className={'login-cha'}  src={require('../assets/img/xiao.png')} alt="" style={this.state.password.style}
                    onClick={()=>{
                        this.setState({
                            password:{
                                password:"",
                                style:{
                                    display:'none'
                                }
                            },
                            style:{
                                opacity:'0.4'
                            }
                        })
                    }}
                    />
                    <img  className={'login-yan'}  src={!this.state.eyes?require('../assets/img/bi.png'):require('../assets/img/zheng.png')} alt=""
                    onClick={this.changeType.bind(this)}
                    />
                </div>
                <input type="button" style={this.state.style} value={"登录"} className={'login-btn'}/>
                <div className={'login-tab'}>
                    <span style={{float:'left'}}>忘记密码</span>
                    <span style={{float:'right'}} onClick={this.changeLogin.bind(this)}>验证码登录/注册</span>
                </div>
        </Fragment>
        const codeLogin = <Fragment>
            <div  className={'login-phone'}>
                <span style={{width:'30px',height:'16px',display:'inline-block',color:'#ff6743',fontSize:'12px',marginRight:''}}>+86</span>
                    <input type="text" placeholder={'请输入手机号'} value={this.state.phone.phone} onChange={this.changeCon.bind(this,'phone')} style={{width:'235px'}}/>
                </div>
                <div  className={'login-phone'}>
                    <input type={'text'} className={'login-password'} placeholder={'请输入验证码'} value={this.state.password.password} onChange={this.changeCon.bind(this,'password')}/>
                </div>
                <p style={{fontSize:'10px',color:'#999',width:'265px',margin:'10px 27px 0 27px',textAlign:'left'}}>未注册的手机号将自动创建会员账号</p>
                <input type="button" style={this.state.style} value={"获取短信验证码"} className={'login-btn'} onClick={()=>{
                    this.setState({
                        code:true
                    })
                }}/>
                <div className={'login-tab'}>
                    <span style={{float:'left'}}>邮箱注册</span>
                    <span style={{float:'right'}} onClick={this.changeLogin.bind(this)}>密码登录</span>
                </div>
        </Fragment>
        const loginPage = <Fragment>
             
                <div className={'login-logo'}>
                    <img src={'https://m.juooo.com/static/img/login_logo.4a43235.png'} style={{width:'137px',height:'43px'}}/>
                </div>
                {
                    this.state.login?passLogin:codeLogin
                }
                <div className={'login-other'}>
                    <p className={'login-other-title'}>
                        <span>
                            其他登录方式
                        </span>
                    </p>
                    <div className={'login-other-ways'}>
                        <img className={'login-other-way'} src={require('../assets/img/qq.png')} alt=""/>
                        <img className={'login-other-way'} src={require('../assets/img/weibo.png')} alt=""/>
                    </div>
                </div>
        </Fragment>
        const codePage = <Fragment>
            <h1 className={'login-code-title'}>验证码</h1>
            <p className={'login-code-little'}>验证码已发送至手机尾号{this.state.phone.phone}</p>
            <div className={'login-code-code'}>
                <div contentEditable={"true"} className={'login-code-item'}>1</div>
                <div contentEditable={"true"} className={'login-code-item'}>2</div>
                <div contentEditable={"true"} className={'login-code-item'}>3</div>
                <div contentEditable={"true"} className={'login-code-item'}>4</div>
            </div>
            <p className={'login-code-time'}>
                <span>58</span> <span>秒后重新获取验证码</span>
            </p>
        </Fragment>
        return (
            <div>
                <div className={'login-header'}>
                    <i className={'iconfont icon-xiaoyuhao'} onClick={()=>{
                        this.props.history.push(-1)
                    }}></i>
                </div>
               {
                   this.state.code?codePage:loginPage 
               }
            </div>
        )
    }
}
