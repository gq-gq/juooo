import theaterListInit from '../../state/theater/index'
import theaterType from '../../actionType/theater'
export default function (state=theaterListInit,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type===theaterType.GET_THEATER_LIST){
        state.theaterList = payload
    }
    if(type === theaterType.GET_THEATER_DETAIL){
        state.theaterDetail = payload
    }
    if(type === theaterType.GET_THEATER_DETAIL_LIST){
        state.theaterDetailList = payload
    }
    return state;
}