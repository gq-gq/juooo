import React, { Component ,Fragment} from 'react'
import Title from '../components/common/Title'

export default class Mycard extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const style= {display:'inline-block',width:'60px',borderRight:'1px solid #ebebeb',paddingRight:'15px'}
        return (
            <Fragment>
                <Title title={'我的卡包'}></Title>
                <div style={{width:'100%',height:'530px',background:'#FFF'}}>
                    <img style={{width:'106px',height:'66px',marginTop:'100px'}}  src={"https://m.juooo.com/static/img/no-card-icon.fb286f5.png"} alt=""/>
                    <p style={{fontSize:'12px',color:'#999',lineHeight:'30px'}}>暂无可用卡</p>
                </div>
                <div style={{width:'100%',height:'40px',position:'fixed',bottom:'0',left:'0',borderTop:'1px solid #ebebeb',display:'flex',justifyContent:'space-around',alignItems:'center',fontSize:'13px'}}>
                    <span style={style}>购买新卡</span>
                    <span style={style}>绑定新卡</span>
                    <span style={{color:'#ff6743'}}>我的卡包</span>
                </div>
            </Fragment>
        )
    }
}
