import React, { Component, Fragment } from 'react'
import '../../assets/css/mine.css'
import axios from 'axios'
import {
    Link
} from 'react-router-dom'
export default class mine extends Component {
    constructor(props){
        super(props)
        this.state={
            user:false,
            userInfo:{userName:'hh',userId:'ll'}
        }
    }
    goLogin(path,e){
        if(!sessionStorage.user){
            this.props.history.push('/login')
        }else{
            this.props.history.push(path)
        }
    }
    async getUserMessage(){
        if(!sessionStorage.user){
            const {data} = await axios.get('/user/account/basicInfo?version=6.1.1&referer=2')
            console.log(data)
            this.setState({
                user:true,
                userInfo:data.data
            })
            console.log(this.state.userInfo['basic_info']['user_money'])
        }else{
            const {data} = await axios.get('/api/getUser',{
                params:{
                    userPhone:sessionStorage.user
                }
            })
            console.log(data)
            this.setState({
                user:true,
                userInfo:data.user
            })
        }
    }
    componentDidMount(){
        this.getUserMessage()
    }
    render() {
        return (
            <div>
                <div className="mine">
                    <div className="top">
                        <i className="iconfont icon-shezhi" onClick={()=>{
                            this.goLogin.call(this,'/Myset')
                        }}></i>
                        <div className="mine-main">
                            <div onClick={this.goLogin.bind(this)}>
                            <div style={{display:'flex'}}>
                                <div className={"mine-main-userLogo"}>
                                    <img src={sessionStorage.user?'https://image.juooo.com/group1/M00/03/6F/rAoKNV0XF2uABEtSAAANUrP00o0602.png':"https://m.juooo.com/static/img/logo-user.8413cbf.png"} alt="" />
                                </div>
                                <div className={"mine-main-userLogo-right"}>
                                    <p className={"mine-main-userLogo-right"}>{sessionStorage.user?this.state.userInfo.userName:'登录/注册'}</p>
                                    <p className={"mine-main-userLogo-right2"}>{sessionStorage.user?'ID:'+this.state.userInfo.userId:<Fragment>请点击登录
                                        <i className={'iconfont icon-dayu'}></i></Fragment>}
                                    </p>
                                </div>
                            </div>
                            <div className={'mine-main-vip'}>
                                <p style={{background:sessionStorage.user? "linear-gradient(-45deg, #f5dea9, #f8d583)":'',color:sessionStorage.user?'#232323':''}}>普通会员</p>
                            </div>
                            </div>
                            <div className={'mine-main-bottom'}>
                                <div className={'mine-main-bottom-item'}>
                                    <p style={{fontSize:'16px',color:sessionStorage.user?'orange':''}}>{!this.state.user?0:this.state.userInfo.basic_info.user_money}</p>
                                    <p style={{fontSize:'10px',color:'#666'}}>账户余额</p>
                                </div>
                                <div className={'mine-main-bor'}></div>
                                <div className={'mine-main-bottom-item'}>
                                    <p style={{fontSize:'16px',color:sessionStorage.user?'orange':''}}>{!this.state.user?0:this.state.userInfo.basic_info.scores}</p>
                                    <p style={{fontSize:'10px',color:'#666'}}>积分</p>
                                </div>
                                <div className={'mine-main-bor'}></div>
                                <div className={'mine-main-bottom-item'}>
                                    <p style={{fontSize:'16px',color:sessionStorage.user?'orange':''}}>{!this.state.user?0:this.state.userInfo.coupon_info.total}</p>
                                    <p style={{fontSize:'10px',color:'#666'}}>优惠券</p>
                                </div>
                                <div className={'mine-main-bor'}></div>
                                <div className={'mine-main-bottom-item'}>
                                    <p style={{fontSize:'12px'}}>立即开通</p>
                                    <p style={{fontSize:'10px',color:'#666'}}>橙PLUS卡</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={"https://m.juooo.com/static/img/ad.411f5e6.png"} alt="" className="mine-advPic" />
                    <div className="mine-set">
                        <div className="mine-list">
                            <Link to={'/order'} className="mine-list-item">
                                <img src={require('../../assets/img/order.png')} alt=""/>
                                <p className="mine-list-name">我的订单</p>
                            </Link>
                        </div>
                        <div className="mine-list">
                            <Link to={'/ticket'} className="mine-list-item">
                               <img src={require('../../assets/img/ticket.png')} alt=""/>
                                <p className="mine-list-name">我的票夹</p>
                            </Link>
                        </div>
                        <div className="mine-list">
                            <Link to={'/card'} className="mine-list-item">
                                <img src={require('../../assets/img/card.png')} alt=""/>
                                <p className="mine-list-name">我的卡包</p>
                            </Link>
                        </div>
                    </div>
                    <div className="mine-set">
                        <div className="mine-list">
                            <Link to={'/shi'} className="mine-list-item">
                                <img src={require('../../assets/img/shi.png')} alt=""/>
                                <p className="mine-list-name">实名购票人</p>
                            </Link >
                        </div>
                        <div className="mine-list">
                            <Link to={'/getAddress'} className="mine-list-item">
                                <img src={require('../../assets/img/adress.png')} alt=""/>
                                <p className="mine-list-name">收货地址</p>
                            </Link>
                        </div>
                        <div className="mine-list">
                            <Link to={'/suggest'} className="mine-list-item">
                                <img src={require('../../assets/img/suggest.png')} alt=""/>
                                <p className="mine-list-name">意见反馈</p>
                            </Link>
                        </div>
                        <div className="mine-list">
                            <div className="mine-list-item">
                                <img src={require('../../assets/img/ke.png')} alt=""/>
                                <p style={{color:'orange',}} className="mine-list-name">客服帮助</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
