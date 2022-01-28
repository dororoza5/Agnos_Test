import React, { useState } from 'react';

const SortTag = (props) => {

    const handleClick = () => {
        props.changeStatus(!props.status)
    }

  return (
  <div className={props.className}>
      {props.status && <button className='button-image'><img className='sort-image' src={require('./img/display_cat/'+props.title+'-sl.png')} onClick = {handleClick}></img></button>}
      {!props.status && <button className='button-image'><img className='sort-image' src={require('./img/display_cat/'+props.title+'-df.png')} onClick = {handleClick}></img></button>}
  </div>
  );
};

export default SortTag;
