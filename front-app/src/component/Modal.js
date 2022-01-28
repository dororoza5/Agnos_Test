import React from 'react';

const Modal = (props) => {

    if(!props.show){
        return null
    }

    const newImageList = props.image.map( (image) => {
        console.log(image)
        if(image.length !== 1){
            return (
                <div className='modal-image-list'>
                    <img key={image[0]} src={require(`${image[0]}.png`)} className='modal-image'/>
                    <img key={image[1]} src={require(`${image[1]}.png`)} className='modal-image'/>
                    <img key={image[2]} src={require(`${image[2]}.png`)} className='modal-image'/>
                </div>
                )
            }else{
                return null
            }
    });

  return (
    <div className='modal' onClick={props.handleClick}>
        <div className='modal-content' onClick={(e) => e.stopPropagation()}>
            <div className='modal-header' >
                <h4 className='modal-title'>{props.title}</h4>
            </div>
            <div className='modal-body'>
                {props.data}
                {newImageList}
            </div>
            <div className='modal-footer'>
                <button className='button-close' onClick={props.handleClose}>กลับ</button>
                <button className='button-add' onClick={() => {props.handleAddYourSymp(props.title); props.handleClose();}}>เลือกอาการนี้</button>
            </div>
        </div>
    </div>
  );
};

export default Modal;
