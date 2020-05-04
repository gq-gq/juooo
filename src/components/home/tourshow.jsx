import React from "react";
function TourShow(props) {
    console.log(props.data[0])
    const tourData = props.data[0];
    let myCity=""
    if(tourData){
        tourData.citys.forEach((item)=>(
            myCity=myCity + item.name +" "+ "|"+" "
        ))
    }
  return (
    <div className="tour hot-show">
      <div className="hot-show-head">
        <span className="hot-show-left">巡回演出</span>
        <div className="hot-show-right">
          <span>全部</span>
          <i></i>
        </div>
      </div>
      <div className="tour-data">
            {
                tourData?
                    <div>
                        <div className="tour-left">
                            <img src={tourData.mobile_col_img} alt=""/>
                        </div>
                        <div className="tour-right">
                            <p>
                                <span>2020.08.13</span>-
                                <span>10.03</span>
                            </p>
                            <p>{tourData.name}</p>
                            <p>
                                <span>￥{tourData.min_price}</span>
                                <span>起</span>
                            </p>
                            <div className="tour-bottom">
                                <i>{tourData.citys.length}</i>
                                <span>城巡演</span>
                                <div className="tourCity">
                                  {myCity}
                                </div>
                            </div>
                        </div>
                   </div>
        :console.log("等待")
            }
      </div>
    </div>
  );
}
export default TourShow;
