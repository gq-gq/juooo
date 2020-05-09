import React, { Component } from 'react'

export default class points extends Component {
    render() {
        return (
            <div>
                <div style={{height:'145px',background:'linear-gradient(50deg, #ff9a34, #ff4d4a)',color:'#fff'}}>
                    <i className={'iconfont icon-xiaoyuhao'} style={{float:'left',margin:'10px 0 0 10px'}} onClick={()=>{
                        this.props.history.push('/mine')
                    }}></i>
                    <span style={{display:'inline-block',marginTop:'10px'}}>积分商城</span>
                    <div style={{fontSize:'30px',marginTop:'50px'}}>
                        <span style={{marginLeft:'90px'}}>0</span>
                        <span style={{float:'right',background:'rgba(254,254,254,0.86)',color:'#ff6743',width:'60px',height:'25px',borderRadius:'20px 0 0 20px',lineHeight:'25px',fontSize:'13px'}}>明细</span>
                    </div>
                    <p style={{fontSize:'10px',marginLeft:'30px'}}>可用积分</p>
                </div>
                <div style={{width:'100%'}}>
                    <img style={{width:'106px',height:'66px',marginTop:'100px'}}  src={"https://m.juooo.com/static/img/schedule_empty.82d078c.png"} alt=""/>
                    <p style={{fontSize:'12px',color:'#999',lineHeight:'30px'}}>暂无积分换购</p>
                </div>
            </div>
        )
    }
}
