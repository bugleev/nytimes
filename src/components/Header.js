import React from "react";
import img from "./The_New_York_Times_logo2.png";
import { header } from './styles'
import Navbar from "./Navbar";

const Header = (props) => {
  return (
    <div className="header uk-width-3-4@m uk-text-center">
      <Navbar />
      <div className="uk-width-1-1 uk-width-4-5@s uk-width-1-2@l logo">
        <img src={img} className="uk-width-1-1" alt="NYTimes logo" />
      </div>
      <style jsx>{header}</style>
    </div>
  )
}
export default Header;