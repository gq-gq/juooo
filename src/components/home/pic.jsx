import React from 'react';
function picBox(props){
    const adData = props.data[0];
    return(
        <div className="picMassage">
            {
                adData?<img src={adData.pic} alt=""/>:console.log("等待")
            }
        </div>
    )
}
export default picBox