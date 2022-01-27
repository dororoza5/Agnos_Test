import React, { useState } from 'react';
import Modal from './Modal';
import Popup from './Popup';

const Symptoms = ({symp,handleAddYourSymp}) => {

    const [data, setData] = useState([
        {id : 1, content : '', img : ['']},
        {id : 2, content : '', img : ['']},
        {id : 3, content : '', img : ['./img/jaundice/jaundice-1','./img/jaundice/jaundice-2','./img/jaundice/jaundice-3']},
        {id : 4, content : 'ขี้ตาเยอะ เป็นหนอง หรือเป็นมูก', img : ['']},
        {id : 5, content : 'ฝ้าหรือคราบขาวนั้น ไม่หายไปด้วยการใช้แปรงสีฟันแปรงออก', img : ['./img/oral_thrush/oral-thrush-1','./img/oral_thrush/oral-thrush-2','./img/oral_thrush/oral-thrush-3']}
    ])

    const [isOpen, SetIsOpen] = useState(false)
    const [index, setIndex] = useState(0)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState([''])

    const handleClick = (input) => {
        console.log(data.filter(data => data.id === input.id).map(data => data.img))
        SetIsOpen(!isOpen)
        setIndex(input.id)
        setTitle(input.title)
        setContent(data.filter(data => data.id === input.id).map(data => data.content))
        setImage(data.filter(data => data.id === input.id).map(data => data.img))
    }

    const handleClose = () => {
        SetIsOpen(!isOpen)
    }

    

    return (
    <div>
        {symp.map(symp => (
            <div key={symp.id}>
                <button type='button' onClick={() => handleClick(symp)}>{symp.title} +</button>
            </div>
            
        ))}
        
        <Modal 
            show={isOpen} 
            handleClose={handleClose} 
            title={title}
            id={index}
            data={content}
            image={image}
            handleAddYourSymp = {handleAddYourSymp}
        />
    </div>
  );
};

export default Symptoms;
