import React, { Component, Fragment } from 'react'
import axios from 'axios'
import '../assets/css/myset.css'
export default class Myset extends Component {
    constructor(props){
        super(props)
        this.state={
            userName:'',
            userID:''
        }
    }
    async getUser(){
        const {data} = await axios.get('/api/getUser',{
            params:{
                userPhone:sessionStorage.user
            }
        })
        this.setState({
            userName:data.user.userName,
            userID:data.user.userId
        })
        console.log(data)
    }
    render() {
        return (
            <div className={'myset'}>
                <div className={'myset-header'}>
                <i className={'iconfont icon-xiaoyuhao'} onClick={()=>{
                    this.props.history.push('/mine')
                }}></i>
                    <h1>
                        设置
                    </h1>
                </div>
                <div className={'myset-main-user'}>
                    <div>
                        <img className={'myset-main-userLogo'} src={" https://image.juooo.com/group1/M00/03/6F/rAoKNV0XF2uABEtSAAANUrP00o0602.png"} alt=""/>
                    </div>
                    <div>
                        <p className={'myset-main-userName'}>{this.state.userName}</p>
                        <p className={'myset-main-userID'}>用户ID:<span>{this.state.userID}</span> </p>
                    </div>
                    <div>
                        <i className={'iconfont icon-dayu'}></i>
                    </div>
                </div>
                <div style={{width:'294px',height:'0.5px',background:'#ebebeb',marginLeft:'13px'}}></div>
                <div className={'myset-main-safe'}>
                    <p>账户安全</p>
                    <i className={'iconfont icon-dayu'}></i>
                </div>
                <div className={'myset-main-safe'} style={{marginTop:'10px'}}>
                    <p>用户协议</p>
                    <i className={'iconfont icon-dayu'}></i>
                </div>
                <div style={{width:'294px',height:'0.5px',background:'#ebebeb',marginLeft:'13px'}}></div>
                <div className={'myset-main-safe'}>
                    <p>关于聚橙</p>
                    <i className={'iconfont icon-dayu'}></i>
                </div>
                <input type="button" className={'myset-outLogin'} value={'退出登录'} onClick={()=>{
                    sessionStorage.removeItem('user')
                }}/>
            </div>
        )
    }
    componentDidMount(){
        this.getUser()
    }
}
