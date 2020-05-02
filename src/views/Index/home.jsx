import React, { Component } from 'react'
import {
    NavLink
} from 'react-router-dom'
import MyRouter from '../../components/common/Router'
export default class home extends Component {
    render() {
        return (
            <div> 
                <NavLink to={'/showList'}>表演列表</NavLink>
            </div>
        )
    }
}
