import React from 'react';

const Modal = (props) => {

    if(!props.show){
        return null
    }

    const handleCheck = (data) => {
        console.log(data)
    }

    const newImageList = props.image.map( (image) => {
        console.log(image)
        if(image.length !== 1){
            return (
                <div>
                    <img key={image[0]} src={require(`${image[0]}.png`)}/>
                    <img key={image[1]} src={require(`${image[1]}.png`)}/>
                    <img key={image[2]} src={require(`${image[2]}.png`)}/>
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
                <button className='button-close' onClick={props.handleClick}>close</button>
                <button className='button-add' >เพิ่มลงอาการของคุณ</button>
            </div>
        </div>
    </div>
  );
};

export default Modal;
