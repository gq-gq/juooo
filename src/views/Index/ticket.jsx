import React, { Component,Fragment } from 'react'
import {
    Link
} from 'react-router-dom'
import Loading from '../../components/common/Loading'
import '../../assets/css/ticket.css'
export default class ticket extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoading:false,
            style:{
                display:'none'
            },
            info:<Loading></Loading>
        }
    }
    render() {
        
        return (
                <div className={'ticket-body'}>
                <div className={'ticket-header'}>
                    <h1 className={'ticket-header-title'}>票夹</h1>
                    <i className={'iconfont icon-more'} onClick={()=>{
                        this.setState({
                            style:{
                                display:'block'
                            }
                        })
                    }}></i>
                </div>
                {
                    this.state.info
                }
                <div className={"ticket-mark"} style={this.state.style} onClick={()=>{
                    this.setState({
                        style:{
                            display:'none'
                        }
                    })
                }}>
                     <div className={"ticket-mark-content"}>
                         <div className={'ticket-triangle'}></div>
                         <Link to={'/'} className={'ticket-home'}>
                             <img src={require('../../assets/img/home.png')} style={{width:'22px',height:'24px'}}/>
                             <p>主页</p>
                         </Link>
                         <Link to={'/mine'} className={'ticket-home'} >
                             <img src={require('../../assets/img/mine.png')} style={{width:'22px',height:'24px'}}/>
                             <p>我的聚橙</p>
                         </Link>
                     </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        const beforeLogin = <div style={{width:'100%',textAlign:'center',height:'100%',background:'#fefefe'}}>
            <img src={"https://m.juooo.com/static/img/ticket_empty.cf4b072.png"} style={{width:'93px',height:'66px',marginTop:'100px'}}/>
            <p style={{fontSize:'12px',color:'#999',lineHeight:'30px'}}>暂无电子票</p>
            {
                this.sessionStorage?"":<Link to={'/login'} className={'ticket-tologin'}>登录</Link>
            }
            
        </div>
        
        console.log(this.state.isLoading)
        setTimeout(() => {
            this.setState({
                info:
                <div className={'ticket-main'}>
                 {beforeLogin}
                </div> 
            })
        }, 1000);
    }
    componentWillUnmount(){
        this.setState({
            info:null,
            isLoading:false
        })
    }
}
