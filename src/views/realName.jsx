import React, { Component } from 'react'
import Title from '../components/common/Title'
export default class realName extends Component {
    render() {
        return (
            <div>
                <Title title={'添加购票人'}></Title>
                <div style={{width:'100%',height:'530px'}}>
                    <img style={{width:'106px',height:'66px',marginTop:'130px'}}  src={"https://m.juooo.com/static/img/real_name_empty.png"} alt=""/>
                    <p style={{fontSize:'12px',color:'#999',lineHeight:'30px'}}>暂无购票人</p>
                </div>
                <button style={{width:'294px',height:'40px',border:'0',background:'#ff6743',position:"fixed",bottom:'15px',left:'13px',color:'#fff',borderRadius:'20px'}}>+添加购票人</button>
            </div>
        )
    }
}
