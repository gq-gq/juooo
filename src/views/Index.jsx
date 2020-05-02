import React, { Component } from 'react'
import {
    NavLink, 
} from 'react-router-dom'
import MyRouter from '../components/common/Router' 

export default class Index extends Component {
    render() {
        // console.log(this.props)
        return (
            <div>
                 <nav style={{position:'fixed',bottom:'0',left:'0'}}>
                    <NavLink to={'/'}>首页</NavLink>
                    <NavLink to={'/theater'}>剧院</NavLink>
                    <NavLink to={'/ticket'}>票夹</NavLink>
                    <NavLink to={'/mine'}>我的</NavLink>
                </nav>
                <MyRouter router={this.props.childrens}></MyRouter>
            </div>
        )
    }
}
