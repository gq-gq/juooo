import React, { Component } from 'react'
import axios from 'axios'
import '../assets/css/search.css'
import {
    Link
} from 'react-router-dom'
export default class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            keyWords:null,
            searchWord:'',
            searchList:[],
            recommend:[]
        }
    }
    getsearch(key,e){
        console.log(key)
        this.setState({
            searchWord:key
        })
        console.log(this)
        this.getSearch.call(this,key)
    }
    changeValue(e){
        console.log(123)
        this.setState({
            searchWord:e.target.value
        })
        this.getSearch.call(this,e.target.value)
    }
    async getSearch(key,e){
        this.props.history.push('/Search?k='+key)
        console.log(this.props.location.search.substring(3))
        const {data} = await axios.get('/Show/Search/getShowList?city_id=&category=&keywords='+key+'&venue_id=&start_time=&page=1&referer_type=&version=6.1.1&referer=2')
        if(data.data.list.length>=25){
            this.setState({
                recommend:data.data.list
            })
        }else{
            this.setState({
                searchList:data.data.list
            })
        }  
    }
    intoList(arr){
        const list = arr.map(v=>(
            <Link to={'/palyDetail'} key={v.schedular_id} className={'search-request-item'}>
                                        <img src={v.pic} alt=""/>
                                        <p className={'search-request-item-name'}>
                                            {v.method_icon.length>0?
                                                <img src={v.method_icon} style={{width:'28px',height:'14px',verticalAlign:'middle'}}/>:''
                                            }
                                            {v.name.split('《')[0]}《
                                            <span className={'search-request-item-name-key'}>{this.state.searchWord}</span>》
                                            {v.name.split('》')[1]}
                                        </p>
                                        <p className={'search-request-item-date'}>
                                            {   v.show_time_data.length>1?
                                            <span>
                                                {v.start_show_time.substring(0,10)+'-'+v.end_show_time.substring(0,10)}
                                            </span>:
                                            <span>{v.start_show_time.substring(0,10)}</span>
                                                
                                            }
                                        </p>
                                        <p className={'search-request-item-Price'}>
                                            <span className={'search-request-item-price'}>￥{v.min_price}</span>
                                            起
                                        </p>
                                        <div style={{ width:'100%',textAlign:'left'}}>
                                            {
                                                v.support_desc.map((v, i) => (
                                                    <span key={i} className={'search-request-item-label'}>{v}</span>
                                                ))
                                            }
                                        </div>
                                    </Link>
        ))
        return list
    }
    render() {
        return (
            <div style={{background:(this.state.searchList.length>0||this.state.recommend.length>0)?'#f0f0f0':'#fff',minHeight:'568px'}}>
                <div className={'searchInput-header'}>
                    <div className={'searchInput-header-search'}>
                        <img src={'https://m.juooo.com/static/img/search_icon.c387af4.png'} className={'searchInput-header-search-big'}/>
                        <input type={"text"} placeholder={'搜索热门演出'} 
                            className={'searchInput-header-search-input'}
                            value={this.state.searchWord}
                            onChange={this.changeValue.bind(this)}
                            />
                        <img src={'https://m.juooo.com/static/img/cancel.4cc4580.png'} className={'searchInput-header-search-cha'}
                        onClick={()=>{
                            this.setState({
                                searchList:[]
                            })
                        }}
                        />
                    </div>
                    <span style={{fontSize:'12px',color:'#666'}} onClick={()=>{
                        this.props.history.push(-1)
                    }}>取消</span>
                </div>
                {  this.state.searchList.length>0?
                        <div className={'search-request'}>
                            {
                                this.intoList(this.state.searchList)
                            }
                            <p style={{width:'100%',textAlign:'center',fontSize:'12px',color:'#dded',lineHeight:'30px'}}>没有更多了</p>
                        </div>
                    : 
                        (this.state.searchWord.length>0?
                        <div>
                            <div style={{width:'100%',height:'55px',textAlign:"center",margin:'30px 0'}}>
                                <img src={"https://m.juooo.com/static/img/empty_icon.d1aca0e.png"} style={{width:'78px',height:'55px',}} alt=""/>
                                <p style={{width:'100%',lineHeight:'30px',fontSize:'12px',color:'#999'}}>未找到相关内容</p>
                            </div>
                            <div>
                                <h1 style={{width:'92%',textAlign:"left",fontWeight:'bold',lineHeight:'40px',fontSize:'16px',padding:'0 4%'}}>为你推荐</h1>
                                <div className={'search-request'}>
                                    {
                                        this.intoList(this.state.recommend)
                                    }
                                </div>
                            </div>
                        </div>:
                        this.state.keyWords)
                    }
            </div>
        )
    }
    async componentDidMount(){
        console.log(this.props.location)
        const {data} = await axios.get('/Show/Search/getNewHotWord?version=6.1.1&referer=2') 
        this.setState({
            keyWords:<div>
                <h1 className={'search-keyTitle'}>热门搜索</h1>
                <div className={'search-allkeywords'}>
                    {
                        data.data.map((v,i)=>(
                            <span className={'search-keywords'} key={i}
                            onClick={this.getsearch.bind(this,v.word)}
                            >{v.word}</span>
                        ))
                    }
                </div>
            </div>
        })
        if(this.props.location.search.substring(3).length>0){
            this.getSearch.call(this,this.props.location.search.substring(3))
        }
    }
}
