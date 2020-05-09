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
                                <Link to={'/balance'} className={'mine-main-bottom-item'} >
                                    <p style={{fontSize:'16px',color:sessionStorage.user?'orange':''}}>{!this.state.user?0:this.state.userInfo.basic_info.user_money}</p>
                                    <p style={{fontSize:'10px',color:'#666'}}>账户余额</p>
                                </Link>
                                <div className={'mine-main-bor'}></div>
                                <Link to={'/points'} className={'mine-main-bottom-item'}>
                                    <p style={{fontSize:'16px',color:sessionStorage.user?'orange':''}}>{!this.state.user?0:this.state.userInfo.basic_info.scores}</p>
                                    <p style={{fontSize:'10px',color:'#666'}}>积分</p>
                                </Link>
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
                            <Link to={'/myOrder'} className="mine-list-item">
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
                            <Link to={'/mycard'} className="mine-list-item">
                                <img src={require('../../assets/img/card.png')} alt=""/>
                                <p className="mine-list-name">我的卡包</p>
                            </Link>
                        </div>
                    </div>
                    <div className="mine-set">
                        <div className="mine-list">
                            <Link to={'/realName'} className="mine-list-item">
                                <img src={require('../../assets/img/shi.png')} alt=""/>
                                <p className="mine-list-name">实名购票人</p>
                            </Link >
                        </div>
                        <div className="mine-list">
                            <Link to={'/myAddress'} className="mine-list-item">
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
                        <div className="mine-list" onClick={()=>{
                            document.querySelector('.mine-server').style.height='568px'
                        }}>
                            <div className="mine-list-item">
                                <img src={require('../../assets/img/ke.png')} alt=""/>
                                <p style={{color:'orange',}} className="mine-list-name">客服帮助</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'mine-server'} onClick={()=>{
                            document.querySelector('.mine-server').style.height='0'
                        }}>
                    <div style={{marginRight:'20px'}}>
                        <div className={'mine-server-img'}>
                            <img src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAABCCAMAAAAyozueAAAAnFBMVEUAAAD+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7xIzj2AAAAM3RSTlMAcED58bCAD8vAMyES9SsL67Z1BeemTDvgxI4WyGJgUBzu06KTiXxd5M+smIRn2bpUBzDvgkMzAAACm0lEQVRYw6TT207yQBiF4QUtbYHu7EZsLRUjFYJBo+/939ufTMLBb7qZynP4TbJmTWZGY8KXbvXpOjju56p7CfUn4bXhf811ftT2w8Eomq/VV1NgOB9bzeHXJqXydv5tsvMqk1T7svZYAKm3/d3RS4HiUXbyGnCzpGcpyVygzmUheQDKZ/V7LoGHRJP8AKJWw9oIAn+yTQXpRmM2KVRTjS5w3mrc9gwXjcrgNdaU+BWy0coOLDVtCc7Y4QN4l413CDToCoHsBHDVgPwJNrKzgadc/fZQylYJ++GusWzFEAyurGVvPbSrB63steCpTwW+7PlQqUfiEGiOACfpv8lac9T9r+QEe82xh1P/U99pjl3vJzqUEGuOGMrDr9GxAEhPsndKAYpjrJvvIzetbLXcHL9l+A3gXjqvhDSXnTyF0usuLtD4ZlKBuzCZb7P++5s5y8KFKpfkwTmWsYCl7CxhISM+gyeFEdGP7sjRT0QUKoNOd+Wog0xrONyZc4C1/jVTb7sJAlEYhX8dPAKxoEVSahUwWipV0/X+79ZSJO1VAw4X/R5gZc8keztksuwowxEE1p0ABCPrzuhfdvr5H5/CulPgawqeZceDqcYQWnZCGMs1pDurzi7FuNIJisSikxRwkrQ4Qxypsod1+yO/VyWK4bzQFzcGsnKzHRv8hdpZ+JjxdlNmQOzeJgtoHNTWgUaQqBFdqJhS7ZV8u0T6zRseX66JOliuMO9DT7au8KgeFLCWvSPMZM976GecAHLZe4LXSS8ZY/8qLwCu6mKez2r5XDfLzQpMt8zEoeFMVEnCGIjn6mQIvlPxYSg3Kp+pnCbqZguD5sKtDLW3D8miU5uGO8mq8zDLB/eudwTZqJJBpPu5/HBlYZBSSwf60ycn4nQzmkwtyAAAAABJRU5ErkJggg=='} alt=""/>
                        </div>
                        <p style={{lineHeight:'25px'}}>在线咨询</p>
                    </div>
                    <div style={{marginLeft:'20px'}}>
                        <div className={'mine-server-img'}>
                            <img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5CAMAAAC7xnO3AAAAqFBMVEUAAAD+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v5OdmBFAAAAN3RSTlMA+8YPCwMdFQfwL+tbNyP3885+GeaWSCvBpIlB3tRy19C+jlZOkYNm4revqZ93Yzy6mmgo2bNtKt3gNQAAArVJREFUSMedlumSqjAUhAnKJsguArKIKLiPjku//5vdTJWDiNGJt/8lxUeak9OnEG6S4xSwCkP4VOMCIDagXT8EByJQ1PPYh1Z+DG5MQVANDfnwU9ATqKQdwcr7CIxuj/e2QKxyguYPqLRWVs0H9qMWSDVZwp9wkYaNy8OX1TZEmYfcYPlYTXUERH0OMsG2UxHlAOJykCDfT8XOoc85SD142is1XJT/IqURkr9biVC3T9rz3MwZ2/7TmcdOwZmKcB539740rHp/krVFdp2t3oorbLIDsZOOK0HE0/VVt0bjFMsxV8gShN7jlVD/PJJikKy1nvsIFc7pdYZj3lO3gRYInNoBM6kp7AaJyUvKYrsFM4K9wKvSxkFpKpZiqvCS/SOI++tXqghc/vE3bSXSdKBPuFHDag0fw6YLbr8LYPSbGZUuoh53fQsga0+iWOVFhwn0oNW6lsuNGjbSQTOvE1jxg+HxvAxefLxUAYXZdO8SJLo/6VWpZuth+aJKW2AtN6dOAfFmXzUcgh9pMbtwygXYKo29FaC7HjUz2FjANAtiH2R9YqJmCIyatyoznQL1MPMBP/6JcODQjUB60Utk1r8XTSSABtjryc3HmkDP+sy7SSnau5twHRtE3Dc7vUoDjswUfuUPqHCqZ+7DpxlnIGS29YSio3bK1O67D0Cyl1inUsOR965RRwTajoUOHWBtvovH1YdlMEdaCISDN6hU+lix7/UCpHOWn3sONYEpZdvcG1t7glcvdZt7YyqG9Tp0CSDOBbZoCIs3US8A31UEdvWtdzPZm9kgh4AJYvH2j0k1poA+O3VbxWmm3WudjjYgXr3OiYRG8S+pZWgBxbcsNSfygVTyLicgojtUVNp3cp3zglTjKgewXFff2YI6IAsK8mrghqAioMpbrcXl2ViINuCv3CYJ/wACS1E4BZxv/wAAAABJRU5ErkJggg=="} alt=""/>
                        </div>
                        <p style={{lineHeight:'25px'}}>电话咨询</p>
                    </div>
                </div>
            </div>
        )
    }
}
