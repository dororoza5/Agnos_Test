import React, { useState } from 'react';

const SortTag = (props) => {

    const handleClick = () => {
        props.changeStatus(!props.status)
    }

  return (
  <div>
      {/* {status && <button ><img src={props.open} onClick = {handleClick}></img></button>}
      {!status && <button ><img src={props.close} onClick = {handleClick}></img></button>} */}

      {props.status && <button ><img src={require('./img/display_cat/'+props.title+'-sl.png')} onClick = {handleClick}></img></button>}
      {!props.status && <button ><img src={require('./img/display_cat/'+props.title+'-df.png')} onClick = {handleClick}></img></button>}
  </div>
  );
};

export default SortTag;
