import React, { Component } from 'react'
import Title from '../components/common/Title'

export default class suggest extends Component {
    constructor(props){
        super(props)
        this.state={
            text:0
        }
    }
    render() {
        return (
            <div>
            <Title title={'意见反馈'}></Title>
            <div style={{width:'100%',background:'#ebebeb',height:'529px'}}>
               <div style={{background:'#fff',paddingBottom:'3%',fontSize:'12px'}}>
               <textarea style={{width:'90%',height:'120px',border:'0',margin:'5% 5% 0 5%',outline:'none'}} placeholder={'请填写您的问题或建议，我们将不断改进'} cols="20" rows="10" 
                onChange={(e)=>{
                    this.setState({
                        text:e.target.value.length
                    })
                }}
               ></textarea>
               <p style={{color:'#999',fontSize:'12px',textAlign:'right',marginRight:'20px'}}>{this.state.text}/200</p>
               </div>
               <div style={{height:'50px',background:"#fff",marginTop:'10px',textAlign:'left',fontSize:'14px',lineHeight:'50px',padding:'0 10px 0 10px'}}>
                   手机号 <input type="text" style={{border:'0',width:'195px',marginLeft:'15px',outline:'none'}} placeholder={'请填写手机号，以便于我们联系'}/>
               </div>
               <div style={{height:'50px',background:"#fff",marginTop:'10px',textAlign:'left',fontSize:'14px',lineHeight:'50px',padding:'0 10px 0 10px'}}>
                   所在城市 <span style={{float:'right',fontSize:'12px',color:'#ff6743'}}>请选择城市
                       <i className={'iconfont icon-dayu'} style={{fontSize:'10px',color:'#999'}}></i>
                   </span>
               </div>
               <button style={{width:'294px',height:'40px',border:'0',background:'#ff6743',color:'#fff',borderRadius:'20px',marginTop:'20px'}}>提交</button>
            </div>
        </div>
        )
    }
}
