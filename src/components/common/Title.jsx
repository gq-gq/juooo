import React, { Component, Fragment } from 'react'
import'../../assets/css/ticket.css'
import Loading from './Loading'
import {
    Link
} from 'react-router-dom'
export default class Title extends Component {
    constructor(props){
        super(props)
        this.state={
            style:{
                display:'none'
            },
        }
    }
    render() {
        return (
            <Fragment>
                 <div className={'ticket-body'}>
                <div className={'ticket-header'}>
                    <i className={'iconfont icon-xiaoyuhao'} style={{position:'absolute',top:'10px',left:'10px'}}></i>
                    <h1 className={'ticket-header-title'}>{this.props.title}</h1>
                    <i className={'iconfont icon-more'} onClick={()=>{
                        this.setState({
                            style:{
                                display:'block'
                            }
                        })
                    }}></i>
                </div>
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
            </Fragment>
        )
    }
}
