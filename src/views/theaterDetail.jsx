import React, { Component, Fragment } from 'react'
import {
    connect
} from 'react-redux'
import {
    Link
} from 'react-router-dom'
import Loading from '../components/common/Loading'
import {
    bindActionCreators
} from 'redux'
import theaterCreator from '../store/actionCreator/theater'
import '../assets/css/theaterDetail.css'
class theaterDetail extends Component {
    constructor(props) {
        super(props)
        this.isLoading = false
        this.theaterDetailListInfo =null
    }
    render() {
        if (this.props.theaterDetailList.length > 0) {
            this.isLoading = true
            this.theaterDetailListInfo = <div>
                <div className={'theaterDetail-header'}>
                    <i className={'iconfont icon-xiaoyuhao'}
                        onClick={() => {
                            this.props.history.push('/theater')
                        }}
                    ></i>
                    <div className={'theaterDetail-header-theater'}>
                        <div className={'theaterDetail-header-theaterTop'}>
                            <div className={'theaterDetail-header-theaterTop-pic'}>
                                <img src={this.props.theaterDetail.theatre_pic} />
                            </div>
                            <div className={'theaterDetail-header-theaterTop-detail'}>
                                <div className={'theaterDetail-header-theaterTop-name'}>{this.props.theaterDetail.theatre_name}</div>
                                <div className={'theaterDetail-header-theaterTop-play'}>{this.props.theaterDetail.sch_num} 场在售演出</div>
                            </div>
                        </div>
                        <div className={'theaterDetail-header-theaterAddress'}>
                            {this.props.theaterDetail.city_name}
                    &nbsp;|&nbsp;
                {this.props.theaterDetail.theatre_address}
                        </div>
                    </div>
                    <div className={'theaterDetail-header-theaterAddress-pic-b'}>
                        <div className={'theaterDetail-header-theaterAddress-pic'}></div>
                    </div>
                </div>
                <div className={'theaterDetail-tip'}>
                    热门演出
    </div>
                <div className={'theaterDetail-list'}>
                    {
                        this.props.theaterDetailList.map(v => (
                            <Link to={'/showDetail'} key={v.schedular_id} className={'theaterDetail-list-item'}>
                                <img className={'theaterDetail-list-item-pic'} src={v.pic} alt="" />
                                <div className={'theaterDetail-list-item-detail'}>
                                    <p className={'theaterDetail-list-item-detail-date'}>
                                        {v.start_show_time.substring(0, 10) + '-' + v.end_show_time.substring(5, 10)}
                                    </p>
                                    <p className={'theaterDetail-list-item-detail-content'}>
                                        {v.name}
                                    </p>
                                    <p className={'theaterDetail-list-item-detail-address'}>
                                        {v.city_name} &nbsp;|&nbsp;{v.venue_name}
                                    </p>
                                    <div style={{ width: '100%' }}>
                                        {
                                            v.support_desc.map((v, i) => (
                                                <span key={i} className={'theaterDetail-list-item-detail-label'}>{v}</span>
                                            ))
                                        }
                                    </div>
                                    <p className={'theaterDetail-list-item-detail-Price'}>
                                        <span className={'theaterDetail-list-item-detail-price'}>￥{v.min_price}</span>
                                起
                            </p>
                                </div>
                            </Link>
                        ))
                    }
                    <p style={{ width: '100%', textAlign: 'center', color: '#666', fontSize: '12px', marginBottom: '15px' }}>没有更多了</p>
                </div>
            </div>
        }
        return (
            <Fragment>
                {
                    this.isLoading ? this.theaterDetailListInfo : <Loading></Loading>
                }

            </Fragment>
        )
    }
    componentDidMount() {
        this.props.getTheaterDetail(this.props.match.params.id)
        this.props.getTheaterDetailList(this.props.match.params.venue_id)
    }
    componentWillUnmount(){
        this.isLoading = false
        this.theaterDetailListInfo=null
        this.props.clearInfo()
    }
}
function mapStateToProps(state) {
    return {
        theaterDetail: state.theater.theaterDetail,
        theaterDetailList: state.theater.theaterDetailList,
    }
}
export default connect(mapStateToProps, dispatch => bindActionCreators(theaterCreator, dispatch))(theaterDetail)