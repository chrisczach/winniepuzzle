import React, { Component } from 'react';
import classes from './popup.module.css';

const Popup = props => {
  const shown = props.currGame && props.showInstall === true ? classes.show : classes.hide;
  return <div onClick={props.closePopup} className={shown + ' ' + classes.popup}>Install this app on your iPhone: tap  and then Add to homescreen.</div>;
};

export default Popup;
