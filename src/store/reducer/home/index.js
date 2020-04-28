import {banner} from "../../state/home";
export const bannerRe = function (state=banner,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type === ""){

    }
    return state;
}