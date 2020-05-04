import React, { Component } from "react";
import MyHead from "../../components/home/head";
import Carousel from "../../components/home/banner";
import MyLabel from "../../components/home/label"
import axios from "axios";

import { NavLink } from "react-router-dom";
import MyRouter from "../../components/common/Router";
import BookCarousel from "../../components/home/carousel";
import PicBox from "../../components/home/pic";
import HotShow from "../../components/home/hotshow";
import TourShow from "../../components/home/tourshow";
import ForYou from "../../components/home/foryou";
export default class home extends Component {
    constructor(props){
        super(props)
        this.state={
            carouselData:[],
            labelData:[],
            vipBookData:[],
            adData:[],
            hotData:[],
            tourData:[],
            showData:[],
        }
    }
  async getCarouselData() {
    const carouselData = await axios.get(
      "/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.1.1&referer=2"
    );
    this.setState({
        carouselData : carouselData.data.data.slide_list,
        labelData: carouselData.data.data.classify_list,
        adData: carouselData.data.data.ad_list.advert1
    })
  }
  async getVipBookData(){
    const bookData = await axios.get(
        "/vip/index/getVipHomeSchedular?city_id=0&version=6.1.1&referer=2"
      );
      this.setState({
          vipBookData : bookData.data.data.discountList
      })
  }
  async getHotShow(){
    const myHotData = await axios.get(
        "/home/index/getHotsRecommendList?city_id=0&version=6.1.1&referer=2"
      );
      this.setState({
          hotData : myHotData.data.data.hots_show_list
      })
  }
  async getTourShow(){
    const tourData = await axios.get(
        "/show/tour/getList?version=6.1.1&referer=2"
      );
      this.setState({
          tourData : tourData.data.data.list
      })
  }
  async getShowList(){
    const showData = await axios.get(
        "/show/tour/getList?version=6.1.1&referer=2"
      );
      this.setState({
          showData : showData.data.data.list
      })
  }
  componentDidMount(){
      this.getCarouselData()
      this.getVipBookData()
      this.getHotShow()
      this.getTourShow()
  }
  render() {
    return (
      <div className="myHome">
        {/* <NavLink to={'/showList'}>表演列表</NavLink> */}
        <MyHead></MyHead>
        <Carousel data={this.state.carouselData}></Carousel>
        <MyLabel data={this.state.labelData}></MyLabel>
        <BookCarousel data = {this.state.vipBookData}></BookCarousel>
        <PicBox data={this.state.adData}></PicBox>
        <HotShow data={this.state.hotData}></HotShow>
        <TourShow data={this.state.tourData}></TourShow>
        <ForYou></ForYou>

        <div className="space"></div>
      </div>
    );
  }
}
