import theaterType from "../../actionType/theater"
import axios from "axios";
export function changeTheaterList(payload) {
    return {
        type:theaterType.GET_THEATER_LIST,
        payload
    }
}
export function changeTheaterDetail(payload){
    return {
        type:theaterType.GET_THEATER_DETAIL,
        payload
    }
}
export function changeTheaterDetailList(payload={}){
    return {
        type:theaterType.GET_THEATER_DETAIL_LIST,
        payload
    }
}
export default {
    getTheaterList(){
        
        return async (dispatch)=>{
// https://api.juooo.com/theatre/index/getTheatreList?page=1&version=6.1.1&referer=2
            const {data} = await axios.get('/theatre/index/getTheatreList?page=1&version=6.1.1&referer=2')
            // console.log(data.data.theatre_list)
            const arr = []
            data.data.theatre_list.map(v=>{
                
                if(v.showList.length>0){
                    const showList=v.showList.slice(0,8)
                    if(showList.length===8){
                        showList.push({
                            id:Math.random()*100,
                            show_time:'',
                            pic:'查看更多>>'
                        })
                        v.showList = showList
                    }
                    arr.push(v)
                }
            })
            console.log(arr)
            dispatch(changeTheaterList(arr))
        }
    },
    getTheaterDetail(id){
        return async (dispatch)=>{
            // https://api.juooo.com/theatre/index/getTheatreInfo?theatre_id=2&longitude=&latitude=&version=6.1.1&referer=2
            const {data} = await axios.get('/theatre/index/getTheatreInfo?theatre_id='+id+'&longitude=&latitude=&version=6.1.1&referer=2')
            console.log(data)
            dispatch(changeTheaterDetail(data.data))
        }
    },
    getTheaterDetailList(id){
        return async (dispatch)=>{
            // https://api.juooo.com/Show/Search/getShowList?page=1&venue_id=1078,1079,1795&version=6.1.1&referer=2
            const {data} = await axios.get('/Show/Search/getShowList?page=1&venue_id='+id+'&version=6.1.1&referer=2')
            console.log(data)
            dispatch(changeTheaterDetailList(data.data.list))
        }
    },
    clearInfo(){
        return (dispatch)=>{
            dispatch(changeTheaterDetailList())
        }
    }
}