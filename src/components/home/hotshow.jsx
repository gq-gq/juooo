import React from "react";
function HotShow(props) {
  const hotData = props.data;
  return (
    <div className="hot-show">
      <div className="hot-show-head">
        <span className="hot-show-left">热门演出</span>
        <div className="hot-show-right">
          <span>全部</span>
          <i></i>
        </div>
      </div>
      <div className="hot-show-body">
        {hotData.map((item, index) => (
          <div className="show-data" key={item.pic}>
            <img src={item.pic} alt="" />
            <p>{item.show_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HotShow;
