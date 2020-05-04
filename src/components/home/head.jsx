import React,{Component} from "react";
import {withRouter} from "react-router-dom";
import "../../assets/css/myHead.css";
class myHead extends Component {
    render(){
        return (
            <div className="myHead">
                <div className="header-left">
                    <i></i>
                    <span>全国</span>
                </div>
                <div className="header-middle">
                    <p onClick={()=>this.props.history.push("/Search")}>
                        <i></i>
                        <input type="text" placeholder="搜索热门演出"/>
                    </p>
                </div>
                <div className="header-right">
                    <i></i>
                </div>
            </div>
        )
    }
}
export default withRouter(myHead);