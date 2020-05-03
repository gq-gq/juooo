import React from "react"
function MyLabel(props){
    console.log(props)
    return(
        <div className="label">
            {
                console.log(9996,props.data),
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