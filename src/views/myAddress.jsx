import React, { Component } from 'react'
import Title from '../components/common/Title'
export default class myAddress extends Component {
    render() {
        return (
            <div>
                <Title title={'收货地址'}></Title>
                <div style={{width:'100%',height:'530px'}}>
                    <img style={{width:'106px',height:'66px',marginTop:'130px'}}  src={"https://m.juooo.com/static/img/address_empty_icon.7c96321.png"} alt=""/>
                    <p style={{fontSize:'12px',color:'#999',lineHeight:'30px'}}>暂时没有收货地址</p>
                </div>
                <button style={{width:'294px',height:'40px',border:'0',background:'#ff6743',position:"fixed",bottom:'15px',left:'13px',color:'#fff',borderRadius:'20px'}}>+添加收货地址</button>
            </div>
        )
    }
}
