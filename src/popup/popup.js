import React, { Component } from 'react';
import classes from './popup.module.css';

const Popup = (props) => {
const shown = props.showInstall === true ? classes.show : classes.hide;
return (
<div className={shown}>Install App popup shown</div>
)
}

export default Popup;