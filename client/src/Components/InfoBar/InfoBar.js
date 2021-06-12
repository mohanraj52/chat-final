import React from 'react';
import closeIcon from '../../icons/closeIcon.png';
import './InfoBar.css';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      {/* <img className="onlineIcon" src={onlineIcon} alt="online icon" /> */}
      <svg className="onlineIcon" height="100" width="100">
  <circle cx="50" cy="50" r="10" fill="#7CFC00" />
  Sorry, your browser does not support inline SVG.  
</svg> 
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/"><img src={closeIcon} alt="close icon" /></a>
    </div>
  </div>
);

export default InfoBar;