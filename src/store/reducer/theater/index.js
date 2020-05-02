import theaterListInit from '../../state/theater/index'
import theaterType from '../../actionType/theater'
export default function (state=theaterListInit,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type===theaterType.GET_THEATER_LIST){
        state.theaterList = payload
    }
    return state;
}