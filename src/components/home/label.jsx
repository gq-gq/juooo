import React from "react"
function MyLabel(props){
    return(
        <div className="label">
            {
                props.data.map((item,index)=>(
                    <div className="label-box" key={item.id}>
                        <img src={item.pic} alt=""/>
                        <p><span>演唱会</span></p>
                    </div>
                   ))
            }
        </div>
    )
}
export default MyLabel