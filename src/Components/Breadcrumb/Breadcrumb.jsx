import React from 'react';
import "./Breadcrumb.css";
import arrow from "../Assets/breadcrum_arrow.png";

const Breadcrumb = (props) => {
  return (
    <>
      Home <img src={arrow} alt="" /> Shop <img src={arrow} alt="" />{props.category} <img src={arrow} alt="" />{props.name} 
    </>
  )
}

export default Breadcrumb;