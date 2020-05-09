import React, {Component} from 'react';
import {
    withRouter
} from "react-router-dom"
class GuardRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <this.props.component {...this.props}/>
        )
    }
    componentDidMount(){
        console.log(this.props)
        if(this.props.isLogin){
            if(!sessionStorage.user){
                this.props.history.push('/login')
            }
        }
    }
}
export default withRouter(GuardRouter)