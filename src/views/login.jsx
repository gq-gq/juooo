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
            time:60,
            a:'',
            b:'',
            c:'',
            d:''
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
        let timer = null;
        if(this.state.phone.phone&&this.state.password.password){
            console.log(11111111)
            if(this.reg.phone.test(this.state.phone.phone)){
                console.log(222222222)
                this.setState({
                    code:true
                })
                const {data}  = await axios.post('/api/code',{
                    userPhone:this.state.phone.phone
                })
                console.log(data)
                document.querySelector('#code').innerHTML = data.code;

                timer=setInterval(()=>{
                    if(this.state.time>0){
                        this.setState({
                            time:this.state.time-1
                        })
                    }else{
                        clearInterval(timer)
                        document.querySelector('#time').style.display='none'
                        document.querySelector('#reget').style.display='block'
                    }

                },1000)
            }
        }else{
            return
        }
    }
    async login(){
        const {data}=await axios.post('/api/login',{
            userPhone:this.state.phone.phone,
            code:this.state.a+this.state.b+this.state.c+this.state.d
        })
        if(data.ok===1){
            this.sessionStorage.user  = this.state.phone.phone
            this.props.history.push('/mine')
        }
        console.log(data)
    }
    changeHandl(v,e){
        console.log(this)
        this.setState({
            [v]:e.target.value
        })
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
                <input type="button" style={this.state.style} value={"获取短信验证码"} className={'login-btn'} onClick={this.getCode.bind(this)}/>
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
                <div  className={'login-code-item'}>
                    <input type="text" value={this.state.a} onChange={this.changeHandl.bind(this,'a')}/>
                </div>
                <div className={'login-code-item'}>
                    <input type="text" value={this.state.b} onChange={this.changeHandl.bind(this,'b')}/>
                </div>
                <div className={'login-code-item'}>
                    <input type="text" value={this.state.c} onChange={this.changeHandl.bind(this,'c')}/>
                </div>
                <div className={'login-code-item'}>
                    <input type="text" value={this.state.d}   onChange={async(e)=>{
                        this.setState({
                            d:e.target.value
                        })
                        const {data}=await axios.post('/api/login',{
                            userPhone:this.state.phone.phone,
                            code:this.state.a+this.state.b+this.state.c+e.target.value
                        })
                        if(data.ok===1){
                            sessionStorage.setItem('user',this.state.phone.phone)
                            this.props.history.push('/mine')
                        }
                        console.log(data)
                    }}/>
                </div>
            </div>
            <p style={{marginTop:'20px'}}>
                <span id={'code'}></span>
            </p>
            <p className={'login-code-time'} id={'time'}>
                <span>{this.state.time}</span> <span>秒后重新获取验证码</span>
            </p>
            <p className={'login-code-time'} style={{display:'none',color:'#ff6743'}} id={'reget'}>
                <span onClick={this.getCode.bind(this)}>重新获取验证码</span>
            </p>
        </Fragment>
        return (
            <div>
                <div className={'login-header'}>
                    <i className={'iconfont icon-xiaoyuhao'} onClick={()=>{
                        console.log(this.props)
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
