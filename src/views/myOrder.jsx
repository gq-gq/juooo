import React, { Component,Fragment} from 'react'
import Title from '../components/common/Title'
export default class myOrder extends Component {
    render() {
        return (
            <Fragment>
                <Title title={'我的订单'}></Title>
                <div style={{width:'100%',height:'530px',background:'#f3f3f3'}}>
                    <img style={{width:'106px',height:'66px',marginTop:'100px'}}  src={"https://m.juooo.com/static/img/no_data.9e687c2.png"} alt=""/>
                    <p style={{fontSize:'12px',color:'#999',lineHeight:'30px'}}>暂无订单记录</p>
                </div>
            </Fragment>
        )
    }
    componentDidMount(){
        console.log(this.props)
    }
}
