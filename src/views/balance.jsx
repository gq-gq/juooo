import React, { Component } from 'react'
import '../assets/css/balance.css'
export default class balance extends Component {
    constructor(props){
        super(props)
        this.state={
            act:1
        }
    }
    render() {
        return (
            <div>
                <div className={'balance-header'}>
                    <div className={'balance-header-title'}>
                        <i className={'iconfont icon-xiaoyuhao'} onClick={()=>{
                            this.props.history.push(-1)
                        }}></i>
                        <h1>账户余额</h1>
                    </div>
                    <p style={{fontSize:'30px',marginTop:'35px'}}>0.00</p>
                    <p style={{fontSize:'10px',marginTop:'5px'}}>账户余额(元)</p>
                </div>
                <img style={{width:'100%',height:'22px'}} src={"https://m.juooo.com/static/img/balance_bg.5c2e206.png"}alt=""/>
                <ul className={'balance-main'}>
                    <li className={this.state.act===1?'balance-active':''} onClick={()=>{
                        this.setState({
                            act:1
                        })
                    }}>余额收入</li>
                    <li className={this.state.act===2?'balance-active':''} onClick={()=>{
                        this.setState({
                            act:2
                        })
                    }}>余额支出</li>
                </ul>
                <div>
                    <img style={{width:'106px',height:'66px',marginTop:'70px'}} src={"https://m.juooo.com/static/img/balance_empty.5362dbb.png"} alt=""/>
                    <p style={{fontSize:'12px',color:'#999',marginTop:'10px'}}>暂无交易记录</p>
                </div>
            </div>
        )
    }
}
