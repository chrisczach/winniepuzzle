import React, { Component } from 'react';
import classes from './popup.module.css';

const Popup = props => {
  const shown = props.currGame && props.showInstall === true ? classes.show : classes.hide;
  return <div onClick={props.closePopup} className={shown + ' ' + classes.popup}><p> To install this app on your iPhone, tap <img align="middle"  src="./nav/action.png"  /> and then Add to homescreen.</p></div>;
};

export default Popup;
