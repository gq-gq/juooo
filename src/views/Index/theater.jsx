import React, { Component, Fragment } from 'react'
import {
    Link
} from 'react-router-dom'
import {
    connect
} from 'react-redux'
import Loading from '../../components/common/Loading'
import axios from 'axios'
import {
    bindActionCreators
} from 'redux'
import '../../assets/css/theater.css'
import theaterCreator from '../../store/actionCreator/theater'

class theater extends Component {
    constructor(props) {
        super(props)
        this.theaterInfo = null
        this.isloading = false
    }
    render() {
        if (this.props.theaterList.length > 0) {
            this.isloading = true
            this.theaterInfo = this.props.theaterList.map(v => (
                <div className={"theater-main"} key={v.id}>
                    <div className={"theater-main-h"}>
                        <Link to={'/theaterDetail'} className={"theater-m-h"}>
                            <div className={"theater-m-img"}>
                                <img src={v.pic} alt="" />
                            </div>
                            <div className={"theater-name-count"}>
                                <p className={"theater-name"}>{v.name}</p>
                                <p className={"theater-count"}>{v.count}场在售演出</p>
                            </div>
                        </Link>
                        <Link to={'/theaterDetail'} className={"theater-more"}>
                            <img src={"https://m.juooo.com/static/img/more.2ce7873.png"} alt="" />
                        </Link>
                    </div>
                    <div className={"theater-show"}>
                        {
                            v.showList.map((m,i) => (
                                    <div className={"theater-show-item"} key={m.id}>
                                        <div className={"theater-show-date"}>
                                            <p className={"show-date"}>{m.show_time}</p>
                                            <span className={"show-dot"}></span>
                                        </div>
                                        <div className={"theater-show-pic"}>
                                            {
                                                i<8?
                                                (<Link to={'/login'} className={"theater-show-pic"}>
                                                    <img style={{ width: '100%', height: '100%' }} src={m.pic} alt="" />
                                                </Link>):
                                                (
                                                    <Link to={'/login'} className={"theater-show-pic"}>
                                                        <p style={{ width: '100%', height: '300px',background:'#f5f5f5',lineHeight:'130px',fontSize:'12px',textAlign:'center',marginBottom:'100px'}} >查看更多>></p>
                                                        <p style={{ width: '100%', height: '2000px',background:'#fff',textAlign:'center',marginBottom:'100px',verticalAlign:'top'}}></p>
                                                    </Link> 
                                                )
                                            }
                                            

                                        </div>
                                    </div> 

                            ))
                        }
                    </div>
                </div>
            ))
        }
        return (
            <Fragment>
                <div className={"theater-header"}>
                    <h3 className={"theater-title"}>剧院</h3>
                </div>
                <main>
                    {
                        this.isloading ? this.theaterInfo : <Loading></Loading>
                    }
                </main>
            </Fragment>
        )
    }
    componentDidMount() {
        console.log(this.props)
        this.isloading = false
        this.props.getTheaterList()
    }
}
function mapStateToProps(state) {
    return {
        theaterList: state.theater.theaterList,
    }
}
export default connect(mapStateToProps, dispatch => bindActionCreators(theaterCreator, dispatch))(theater)