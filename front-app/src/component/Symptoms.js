import React, { useState } from 'react';
import Popup from './Popup';

const Symptoms = ({symp}) => {

    const [data, setData] = useState([
        {id : 1, },
        {id : 2, },
        {id : 3, },
        {id : 4, },
        {id : 5, }
    ])

    const [isOpen, SetIsOpen] = useState(false)

    const handleClick = (sid) => {
        console.log(sid)
        SetIsOpen(!isOpen)
    }

    

  return (
  <div>
      {symp.map(symp => (
          <div key={symp.id}>
              <button type='button' onClick={() => handleClick(symp.id)}>{symp.title}</button>

              {isOpen && <Popup 
              content={<>
                <b>Design your Popup</b>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button>Test button</button>
              </>}
              handleClose={handleClick}
              ></Popup>}
          </div>
      ))}
  </div>
  );
};

export default Symptoms;
