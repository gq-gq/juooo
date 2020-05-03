import React, { Component } from "react";
import MyHead from "../../components/home/head";
import Carousel from "../../components/home/banner";
import MyLabel from "../../components/home/label"
import axios from "axios";

import { NavLink } from "react-router-dom";
import MyRouter from "../../components/common/Router";
import BookCarousel from "../../components/home/carousel";
export default class home extends Component {
    constructor(props){
        super(props)
        this.state={
            carouselData:[],
            labelData:[],
        }
    }
  async getCarouselData() {
    const carouselData = await axios.get(
      "/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.1.1&referer=2"
    );
    this.setState({
        carouselData : carouselData.data.data.slide_list,
        labelData: carouselData.data.data.classify_list,
    })
  }
  componentDidMount(){
      this.getCarouselData()
  }
  render() {
    return (
      <div>
        {/* <NavLink to={'/showList'}>表演列表</NavLink> */}
        <MyHead></MyHead>
        <Carousel data={this.state.carouselData}></Carousel>
        <MyLabel data={this.state.labelData}></MyLabel>
        <BookCarousel></BookCarousel>
      </div>
    );
  }
}
